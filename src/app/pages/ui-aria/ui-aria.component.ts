import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ui-aria',
  templateUrl: './ui-aria.component.html',
  styleUrls: ['./ui-aria.component.scss']
})
export class UiAriaComponent implements OnInit {

  constructor(
    public _route:Router
  ) { }

  ngOnInit(): void {
  }

}
