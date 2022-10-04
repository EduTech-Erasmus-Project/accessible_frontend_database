import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
})
export class RadioComponent implements OnInit, AfterViewInit {
  //@ViewChild('radio') radioElement?: ElementRef;

  city?: string;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
  
  }
}
