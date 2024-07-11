import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService } from './messages.service';
import { UserService } from './user.service';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  image: string;
  roomId: { [key: number]: string };
  email: string;
}

export interface Message {
  sender: string;
  content: string;
}

@Component({
  selector: 'app-ig-canvas',
  templateUrl: './ig-canvas.component.html',
  styleUrls: ['./ig-canvas.component.css'],
})
export class IgCanvasComponent implements OnInit {
  public roomId: string = '';
  public messageText: string = '';
  public messageArray: Message[] = [];

  public showScreen = false;
  public phone: string = '';
  public currentUser: User | null = null;
  public selectedUser: User | null = null;
  public userList: User[] = [];
  public userSelected = false;

  public selectedUsers: User[] = [];

  @ViewChild('chatContainer') chatContainerRef!: ElementRef;

  constructor(
    private userService: UserService, 
    private messageService: MessageService
  ) {}
  
  ngOnInit(): void {
    // Obtener el usuario actual desde el Local Storage
    const currentUserData = localStorage.getItem('currentUser');
    if (currentUserData) {
      this.currentUser = JSON.parse(currentUserData);
      this.phone = this.currentUser?.phone || '';
      this.showScreen = true;
      this.loadUsersFromBackend();
      this.loadSelectedUsersFromLocalStorage();
      if (this.selectedUser) {
        this.loadMessagesFromBackend(this.phone, this.selectedUser.phone);
      }
    }
  }

  selectUserHandler(phone: string): void {
    this.selectedUser = this.userList.find((user) => user.phone === phone) ?? null;
    this.phone = this.selectedUser?.phone || '';
    this.userSelected = true;
    if (this.currentUser && this.selectedUser) {
      this.loadMessagesFromBackend(this.currentUser.phone, this.selectedUser.phone);
    }  }

  sendMessage(): void {
    if (!this.currentUser || !this.selectedUser) {
      return;
    }

    this.messageService.sendMessage(
      this.currentUser.phone, this.selectedUser.phone, this.messageText
      ).subscribe(() => { 
        this.messageText = '';
        if (this.currentUser && this.selectedUser)  {
          this.loadMessagesFromBackend(this.currentUser.phone, this.selectedUser.phone);
        }    });
  }

  private loadUsersFromBackend(): void {
    this.userService.getUsers().subscribe((users) => {
      this.userList = users.filter((user) => user.phone !== this.currentUser?.phone);
      if (!this.userList.some((user) => user.phone === this.selectedUser?.phone)) {
        this.selectedUser = this.userList.length > 0 ? this.userList[0] : null;
      }
    });
  }
  private loadMessagesFromBackend(senderPhone: string, receiverPhone: string): void {
    this.messageService.getMessages(senderPhone, receiverPhone).subscribe((messages) => {
      this.messageArray = messages;
      this.scrollToBottom();
    });
  }

  ngAfterViewInit(): void {
    if (this.userSelected) {
      this.scrollToBottom();
      this.userSelected = false;
    }
  }
  private scrollToBottom(): void {
    const chatContainer: HTMLElement = this.chatContainerRef.nativeElement;
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  // Function to generate the avatar URL for the given user
  public generateAvatar(user: any): string {
    return `https://ui-avatars.com/api/?name=${user.firstName} ${user.lastName}`;
  }

  onUserSelected(event: any): void {
    const phone = event.target.value;
    if (!this.selectedUsers.some((user) => user.phone === phone)) {
      const selectedUser = this.userList.find((user) => user.phone === phone);
      if (selectedUser) {
        this.selectedUsers.push(selectedUser);
        this.saveSelectedUsersToLocalStorage();
      }
    }
  }

  removeUserFromList(phone: string): void {
    const index = this.selectedUsers.findIndex((user) => user.phone === phone);
    if (index !== -1) {
      this.selectedUsers.splice(index, 1);
      this.saveSelectedUsersToLocalStorage();
    }
  }

  private loadSelectedUsersFromLocalStorage(): void {
    const selectedUsersData = localStorage.getItem('selectedUsers-ig');
    if (selectedUsersData) {
      this.selectedUsers = JSON.parse(selectedUsersData);
    }
  }

  private saveSelectedUsersToLocalStorage(): void {
    localStorage.setItem('selectedUsers-ig', JSON.stringify(this.selectedUsers));
  }
}