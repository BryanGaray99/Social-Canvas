import { Component } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  image:string
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
public ArregloTarjetas: Tarjeta[]=[]
  ngOnInit(): void{
    this.ArregloTarjetas = [
      {titulo: "Grupo 1", subtitulo: "Descripcion Grupo 1", image: "https://i.blogs.es/1cfea2/whatsapp-grupos-portada/1366_2000.jpg"},
      {titulo: "Grupo 2", subtitulo: "Descripcion Grupo 2", image: "https://www.womgp.com/blog/wp-content/uploads/2021/03/Desarrollo-Web-Dibdata.jpg"},
      {titulo: "Grupo 3", subtitulo: "Descripcion Grupo 3", image: "https://servisoftcorp.com/wp-content/uploads/2019/02/aplicaciones-moviles-apps-servisoftcorp.com_.jpg"},
    ]
  }
}
