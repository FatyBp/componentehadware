import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  public heroes : string[] = ['iroman','viuda negra','spiderman', 'capitan america','hulk'];

  public usuarios:any =[
    {id:1, nombre:"hola"},
    {id:2, nombre:"como"},
    {id:3, nombre:"tas"}
  ];

  public paises :any = [
    {title:"Mexico", descripcion:"tricolor"},
    {title: "EU", descripcion:"casa blanca"},
    {title:"china", descripcion:"arroz"}
  ];
}
