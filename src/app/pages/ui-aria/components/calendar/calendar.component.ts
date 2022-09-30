import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit, AfterViewInit {
  public html = `
  <div id="myDatepicker" class="datepicker">

  <div class="date">
    <label for="id-textbox-1">Date</label>

    <div class="group">
      <input type="text" placeholder="mm/dd/yyyy" id="id-textbox-1" aria-describedby="id-description-1">
      <span class="desc" id="id-description-1">(<span class="sr-only">date format: </span>mm/dd/yyyy)</span>
      <button type="button" class="icon" aria-label="Choose Date">
        <img src="assets/img/Feather-core-calendar.svg" alt="Icono de calendario">
      </button>

    </div>

  </div>

  <div id="id-datepicker-1" class="datepicker-dialog" role="dialog" aria-modal="true" aria-label="Choose Date">

    <div class="header">

      <button type="button" class="prev-year" aria-label="previous year">
        <span class="fas fa-angle-double-left fa-lg"></span>
      </button>

      <button type="button" class="prev-month" aria-label="previous month">
        <span class="fas fa-angle-left fa-lg"></span>
      </button>

      <h2 id="id-grid-label" class="month-year" aria-live="polite">
        February 2020
      </h2>

      <button type="button" class="next-month" aria-label="next month">
        <span class="fas fa-angle-right fa-lg"></span>
      </button>

      <button type="button" class="next-year" aria-label="next year">
        <span class="fas fa-angle-double-right fa-lg"></span>
      </button>
    </div>

    <div class="table-wrap">
      <table class="dates" role="grid" aria-labelledby="id-grid-label">
        <thead>
          <tr>
            <th scope="col" abbr="Sunday">Su</th>
            <th scope="col" abbr="Monday">Mo</th>
            <th scope="col" abbr="Tuesday">Tu</th>
            <th scope="col" abbr="Wednesday">We</th>
            <th scope="col" abbr="Thursday">Th</th>
            <th scope="col" abbr="Friday">Fr</th>
            <th scope="col" abbr="Saturday">Sa</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td class="disabled" tabindex="-1"></td>
            <td class="disabled" tabindex="-1"></td>
            <td class="disabled" tabindex="-1"></td>
            <td class="disabled" tabindex="-1"></td>
            <td class="disabled" tabindex="-1"></td>
            <td class="disabled" tabindex="-1"></td>
            <td tabindex="-1" data-date="2020-02-01">1</td>
          </tr>
          <tr>
            <td tabindex="-1" data-date="2020-02-02">2</td>
            <td tabindex="-1" data-date="2020-02-03">3</td>
            <td tabindex="-1" data-date="2020-02-04">4</td>
            <td tabindex="-1" data-date="2020-02-05">5</td>
            <td tabindex="-1" data-date="2020-02-06">6</td>
            <td tabindex="-1" data-date="2020-02-07">7</td>
            <td tabindex="-1" data-date="2020-02-08">8</td>
          </tr>
          <tr>
            <td tabindex="-1" data-date="2020-02-09">9</td>
            <td tabindex="-1" data-date="2020-02-10">10</td>
            <td tabindex="-1" data-date="2020-02-11">11</td>
            <td tabindex="-1" data-date="2020-02-12">12</td>
            <td tabindex="-1" data-date="2020-02-13">13</td>
            <td tabindex="0" data-date="2020-02-14" role="gridcell" aria-selected="true">14</td>
            <td tabindex="-1" data-date="2020-02-15">15</td>
          </tr>
          <tr>
            <td tabindex="-1" data-date="2020-02-16">16</td>
            <td tabindex="-1" data-date="2020-02-17">17</td>
            <td tabindex="-1" data-date="2020-02-18">18</td>
            <td tabindex="-1" data-date="2020-02-19">19</td>
            <td tabindex="-1" data-date="2020-02-20">20</td>
            <td tabindex="-1" data-date="2020-02-21">21</td>
            <td tabindex="-1" data-date="2020-02-22">22</td>
          </tr>
          <tr>
            <td tabindex="-1" data-date="2020-02-23">23</td>
            <td tabindex="-1" data-date="2020-02-24">24</td>
            <td tabindex="-1" data-date="2020-02-25">25</td>
            <td tabindex="-1" data-date="2020-02-26">26</td>
            <td tabindex="-1" data-date="2020-02-27">27</td>
            <td tabindex="-1" data-date="2020-02-28">28</td>
            <td tabindex="-1" data-date="2020-02-29">29</td>
          </tr>
          <tr>
            <td tabindex="-1" data-date="2020-02-30">30</td>
            <td tabindex="-1" data-date="2020-02-31">31</td>
            <td class="disabled" tabindex="-1"></td>
            <td class="disabled" tabindex="-1"></td>
            <td class="disabled" tabindex="-1"></td>
            <td class="disabled" tabindex="-1"></td>
            <td class="disabled" tabindex="-1"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="dialog-ok-cancel-group">
      <button class="dialog-button" value="cancel">
        Cancel
      </button>
      <button class="dialog-button" value="ok">
        OK
      </button>
    </div>
    <div class="dialog-message" aria-live="polite"></div>

  </div>
</div>
  `;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    var datePickers = document.querySelectorAll('.datepicker');

    datePickers.forEach(function (dp) {
      new DatePickerDialog(dp);
    });
  }
}

class DatePickerDialog {
  private buttonLabelChoose: any;
  private buttonLabelChange: any;
  private dayLabels: any;
  private monthLabels: any;
  private messageCursorKeys: any;
  private lastMessage: any;
  private textboxNode: any;
  private buttonNode: any;
  private dialogNode: any;
  private messageNode: any;
  private monthYearNode: any;
  private prevYearNode: any;
  private prevMonthNode: any;
  private nextMonthNode: any;
  private nextYearNode: any;
  private okButtonNode: any;
  private cancelButtonNode: any;
  private tbodyNode: any;
  private lastRowNode: any;
  private days: any;
  private focusDay: any;
  private selectedDay: any;
  private isMouseDownOnBackground: any;

  constructor(cdp: any) {
    this.buttonLabelChoose = 'Choose Date';
    this.buttonLabelChange = 'Change Date';
    this.dayLabels = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    this.monthLabels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    this.messageCursorKeys = 'Cursor keys can navigate dates';
    this.lastMessage = '';

    this.textboxNode = cdp.querySelector('input[type="text"');
    this.buttonNode = cdp.querySelector('.group button');
    this.dialogNode = cdp.querySelector('[role="dialog"]');
    this.messageNode = this.dialogNode.querySelector('.dialog-message');

    this.monthYearNode = this.dialogNode.querySelector('.month-year');

    this.prevYearNode = this.dialogNode.querySelector('.prev-year');
    this.prevMonthNode = this.dialogNode.querySelector('.prev-month');
    this.nextMonthNode = this.dialogNode.querySelector('.next-month');
    this.nextYearNode = this.dialogNode.querySelector('.next-year');

    this.okButtonNode = this.dialogNode.querySelector('button[value="ok"]');
    this.cancelButtonNode = this.dialogNode.querySelector(
      'button[value="cancel"]'
    );

    this.tbodyNode = this.dialogNode.querySelector('table.dates tbody');

    this.lastRowNode = null;

    this.days = [];

    this.focusDay = new Date();
    this.selectedDay = new Date(0, 0, 1);

    this.isMouseDownOnBackground = false;

    this.init();
  }

  private init() {
    this.textboxNode.addEventListener(
      'blur',
      this.setDateForButtonLabel.bind(this)
    );

    this.buttonNode.addEventListener(
      'keydown',
      this.handleButtonKeydown.bind(this)
    );
    this.buttonNode.addEventListener(
      'click',
      this.handleButtonClick.bind(this)
    );

    this.okButtonNode.addEventListener('click', this.handleOkButton.bind(this));
    this.okButtonNode.addEventListener(
      'keydown',
      this.handleOkButton.bind(this)
    );

    this.cancelButtonNode.addEventListener(
      'click',
      this.handleCancelButton.bind(this)
    );
    this.cancelButtonNode.addEventListener(
      'keydown',
      this.handleCancelButton.bind(this)
    );

    this.prevMonthNode.addEventListener(
      'click',
      this.handlePreviousMonthButton.bind(this)
    );
    this.nextMonthNode.addEventListener(
      'click',
      this.handleNextMonthButton.bind(this)
    );
    this.prevYearNode.addEventListener(
      'click',
      this.handlePreviousYearButton.bind(this)
    );
    this.nextYearNode.addEventListener(
      'click',
      this.handleNextYearButton.bind(this)
    );

    this.prevMonthNode.addEventListener(
      'keydown',
      this.handlePreviousMonthButton.bind(this)
    );
    this.nextMonthNode.addEventListener(
      'keydown',
      this.handleNextMonthButton.bind(this)
    );
    this.prevYearNode.addEventListener(
      'keydown',
      this.handlePreviousYearButton.bind(this)
    );
    this.nextYearNode.addEventListener(
      'keydown',
      this.handleNextYearButton.bind(this)
    );

    document.body.addEventListener(
      'mouseup',
      this.handleBackgroundMouseUp.bind(this),
      true
    );

    // Create Grid of Dates

    this.tbodyNode.innerHTML = '';
    for (var i = 0; i < 6; i++) {
      var row = this.tbodyNode.insertRow(i);
      this.lastRowNode = row;
      for (var j = 0; j < 7; j++) {
        var cell = document.createElement('td');

        cell.tabIndex = -1;
        cell.addEventListener('click', this.handleDayClick.bind(this));
        cell.addEventListener('keydown', this.handleDayKeyDown.bind(this));
        cell.addEventListener('focus', this.handleDayFocus.bind(this));

        cell.textContent = '-1';

        row.appendChild(cell);
        this.days.push(cell);
      }
    }

    this.updateGrid();
    this.close(false);
    this.setDateForButtonLabel();
  }

  private isSameDay(day1: any, day2: any) {
    return (
      day1.getFullYear() == day2.getFullYear() &&
      day1.getMonth() == day2.getMonth() &&
      day1.getDate() == day2.getDate()
    );
  }

  private isNotSameMonth(day1: any, day2: any) {
    return (
      day1.getFullYear() != day2.getFullYear() ||
      day1.getMonth() != day2.getMonth()
    );
  }

  private updateGrid() {
    var flag;
    var fd = this.focusDay;

    this.monthYearNode.textContent =
      this.monthLabels[fd.getMonth()] + ' ' + fd.getFullYear();

    var firstDayOfMonth = new Date(fd.getFullYear(), fd.getMonth(), 1);
    var dayOfWeek = firstDayOfMonth.getDay();

    firstDayOfMonth.setDate(firstDayOfMonth.getDate() - dayOfWeek);

    var d = new Date(firstDayOfMonth);

    for (var i = 0; i < this.days.length; i++) {
      flag = d.getMonth() != fd.getMonth();
      this.updateDate(
        this.days[i],
        flag,
        d,
        this.isSameDay(d, this.selectedDay)
      );
      d.setDate(d.getDate() + 1);

      // Hide last row if all dates are disabled (e.g. in next month)
      if (i === 35) {
        if (flag) {
          this.lastRowNode.style.visibility = 'hidden';
        } else {
          this.lastRowNode.style.visibility = 'visible';
        }
      }
    }
  }

  private updateDate(domNode: any, disable: any, day: any, selected: any) {
    var d = day.getDate().toString();
    if (day.getDate() <= 9) {
      d = '0' + d;
    }

    var m = day.getMonth() + 1;
    if (day.getMonth() < 9) {
      m = '0' + m;
    }

    domNode.tabIndex = -1;
    domNode.removeAttribute('aria-selected');
    domNode.setAttribute('data-date', day.getFullYear() + '-' + m + '-' + d);

    if (disable) {
      domNode.classList.add('disabled');
      domNode.textContent = '';
    } else {
      domNode.classList.remove('disabled');
      domNode.textContent = day.getDate();
      if (selected) {
        domNode.setAttribute('aria-selected', 'true');
        domNode.tabIndex = 0;
      }
    }
  }

  private moveFocusToDay(day: any) {
    var d = this.focusDay;

    this.focusDay = day;

    if (
      d.getMonth() != this.focusDay.getMonth() ||
      d.getFullYear() != this.focusDay.getFullYear()
    ) {
      this.updateGrid();
    }
    this.setFocusDay();
  }

  private setFocusDay(flag: any = true) {
    if (typeof flag !== 'boolean') {
      flag = true;
    }

    for (var i = 0; i < this.days.length; i++) {
      var dayNode = this.days[i];
      var day = this.getDayFromDataDateAttribute(dayNode);

      dayNode.tabIndex = -1;
      if (this.isSameDay(day, this.focusDay)) {
        dayNode.tabIndex = 0;
        if (flag) {
          dayNode.focus();
        }
      }
    }
  }

  private open() {
    this.dialogNode.style.display = 'block';
    this.dialogNode.style.zIndex = 2;

    this.getDateFromTextbox();
    this.updateGrid();
  }

  private isOpen() {
    return window.getComputedStyle(this.dialogNode).display !== 'none';
  }

  private close(flag: any = true) {
    if (typeof flag !== 'boolean') {
      // Default is to move focus to combobox
      flag = true;
    }

    this.setMessage('');
    this.dialogNode.style.display = 'none';

    if (flag) {
      this.buttonNode.focus();
    }
  }

  private moveToNextYear() {
    this.focusDay.setFullYear(this.focusDay.getFullYear() + 1);
    this.updateGrid();
  }

  private moveToPreviousYear() {
    this.focusDay.setFullYear(this.focusDay.getFullYear() - 1);
    this.updateGrid();
  }

  private moveToNextMonth() {
    this.focusDay.setMonth(this.focusDay.getMonth() + 1);
    this.updateGrid();
  }

  private moveToPreviousMonth() {
    this.focusDay.setMonth(this.focusDay.getMonth() - 1);
    this.updateGrid();
  }

  private moveFocusToNextDay() {
    var d = new Date(this.focusDay);
    d.setDate(d.getDate() + 1);
    this.moveFocusToDay(d);
  }

  private moveFocusToNextWeek() {
    var d = new Date(this.focusDay);
    d.setDate(d.getDate() + 7);
    this.moveFocusToDay(d);
  }

  private moveFocusToPreviousDay() {
    var d = new Date(this.focusDay);
    d.setDate(d.getDate() - 1);
    this.moveFocusToDay(d);
  }

  private moveFocusToPreviousWeek() {
    var d = new Date(this.focusDay);
    d.setDate(d.getDate() - 7);
    this.moveFocusToDay(d);
  }

  private moveFocusToFirstDayOfWeek() {
    var d = new Date(this.focusDay);
    d.setDate(d.getDate() - d.getDay());
    this.moveFocusToDay(d);
  }

  private moveFocusToLastDayOfWeek() {
    var d = new Date(this.focusDay);
    d.setDate(d.getDate() + (6 - d.getDay()));
    this.moveFocusToDay(d);
  }

  // Day methods

  private isDayDisabled(domNode: any) {
    return domNode.classList.contains('disabled');
  }

  private getDayFromDataDateAttribute(domNode: any) {
    var parts = domNode.getAttribute('data-date').split('-');
    return new Date(parts[0], parseInt(parts[1]) - 1, parts[2]);
  }
  // Textbox methods

  private setTextboxDate(domNode: any = null) {
    var d = this.focusDay;

    if (domNode) {
      d = this.getDayFromDataDateAttribute(domNode);
      // updated aria-selected
      this.days.forEach((day: any) =>
        day === domNode
          ? day.setAttribute('aria-selected', 'true')
          : day.removeAttribute('aria-selected')
      );
    }

    this.textboxNode.value =
      d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();
    this.setDateForButtonLabel();
  }

  private getDateFromTextbox() {
    var parts = this.textboxNode.value.split('/');
    var month = parseInt(parts[0]);
    var day = parseInt(parts[1]);
    var year = parseInt(parts[2]);

    if (
      parts.length === 3 &&
      Number.isInteger(month) &&
      Number.isInteger(day) &&
      Number.isInteger(year)
    ) {
      if (year < 100) {
        year = 2000 + year;
      }
      this.focusDay = new Date(year, month - 1, day);
      this.selectedDay = new Date(this.focusDay);
    } else {
      // If not a valid date (MM/DD/YY) initialize with todays date
      this.focusDay = new Date();
      this.selectedDay = new Date(0, 0, 1);
    }
  }

  private setDateForButtonLabel() {
    var parts = this.textboxNode.value.split('/');

    if (
      parts.length === 3 &&
      Number.isInteger(parseInt(parts[0])) &&
      Number.isInteger(parseInt(parts[1])) &&
      Number.isInteger(parseInt(parts[2]))
    ) {
      var day = new Date(
        parseInt(parts[2]),
        parseInt(parts[0]) - 1,
        parseInt(parts[1])
      );

      var label = this.buttonLabelChange;
      label += ', ' + this.dayLabels[day.getDay()];
      label += ' ' + this.monthLabels[day.getMonth()];
      label += ' ' + day.getDate();
      label += ', ' + day.getFullYear();
      this.buttonNode.setAttribute('aria-label', label);
    } else {
      // If not a valid date, initialize with "Choose Date"
      this.buttonNode.setAttribute('aria-label', this.buttonLabelChoose);
    }
  }

  private setMessage(str: any) {
    // function setMessageDelayed() {
    //   this.messageNode.textContent = str;
    // }
    // if (str !== this.lastMessage) {
    //   setTimeout(setMessageDelayed.bind(this), 200);
    //   this.lastMessage = str;
    // }
  }

  // Event handlers

  private handleOkButton(event: any) {
    var flag = false;

    switch (event.type) {
      case 'keydown':
        switch (event.key) {
          case 'Tab':
            if (!event.shiftKey) {
              this.prevYearNode.focus();
              flag = true;
            }
            break;

          case 'Esc':
          case 'Escape':
            this.close();
            flag = true;
            break;

          default:
            break;
        }
        break;

      case 'click':
        this.setTextboxDate();
        this.close();
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

  private handleCancelButton(event: any) {
    var flag = false;

    switch (event.type) {
      case 'keydown':
        switch (event.key) {
          case 'Esc':
          case 'Escape':
            this.close();
            flag = true;
            break;

          default:
            break;
        }
        break;

      case 'click':
        this.close();
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

  private handleNextYearButton(event: any) {
    var flag = false;

    switch (event.type) {
      case 'keydown':
        switch (event.key) {
          case 'Esc':
          case 'Escape':
            this.close();
            flag = true;
            break;

          case 'Enter':
            this.moveToNextYear();
            this.setFocusDay(false);
            flag = true;
            break;
        }

        break;

      case 'click':
        this.moveToNextYear();
        this.setFocusDay(false);
        break;

      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  private handlePreviousYearButton(event: any) {
    var flag = false;

    switch (event.type) {
      case 'keydown':
        switch (event.key) {
          case 'Enter':
            this.moveToPreviousYear();
            this.setFocusDay(false);
            flag = true;
            break;

          case 'Tab':
            if (event.shiftKey) {
              this.okButtonNode.focus();
              flag = true;
            }
            break;

          case 'Esc':
          case 'Escape':
            this.close();
            flag = true;
            break;

          default:
            break;
        }

        break;

      case 'click':
        this.moveToPreviousYear();
        this.setFocusDay(false);
        break;

      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  private handleNextMonthButton(event: any) {
    var flag = false;

    switch (event.type) {
      case 'keydown':
        switch (event.key) {
          case 'Esc':
          case 'Escape':
            this.close();
            flag = true;
            break;

          case 'Enter':
            this.moveToNextMonth();
            this.setFocusDay(false);
            flag = true;
            break;
        }

        break;

      case 'click':
        this.moveToNextMonth();
        this.setFocusDay(false);
        break;

      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  private handlePreviousMonthButton(event: any) {
    var flag = false;

    switch (event.type) {
      case 'keydown':
        switch (event.key) {
          case 'Esc':
          case 'Escape':
            this.close();
            flag = true;
            break;

          case 'Enter':
            this.moveToPreviousMonth();
            this.setFocusDay(false);
            flag = true;
            break;
        }

        break;

      case 'click':
        this.moveToPreviousMonth();
        this.setFocusDay(false);
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

  private handleDayKeyDown(event: any) {
    var flag = false;

    switch (event.key) {
      case 'Esc':
      case 'Escape':
        this.close();
        break;

      case ' ':
        this.setTextboxDate(event.currentTarget);
        flag = true;
        break;

      case 'Enter':
        this.setTextboxDate(event.currentTarget);
        this.close();
        flag = true;
        break;

      case 'Tab':
        this.cancelButtonNode.focus();
        if (event.shiftKey) {
          this.nextYearNode.focus();
        }
        this.setMessage('');
        flag = true;
        break;

      case 'Right':
      case 'ArrowRight':
        this.moveFocusToNextDay();
        flag = true;
        break;

      case 'Left':
      case 'ArrowLeft':
        this.moveFocusToPreviousDay();
        flag = true;
        break;

      case 'Down':
      case 'ArrowDown':
        this.moveFocusToNextWeek();
        flag = true;
        break;

      case 'Up':
      case 'ArrowUp':
        this.moveFocusToPreviousWeek();
        flag = true;
        break;

      case 'PageUp':
        if (event.shiftKey) {
          this.moveToPreviousYear();
        } else {
          this.moveToPreviousMonth();
        }
        this.setFocusDay();
        flag = true;
        break;

      case 'PageDown':
        if (event.shiftKey) {
          this.moveToNextYear();
        } else {
          this.moveToNextMonth();
        }
        this.setFocusDay();
        flag = true;
        break;

      case 'Home':
        this.moveFocusToFirstDayOfWeek();
        flag = true;
        break;

      case 'End':
        this.moveFocusToLastDayOfWeek();
        flag = true;
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  private handleDayClick(event: any) {
    if (!this.isDayDisabled(event.currentTarget) && event.which !== 3) {
      this.setTextboxDate(event.currentTarget);
      this.close();
    }

    event.stopPropagation();
    event.preventDefault();
  }

  private handleDayFocus() {
    this.setMessage(this.messageCursorKeys);
  }

  private handleButtonKeydown(event: any) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.open();
      this.setFocusDay();

      event.stopPropagation();
      event.preventDefault();
    }
  }

  private handleButtonClick(event: any) {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
      this.setFocusDay();
    }

    event.stopPropagation();
    event.preventDefault();
  }

  private handleBackgroundMouseUp(event: any) {
    if (
      !this.buttonNode.contains(event.target) &&
      !this.dialogNode.contains(event.target)
    ) {
      if (this.isOpen()) {
        this.close(false);
        event.stopPropagation();
        event.preventDefault();
      }
    }
  }
}

// Initialize menu button date picker

// window.addEventListener('load', function () {

// });
