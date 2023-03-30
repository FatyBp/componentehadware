import { Component } from '@angular/core';

@Component({
  selector: 'app-listadohadware',
  templateUrl: './listadohadware.component.html',
  styleUrls: ['./listadohadware.component.css']
})
export class ListadohadwareComponent {
  public hadware : any = [
    {nombre:"tinkpad", marca:"lenovo", modelo:"L560", memoria:"8GB",procesador:"intel corei5", disco_duro:"4Gb"},
    {nombre:"Lenovo legion5", marca:"lenovo", modelo:"IdeaPad 3 15 Laptop", memoria:"16 GB",procesador:"Ryzen AMD Ryzen 5 5625U", disco_duro:"512 Gb"},
    {nombre:"HUAWEI MateBook 14", marca:"HUAWEI", modelo:"MateBook 14 - Laptop de 14", memoria:"8 GB",procesador:"AMD Radeon R7", disco_duro:" 512 GB"},
    {nombre:"Asus Vivobook S 15.6", marca:"Asus", modelo:"S533EA-BQ187T", memoria:"8 GB",procesador:"Core i5 11th", disco_duro:"8GB"},
    {nombre:"Laptop Aspire", marca:"Acer", modelo:"Aspire", memoria:"8 GB",procesador:" Intel Core i5 - 1235U, Deca Core", disco_duro:"512GB"},
    {nombre:"Acer Swift 3 Thin & Light", marca:"Acer", modelo:"Acer Swift 3 Thin & Light", memoria:"8 GB",procesador:"AMD Ryzen 7 4700U Octa-Core", disco_duro:"512 GB"},
    {nombre:"Acer Nitro", marca:"Acer", modelo:"Acer Nitro", memoria:"32 GB",procesador:"Intel Core i7-11800H ", disco_duro:"1 TB"}
  ];
  public mayorEdad(edad:number):boolean{
    if(edad >= 18){
      return true;
    }else{
      return false; 
    }
  }
}
