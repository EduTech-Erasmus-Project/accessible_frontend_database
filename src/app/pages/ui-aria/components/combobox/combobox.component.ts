import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css']
})

export class ComboboxComponent implements OnInit {

  public html = `
    <label id="combo1-label" class="combo-label">Favorite Fruit</label>
    <div class="combo js-select">
      <div aria-controls="listbox1" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="combo1-label"
        id="combo1" class="combo-input" role="combobox" tabindex="0">
      </div>
      <div class="combo-menu" role="listbox" id="listbox1" aria-labelledby="combo1-label" tabindex="-1">
      </div>
    </div>
  `;

  constructor(
    public router: Router
  ) {
  }

  ngOnInit(): void {
    //
  }




}
