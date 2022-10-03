import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit, AfterViewInit {
  @ViewChild('accordion') accordionElement?: ElementRef;

  public html = `

<div id="accordionGroup" class="accordion">
<h3>
  <button type="button" aria-expanded="true" class="accordion-trigger" aria-controls="sect1" id="accordion1id">
    <span class="accordion-title">
      Personal Information
      <span class="accordion-icon"></span>
    </span>
  </button>
</h3>
<div id="sect1" role="region" aria-labelledby="accordion1id" class="accordion-panel">
  <div>

    <fieldset>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, animi vel. Pariatur iusto quia quidem quae
        omnis nam? Aliquid eum ex sunt perspiciatis eius fugiat temporibus ab similique porro fuga.
        Temporibus incidunt obcaecati iste, ipsum eveniet doloribus, optio est a atque consequuntur laudantium debitis
        porro corporis quasi laborum fuga facilis quis corrupti praesentium reprehenderit veritatis voluptatem.
        Asperiores pariatur sapiente corporis.</p>
    </fieldset>
  </div>
</div>
<h3>
  <button type="button" aria-expanded="false" class="accordion-trigger" aria-controls="sect2" id="accordion2id">
    <span class="accordion-title">
      Billing Address
      <span class="accordion-icon"></span>
    </span>
  </button>
</h3>
<div id="sect2" role="region" aria-labelledby="accordion2id" class="accordion-panel" hidden="">
  <div>
    <fieldset>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium facere, quos qui accusamus ipsum quo
        quas fugiat molestiae ad culpa explicabo sint, harum animi quam vel, numquam officiis iusto totam!
        Repudiandae ipsa fugiat iste eius animi veritatis quae deserunt, voluptate assumenda esse est, eum fugit non
        at laudantium sapiente ratione deleniti libero consectetur provident quidem enim veniam. Modi, dolor
        dignissimos!
        Sit dolorem incidunt harum quia ducimus ipsam at commodi fugit hic ipsum dicta itaque quaerat soluta sapiente
        cumque inventore amet laudantium, iusto cum officia quod eaque? Veniam nisi consectetur sequi!</p>
    </fieldset>
  </div>
</div>
<h3>
  <button type="button" aria-expanded="false" class="accordion-trigger" aria-controls="sect3" id="accordion3id">
    <span class="accordion-title">
      Shipping Address
      <span class="accordion-icon"></span>
    </span>
  </button>
</h3>
<div id="sect3" role="region" aria-labelledby="accordion3id" class="accordion-panel" hidden="">
  <div>
    <fieldset>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint id aperiam perspiciatis magnam, ab est iusto
        pariatur optio quae, deleniti numquam consectetur aspernatur dolor? Nemo consequatur doloremque doloribus
        asperiores totam.
        Ipsam maiores sit corporis voluptatem nostrum labore qui, nam, assumenda ut tempore necessitatibus nihil eum
        aliquid amet recusandae et eaque. Ducimus doloremque fugit eius dolor inventore, possimus cupiditate unde
        velit.</p>
    </fieldset>
  </div>
</div>
</div>

  `;

  constructor() {}

  ngOnInit(): void {
    console.log('init', this.accordionElement);
  }

  ngAfterViewInit() {
    let accordions =
      this.accordionElement?.nativeElement.querySelectorAll('h3');

    accordions.forEach((accordionEl: any) => {
      console.log(accordionEl);
      new Accordion(accordionEl);
    });
  }
}

class Accordion {
  private rootEl: any;
  private buttonEl: any;
  private contentEl: any;
  private _open: any;

  constructor(domNode: any) {
    this.rootEl = domNode;
    this.buttonEl = this.rootEl.querySelector('button[aria-expanded]');

    const controlsId = this.buttonEl.getAttribute('aria-controls');
    this.contentEl = document.getElementById(controlsId);

    this._open = this.buttonEl.getAttribute('aria-expanded') === 'true';

    // add event listeners
    this.buttonEl.addEventListener('click', this.onButtonClick.bind(this));
  }

  onButtonClick() {
    this.toggle(!this._open);
  }

  toggle(open: any) {
    // don't do anything if the open state doesn't change
    if (open === this._open) {
      return;
    }

    // update the internal state
    this._open = open;

    // handle DOM updates
    this.buttonEl.setAttribute('aria-expanded', `${open}`);
    if (open) {
      this.contentEl.removeAttribute('hidden');
    } else {
      this.contentEl.setAttribute('hidden', '');
    }
  }

  // Add public open and close methods for convenience
  open() {
    this.toggle(true);
  }

  close() {
    this.toggle(false);
  }
}
