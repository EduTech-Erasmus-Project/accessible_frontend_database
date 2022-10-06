import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluitComponent } from './fluit.component';

describe('FluitComponent', () => {
  let component: FluitComponent;
  let fixture: ComponentFixture<FluitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
