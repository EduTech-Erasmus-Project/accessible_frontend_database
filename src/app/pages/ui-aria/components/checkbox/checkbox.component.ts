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
  @ViewChild('checkboxes') checkboxesElement?: ElementRef;
  @ViewChild('checkboxmixed') checkboxesMixedElement?: ElementRef;

  public html = `
  <div role="group" aria-labelledby="id-group-label">
  <ul class="checkboxes">
    <li><div role="checkbox" aria-checked="false" tabindex="0">Lettuce</div></li>
    <li><div role="checkbox" aria-checked="true" tabindex="0">Tomato</div></li>
    <li><div role="checkbox" aria-checked="false" tabindex="0">Mustard</div></li>
    <li><div role="checkbox" aria-checked="false" tabindex="0">Sprouts</div></li>
  </ul>
</div>
  `;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    let checkboxes =
      this.checkboxesElement?.nativeElement.querySelectorAll(
        '[role="checkbox"]'
      );
    for (let i = 0; i < checkboxes.length; i++) {
      new Checkbox(checkboxes[i]);
    }

    // let mixed = this.checkboxesMixedElement?.nativeElement;
    // for (let i = 0; i < mixed.length; i++) {
    //   new CheckboxMixed(mixed[i]);
    // }
  }
}

class Checkbox {
  private domNode: any;
  constructor(domNode: any) {
    this.domNode = domNode;
    this.domNode.tabIndex = 0;

    if (!this.domNode.getAttribute('aria-checked')) {
      this.domNode.setAttribute('aria-checked', 'false');
    }

    this.domNode.addEventListener('keydown', this.onKeydown.bind(this));
    this.domNode.addEventListener('click', this.onClick.bind(this));
  }

  toggleCheckbox() {
    if (this.domNode.getAttribute('aria-checked') === 'true') {
      this.domNode.setAttribute('aria-checked', 'false');
    } else {
      this.domNode.setAttribute('aria-checked', 'true');
    }
  }

  /* EVENT HANDLERS */

  onKeydown(event: any) {
    var flag = false;

    switch (event.key) {
      case ' ':
        this.toggleCheckbox();
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

  onClick() {
    this.toggleCheckbox();
  }
}

class CheckboxMixed {
  private mixedNode: any;
  private checkboxNodes: any;

  constructor(domNode: any) {
    this.mixedNode = domNode.querySelector('[role="checkbox"]');
    this.checkboxNodes = domNode.querySelectorAll('input[type="checkbox"]');

    this.mixedNode.addEventListener('keydown', this.onMixedKeydown.bind(this));
    this.mixedNode.addEventListener('click', this.onMixedClick.bind(this));
    this.mixedNode.addEventListener('focus', this.onMixedFocus.bind(this));
    this.mixedNode.addEventListener('blur', this.onMixedBlur.bind(this));

    for (var i = 0; i < this.checkboxNodes.length; i++) {
      var checkboxNode = this.checkboxNodes[i];

      checkboxNode.addEventListener('click', this.onCheckboxClick.bind(this));
      checkboxNode.addEventListener('focus', this.onCheckboxFocus.bind(this));
      checkboxNode.addEventListener('blur', this.onCheckboxBlur.bind(this));
      checkboxNode.setAttribute('data-last-state', checkboxNode.checked);
    }

    this.updateMixed();
  }

  updateMixed() {
    var count = 0;

    for (var i = 0; i < this.checkboxNodes.length; i++) {
      if (this.checkboxNodes[i].checked) {
        count++;
      }
    }

    if (count === 0) {
      this.mixedNode.setAttribute('aria-checked', 'false');
    } else {
      if (count === this.checkboxNodes.length) {
        this.mixedNode.setAttribute('aria-checked', 'true');
      } else {
        this.mixedNode.setAttribute('aria-checked', 'mixed');
        this.updateCheckboxStates();
      }
    }
  }

  updateCheckboxStates() {
    for (var i = 0; i < this.checkboxNodes.length; i++) {
      var checkboxNode = this.checkboxNodes[i];
      checkboxNode.setAttribute('data-last-state', checkboxNode.checked);
    }
  }

  anyLastChecked() {
    var count = 0;

    for (var i = 0; i < this.checkboxNodes.length; i++) {
      if (this.checkboxNodes[i].getAttribute('data-last-state') == 'true') {
        count++;
      }
    }

    return count > 0;
  }

  setCheckboxes(value: any) {
    for (var i = 0; i < this.checkboxNodes.length; i++) {
      var checkboxNode = this.checkboxNodes[i];

      switch (value) {
        case 'last':
          checkboxNode.checked =
            checkboxNode.getAttribute('data-last-state') === 'true';
          break;

        case 'true':
          checkboxNode.checked = true;
          break;

        default:
          checkboxNode.checked = false;
          break;
      }
    }
    this.updateMixed();
  }

  toggleMixed() {
    var state = this.mixedNode.getAttribute('aria-checked');

    if (state === 'false') {
      if (this.anyLastChecked()) {
        this.setCheckboxes('last');
      } else {
        this.setCheckboxes('true');
      }
    } else {
      if (state === 'mixed') {
        this.setCheckboxes('true');
      } else {
        this.setCheckboxes('false');
      }
    }

    this.updateMixed();
  }

  /* EVENT HANDLERS */

  onMixedKeydown(event: any) {
    var flag = false;

    switch (event.key) {
      case ' ':
        this.toggleMixed();
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

  onMixedClick() {
    this.toggleMixed();
  }

  onMixedFocus() {
    this.mixedNode.classList.add('focus');
  }

  onMixedBlur() {
    this.mixedNode.classList.remove('focus');
  }

  onCheckboxClick(event: any) {
    event.currentTarget.setAttribute(
      'data-last-state',
      event.currentTarget.checked
    );
    this.updateMixed();
  }

  onCheckboxFocus(event: any) {
    event.currentTarget.parentNode.classList.add('focus');
  }

  onCheckboxBlur(event: any) {
    event.currentTarget.parentNode.classList.remove('focus');
  }
}

// Initialize mixed checkboxes on the page
// window.addEventListener('load', function () {
//   let mixed = document.querySelectorAll('.checkbox-mixed');
//   for (let i = 0; i < mixed.length; i++) {
//     new CheckboxMixed(mixed[i]);
//   }
// });
