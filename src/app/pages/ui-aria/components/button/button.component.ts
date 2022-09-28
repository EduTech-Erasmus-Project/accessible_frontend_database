import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  public html = `
  <button tabindex="0" role="button">Button W3C</button>
  <div tabindex="0" role="button" id="action">
    Print Page
  </div>
  <a tabindex="0" role="button" id="toggle" aria-pressed="false">
    Mute
    <svg aria-hidden="true" focusable="false">
      <use xlink:href="#icon-sound"></use>
    </svg>
  </a>
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
