import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit, AfterViewInit {
  private ICON_MUTE_URL = '#icon-mute';
  private ICON_SOUND_URL = '#icon-sound';

  public html = `
  <button tabindex="0" role="button">Button W3C</button>
  <div tabindex="0" role="button" id="action">
    Print Page
  </div>
  <a tabindex="0" role="button" id="toggle" aria-pressed="false">
    Mute
    <svg aria-hidden="true" focusable="false">
      <use xlink:href="#icon-sound"></use>
    </svg>
  </a>
  `;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.init();
  }

  private init() {
    var actionButton: any = document.getElementById('action');
    actionButton.addEventListener('click', this.activateActionButton);
    actionButton.addEventListener('keydown', this.actionButtonKeydownHandler);
    actionButton.addEventListener('keyup', this.actionButtonKeyupHandler);

    var toggleButton: any = document.getElementById('toggle');
    toggleButton.addEventListener('click', this.toggleButtonClickHandler);
    toggleButton.addEventListener('keydown', this.toggleButtonKeydownHandler);
    toggleButton.addEventListener('keyup', this.toggleButtonKeyupHandler);
  }

  /**
   * Activates the action button with the enter key.
   *
   * @param {KeyboardEvent} event
   */
  private actionButtonKeydownHandler(event: any) {
    // The action button is activated by space on the keyup event, but the
    // default action for space is already triggered on keydown. It needs to be
    // prevented to stop scrolling the page before activating the button.
    if (event.keyCode === 32) {
      event.preventDefault();
    }
    // If enter is pressed, activate the button
    else if (event.keyCode === 13) {
      event.preventDefault();
      this.activateActionButton();
    }
  }

  /**
   * Activates the action button with the space key.
   *
   * @param {KeyboardEvent} event
   */
  private actionButtonKeyupHandler(event: any) {
    if (event.keyCode === 32) {
      event.preventDefault();
      this.activateActionButton();
    }
  }

  private activateActionButton() {
    window.print();
  }

  /**
   * Toggles the toggle button’s state if it’s actually a button element or has
   * the `role` attribute set to `button`.
   *
   * @param {MouseEvent} event
   */
  private toggleButtonClickHandler(event: any) {
    if (
      event.currentTarget.tagName === 'button' ||
      event.currentTarget.getAttribute('role') === 'button'
    ) {
      event.preventDefault();
      let button = event.currentTarget;
      var isAriaPressed = button.getAttribute('aria-pressed') === 'true';
      button.setAttribute('aria-pressed', isAriaPressed ? 'false' : 'true');
      var icon: any = button.querySelector('use');
      icon.setAttribute(
        'xlink:href',
        isAriaPressed ? '#icon-sound' : '#icon-mute'
      );
    }
  }

  /**
   * Toggles the toggle button’s state with the enter key.
   *
   * @param {KeyboardEvent} event
   */
  private toggleButtonKeydownHandler(event: any) {
    if (event.keyCode === 32) {
      event.preventDefault();
    } else if (event.keyCode === 13) {
      event.preventDefault();
      let button = event.currentTarget;
      //this.toggleButtonState(target);
      var isAriaPressed = button.getAttribute('aria-pressed') === 'true';
      button.setAttribute('aria-pressed', isAriaPressed ? 'false' : 'true');
      var icon: any = button.querySelector('use');
      icon.setAttribute(
        'xlink:href',
        isAriaPressed ? '#icon-sound' : '#icon-mute'
      );
    }
  }

  /**
   * Toggles the toggle button’s state with space key.
   *
   * @param {KeyboardEvent} event
   */
  private toggleButtonKeyupHandler(event: any) {
    if (event.keyCode === 32) {
      event.preventDefault();
      //this.toggleButtonState(event.currentTarget);
      let button = event.currentTarget;
      //this.toggleButtonState(target);
      var isAriaPressed = button.getAttribute('aria-pressed') === 'true';
      button.setAttribute('aria-pressed', isAriaPressed ? 'false' : 'true');
      var icon: any = button.querySelector('use');
      icon.setAttribute(
        'xlink:href',
        isAriaPressed ? '#icon-sound' : '#icon-mute'
      );
    }
  }

  /**
   * Toggles the toggle button’s state between *pressed* and *not pressed*.
   *
   * @param {HTMLElement} button
   */
  private toggleButtonState(button: HTMLElement) {
    //console.log('button', button);
    var isAriaPressed = button.getAttribute('aria-pressed') === 'true';

    button.setAttribute('aria-pressed', isAriaPressed ? 'false' : 'true');

    var icon: any = button.querySelector('use');
    icon.setAttribute(
      'xlink:href',
      isAriaPressed ? '#icon-sound' : '#icon-mute'
    );
  }
}
