import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  public textHtmlbutton:string ="<button name='favorito' type='submit'> Agregar a favoritos</button>"
  public etiqueta ="<button></button>"
  public textHtmlbuttonAc="<input type='submit' name='favorito' value='Agregar a favoritos'/>";
  constructor() { }

  ngOnInit(): void {
  }

}
