import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css'],
})
export class ComboboxComponent implements OnInit, AfterViewInit {
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

  constructor(public router: Router) {}
  ngAfterViewInit(): void {
    const options: any = [
      'Choose a Fruit',
      'Apple',
      'Banana',
      'Blueberry',
      'Boysenberry',
      'Cherry',
      'Cranberry',
      'Durian',
      'Eggplant',
      'Fig',
      'Grape',
      'Guava',
      'Huckleberry',
    ];
    try {
      const selectEls = document.querySelectorAll('.js-select');

      console.log('selectEls', selectEls);

      selectEls.forEach((el) => {
        new Select(el, options);
      });
    } catch (error) {}
  }

  ngOnInit(): void {
    //
  }
}

class Select {
  private el: any;
  private comboEl: any;
  private listboxEl: any;
  private idBase: any;
  private options: any;
  // state
  private activeIndex = 0;
  private open = false;
  private searchString = '';
  private searchTimeout: any = null;
  private ignoreBlur = false;

  private SelectActions = {
    Close: 0,
    CloseSelect: 1,
    First: 2,
    Last: 3,
    Next: 4,
    Open: 5,
    PageDown: 6,
    PageUp: 7,
    Previous: 8,
    Select: 9,
    Type: 10,
  };

  constructor(el: any, options = []) {
    // element refs
    this.el = el;
    this.comboEl = el.querySelector('[role=combobox]');
    this.listboxEl = el.querySelector('[role=listbox]');

    // data
    this.idBase = this.comboEl.id || 'combo';
    this.options = options;

    // init
    if (el && this.comboEl && this.listboxEl) {
      this.init();
    }
  }

  init() {
    // select first option by default
    this.comboEl.innerHTML = this.options[0];

    // add event listeners
    this.comboEl.addEventListener('blur', this.onComboBlur.bind(this));
    this.comboEl.addEventListener('click', this.onComboClick.bind(this));
    this.comboEl.addEventListener('keydown', this.onComboKeyDown.bind(this));

    // create options
    this.options.map((option: any, index: any) => {
      const optionEl = this.createOption(option, index);
      this.listboxEl.appendChild(optionEl);
    });
  }

  createOption(optionText: any, index: any) {
    const optionEl = document.createElement('div');
    optionEl.setAttribute('role', 'option');
    optionEl.id = `${this.idBase}-${index}`;
    optionEl.className =
      index === 0 ? 'combo-option option-current' : 'combo-option';
    optionEl.setAttribute('aria-selected', `${index === 0}`);
    optionEl.innerText = optionText;

    optionEl.addEventListener('click', (event) => {
      event.stopPropagation();
      this.onOptionClick(index);
    });
    optionEl.addEventListener('mousedown', this.onOptionMouseDown.bind(this));

    return optionEl;
  }

  getSearchString(char: any) {
    // reset typing timeout and start new timeout
    // this allows us to make multiple-letter matches, like a native select
    if (typeof this.searchTimeout === 'number') {
      window.clearTimeout(this.searchTimeout);
    }

    this.searchTimeout = window.setTimeout(() => {
      this.searchString = '';
    }, 500);

    // add most recent letter to saved search string
    this.searchString += char;
    return this.searchString;
  }

  onComboBlur() {
    // do not do blur action if ignoreBlur flag has been set
    if (this.ignoreBlur) {
      this.ignoreBlur = false;
      return;
    }

    // select current option and close
    if (this.open) {
      this.selectOption(this.activeIndex);
      this.updateMenuState(false, false);
    }
  }

  onComboClick() {
    this.updateMenuState(!this.open, false);
  }

  onComboKeyDown(event: any) {
    const { key } = event;
    const max = this.options.length - 1;

    const action = this.getActionFromKey(event, this.open);

    switch (action) {
      case this.SelectActions.Last:
      case this.SelectActions.First:
        this.updateMenuState(true);
        break;
      // intentional fallthrough
      case this.SelectActions.Next:
      case this.SelectActions.Previous:
      case this.SelectActions.PageUp:
      case this.SelectActions.PageDown:
        event.preventDefault();
        return this.onOptionChange(
          this.getUpdatedIndex(this.activeIndex, max, action)
        );
      case this.SelectActions.CloseSelect:
        event.preventDefault();
        this.selectOption(this.activeIndex);
        break;
      // intentional fallthrough
      case this.SelectActions.Close:
        event.preventDefault();
        return this.updateMenuState(false);
      case this.SelectActions.Type:
        return this.onComboType(key);
      case this.SelectActions.Open:
        event.preventDefault();
        return this.updateMenuState(true);
    }
  }

  onComboType(letter: any) {
    // open the listbox if it is closed
    this.updateMenuState(true);

    // find the index of the first matching option
    const searchString = this.getSearchString(letter);
    const searchIndex = this.getIndexByLetter(
      this.options,
      searchString,
      this.activeIndex + 1
    );

    // if a match was found, go to it
    if (searchIndex >= 0) {
      this.onOptionChange(searchIndex);
    }
    // if no matches, clear the timeout and search string
    else {
      window.clearTimeout(this.searchTimeout);
      this.searchString = '';
    }
  }

  onOptionChange(index: any) {
    // update state
    this.activeIndex = index;

    // update aria-activedescendant
    this.comboEl.setAttribute(
      'aria-activedescendant',
      `${this.idBase}-${index}`
    );

    // update active option styles
    const options = this.el.querySelectorAll('[role=option]');
    [...options].forEach((optionEl) => {
      optionEl.classList.remove('option-current');
    });
    options[index].classList.add('option-current');

    // ensure the new option is in view
    if (this.isScrollable(this.listboxEl)) {
      this.maintainScrollVisibility(options[index], this.listboxEl);
    }

    // ensure the new option is visible on screen
    // ensure the new option is in view
    if (!this.isElementInView(options[index])) {
      options[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  onOptionClick(index: any) {
    this.onOptionChange(index);
    this.selectOption(index);
    this.updateMenuState(false);
  }

  onOptionMouseDown() {
    // Clicking an option will cause a blur event,
    // but we don't want to perform the default keyboard blur action
    this.ignoreBlur = true;
  }

  selectOption(index: any) {
    // update state
    this.activeIndex = index;

    // update displayed value
    const selected = this.options[index];
    this.comboEl.innerHTML = selected;

    // update aria-selected
    const options = this.el.querySelectorAll('[role=option]');
    [...options].forEach((optionEl) => {
      optionEl.setAttribute('aria-selected', 'false');
    });
    options[index].setAttribute('aria-selected', 'true');
  }

  updateMenuState(open: any, callFocus = true) {
    if (this.open === open) {
      return;
    }

    // update state
    this.open = open;

    // update aria-expanded and styles
    this.comboEl.setAttribute('aria-expanded', `${open}`);
    open ? this.el.classList.add('open') : this.el.classList.remove('open');

    // update activedescendant
    const activeID = open ? `${this.idBase}-${this.activeIndex}` : '';
    this.comboEl.setAttribute('aria-activedescendant', activeID);

    if (activeID === '' && !this.isElementInView(this.comboEl)) {
      this.comboEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // move focus back to the combobox, if needed
    callFocus && this.comboEl.focus();
  }

  // filter an array of options against an input string
  // returns an array of options that begin with the filter string, case-independent
  filterOptions(options: any = [], filter: any, exclude: any = []) {
    return options.filter((option: any) => {
      const matches = option.toLowerCase().indexOf(filter.toLowerCase()) === 0;
      return matches && exclude.indexOf(option) < 0;
    });
  }

  // map a key press to an action
  getActionFromKey(event: any, menuOpen: any) {
    const { key, altKey, ctrlKey, metaKey } = event;
    const openKeys = ['ArrowDown', 'ArrowUp', 'Enter', ' ']; // all keys that will do the default open action
    // handle opening when closed
    if (!menuOpen && openKeys.includes(key)) {
      return this.SelectActions.Open;
    }

    // home and end move the selected option when open or closed
    if (key === 'Home') {
      return this.SelectActions.First;
    }
    if (key === 'End') {
      return this.SelectActions.Last;
    }

    // handle typing characters when open or closed
    if (
      key === 'Backspace' ||
      key === 'Clear' ||
      (key.length === 1 && key !== ' ' && !altKey && !ctrlKey && !metaKey)
    ) {
      return this.SelectActions.Type;
    }

    // handle keys when open
    if (menuOpen) {
      if (key === 'ArrowUp' && altKey) {
        return this.SelectActions.CloseSelect;
      } else if (key === 'ArrowDown' && !altKey) {
        return this.SelectActions.Next;
      } else if (key === 'ArrowUp') {
        return this.SelectActions.Previous;
      } else if (key === 'PageUp') {
        return this.SelectActions.PageUp;
      } else if (key === 'PageDown') {
        return this.SelectActions.PageDown;
      } else if (key === 'Escape') {
        return this.SelectActions.Close;
      } else if (key === 'Enter' || key === ' ') {
        return this.SelectActions.CloseSelect;
      }
    }
    return null;
  }

  // return the index of an option from an array of options, based on a search string
  // if the filter is multiple iterations of the same letter (e.g "aaa"), then cycle through first-letter matches
  getIndexByLetter(options: any, filter: any, startIndex = 0) {
    const orderedOptions = [
      ...options.slice(startIndex),
      ...options.slice(0, startIndex),
    ];
    const firstMatch = this.filterOptions(orderedOptions, filter)[0];
    const allSameLetter = (array: any) =>
      array.every((letter: any) => letter === array[0]);

    // first check if there is an exact match for the typed string
    if (firstMatch) {
      return options.indexOf(firstMatch);
    }

    // if the same letter is being repeated, cycle through first-letter matches
    else if (allSameLetter(filter.split(''))) {
      const matches = this.filterOptions(orderedOptions, filter[0]);
      return options.indexOf(matches[0]);
    }

    // if no matches, return -1
    else {
      return -1;
    }
  }

  // get an updated option index after performing an action
  getUpdatedIndex(currentIndex: any, maxIndex: any, action: any) {
    const pageSize = 10; // used for pageup/pagedown

    switch (action) {
      case this.SelectActions.First:
        return 0;
      case this.SelectActions.Last:
        return maxIndex;
      case this.SelectActions.Previous:
        return Math.max(0, currentIndex - 1);
      case this.SelectActions.Next:
        return Math.min(maxIndex, currentIndex + 1);
      case this.SelectActions.PageUp:
        return Math.max(0, currentIndex - pageSize);
      case this.SelectActions.PageDown:
        return Math.min(maxIndex, currentIndex + pageSize);
      default:
        return currentIndex;
    }
  }

  // check if element is visible in browser view port
  isElementInView(element: any) {
    var bounding = element.getBoundingClientRect();

    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // check if an element is currently scrollable
  isScrollable(element: any) {
    return element && element.clientHeight < element.scrollHeight;
  }

  // ensure a given child element is within the parent's visible scroll area
  // if the child is not visible, scroll the parent
  maintainScrollVisibility(activeElement: any, scrollParent: any) {
    const { offsetHeight, offsetTop } = activeElement;
    const { offsetHeight: parentOffsetHeight, scrollTop } = scrollParent;

    const isAbove = offsetTop < scrollTop;
    const isBelow = offsetTop + offsetHeight > scrollTop + parentOffsetHeight;

    if (isAbove) {
      scrollParent.scrollTo(0, offsetTop);
    } else if (isBelow) {
      scrollParent.scrollTo(0, offsetTop - parentOffsetHeight + offsetHeight);
    }
  }
}
