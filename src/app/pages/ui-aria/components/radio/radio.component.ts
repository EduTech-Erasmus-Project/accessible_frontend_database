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

  public html = `
  <div role="radiogroup" aria-labelledby="group_label_1" id="rg1">
  <h3 id="group_label_1">Pizza Crust</h3>

  <div role="radio" aria-checked="false" tabindex="0">
    Regular crust
  </div>
  <div role="radio" aria-checked="false" tabindex="-1">
    Deep dish
  </div>
  <div role="radio" aria-checked="false" tabindex="-1">
    Thin crust
  </div>
</div>

<div role="radiogroup" aria-labelledby="group_label_2" id="rg2">
  <h3 id="group_label_2">Pizza Delivery</h3>
  <div role="radio" aria-checked="false" tabindex="0">
    Pickup
  </div>

  <div role="radio" aria-checked="false" tabindex="-1">
    Home Delivery
  </div>

  <div role="radio" aria-checked="false" tabindex="-1">
    Dine in
  </div>
</div>
  `

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    var radios = document.querySelectorAll('[role="radiogroup"]');
    for (var i = 0; i < radios.length; i++) {
      new RadioGroup(radios[i]);
    }
  }
}

class RadioGroup {
  private groupNode: any;
  private radioButtons: any[];
  private firstRadioButton: any;
  private lastRadioButton: any;

  constructor(groupNode: any) {
    this.groupNode = groupNode;

    this.radioButtons = [];

    this.firstRadioButton = null;
    this.lastRadioButton = null;

    var rbs = this.groupNode.querySelectorAll('[role=radio]');

    for (var i = 0; i < rbs.length; i++) {
      var rb = rbs[i];

      rb.tabIndex = -1;
      rb.setAttribute('aria-checked', 'false');

      rb.addEventListener('keydown', this.handleKeydown.bind(this));
      rb.addEventListener('click', this.handleClick.bind(this));
      rb.addEventListener('focus', this.handleFocus.bind(this));
      rb.addEventListener('blur', this.handleBlur.bind(this));

      this.radioButtons.push(rb);

      if (!this.firstRadioButton) {
        this.firstRadioButton = rb;
      }
      this.lastRadioButton = rb;
    }
    this.firstRadioButton.tabIndex = 0;
  }

  setChecked(currentItem: any) {
    for (var i = 0; i < this.radioButtons.length; i++) {
      var rb = this.radioButtons[i];
      rb.setAttribute('aria-checked', 'false');
      rb.tabIndex = -1;
    }
    currentItem.setAttribute('aria-checked', 'true');
    currentItem.tabIndex = 0;
    currentItem.focus();
  }

  setCheckedToPreviousItem(currentItem: any) {
    var index;

    if (currentItem === this.firstRadioButton) {
      this.setChecked(this.lastRadioButton);
    } else {
      index = this.radioButtons.indexOf(currentItem);
      this.setChecked(this.radioButtons[index - 1]);
    }
  }

  setCheckedToNextItem(currentItem: any) {
    var index;

    if (currentItem === this.lastRadioButton) {
      this.setChecked(this.firstRadioButton);
    } else {
      index = this.radioButtons.indexOf(currentItem);
      this.setChecked(this.radioButtons[index + 1]);
    }
  }

  /* EVENT HANDLERS */

  handleKeydown(event: any) {
    var tgt = event.currentTarget,
      flag = false;

    switch (event.key) {
      case ' ':
      case 'Enter':
        this.setChecked(tgt);
        flag = true;
        break;

      case 'Up':
      case 'ArrowUp':
      case 'Left':
      case 'ArrowLeft':
        this.setCheckedToPreviousItem(tgt);
        flag = true;
        break;

      case 'Down':
      case 'ArrowDown':
      case 'Right':
      case 'ArrowRight':
        this.setCheckedToNextItem(tgt);
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  handleClick(event: any) {
    this.setChecked(event.currentTarget);
  }

  handleFocus(event: any) {
    event.currentTarget.classList.add('focus');
  }

  handleBlur(event: any) {
    event.currentTarget.classList.remove('focus');
  }
}

// Initialize radio button group
// window.addEventListener('load', function () {
//   var radios = document.querySelectorAll('[role="radiogroup"]');
//   for (var i = 0; i < radios.length; i++) {
//     new RadioGroup(radios[i]);
//   }
// });
