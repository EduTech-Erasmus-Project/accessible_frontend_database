import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  public textHtml ="<div class='card'><h5>Horizontal</h5><p-splitter [style]='{'height': '300px'}' styleClass='mb-5'><ng-template pTemplate><div class='col flex align-items-center justify-content-center'>Panel 1"
  constructor() { }

  ngOnInit(): void {
  }

}
