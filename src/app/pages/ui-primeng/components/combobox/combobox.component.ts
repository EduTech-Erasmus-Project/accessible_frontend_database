import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss'],
})
export class ComboboxComponent implements OnInit, AfterViewInit {
  public cities: any[];
  selectedCity1: any;
  constructor(public router: Router) {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }
  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {

    //
  }
}
