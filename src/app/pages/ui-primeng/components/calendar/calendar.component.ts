import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit, AfterViewInit {

  public value: Date = new Date();
  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
  }
}

// Initialize menu button date picker

// window.addEventListener('load', function () {

// });
