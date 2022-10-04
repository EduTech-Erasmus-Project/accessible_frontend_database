import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent implements OnInit, AfterViewInit {

  selectedCities: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
  }
}

// Initialize mixed checkboxes on the page
// window.addEventListener('load', function () {
//   let mixed = document.querySelectorAll('.checkbox-mixed');
//   for (let i = 0; i < mixed.length; i++) {
//     new CheckboxMixed(mixed[i]);
//   }
// });
