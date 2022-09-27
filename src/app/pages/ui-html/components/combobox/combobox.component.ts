import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss']
})
export class ComboboxComponent implements OnInit {
  public option ="<option>";
  public optgroup = "<optgroup>";
  constructor() { }

  ngOnInit(): void {
  }

}
