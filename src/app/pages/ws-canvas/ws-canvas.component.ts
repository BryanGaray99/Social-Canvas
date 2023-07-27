import { Component, OnInit } from '@angular/core';
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
  selector: 'app-ws-canvas',
  templateUrl: './ws-canvas.component.html',
  styleUrls: ['./ws-canvas.component.css'],
})
export class WsCanvasComponent implements OnInit {
  public roomId: string = '';
  public messageText: string = '';
  public messageArray: Message[] = [];

  public showScreen = false;
  public phone: string = '';
  public currentUser: User | null = null;
  public selectedUser: User | null = null;
  public userList: User[] = [];
  public userSelected = false;

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
      this.loadMessagesFromBackend(this.phone);
    }
  }

  selectUserHandler(phone: string): void {
    this.selectedUser = this.userList.find((user) => user.phone === phone) ?? null;
    this.phone = this.selectedUser?.phone || '';
    this.userSelected = true;
    this.loadMessagesFromBackend(this.phone);
  }

  sendMessage(): void {
    if (!this.currentUser || !this.selectedUser) {
      return;
    }

    this.messageService.sendMessage(this.currentUser.phone, this.selectedUser.phone, this.messageText).subscribe(() => {
      this.messageText = '';
      this.loadMessagesFromBackend(this.phone);
    });
  }

  private loadUsersFromBackend(): void {
    this.userService.getUsers().subscribe((users) => {
      this.userList = users.filter((user) => user.phone !== this.currentUser?.phone);
      if (!this.userList.some((user) => user.phone === this.selectedUser?.phone)) {
        this.selectedUser = this.userList.length > 0 ? this.userList[0] : null;
      }
    });
  }
  private loadMessagesFromBackend(phone: string): void {
    this.messageService.getMessages(phone).subscribe((messages) => {
      this.messageArray = messages;
    });
  }
}