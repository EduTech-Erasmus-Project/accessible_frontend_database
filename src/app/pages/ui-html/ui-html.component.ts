import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ui-html',
  templateUrl: './ui-html.component.html',
  styleUrls: ['./ui-html.component.css']
})
export class UiHtmlComponent implements OnInit {

  constructor(
    public _route:Router,
  ) { }

  ngOnInit(): void {
  }

}
