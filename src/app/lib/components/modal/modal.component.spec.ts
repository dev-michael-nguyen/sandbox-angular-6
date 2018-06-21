import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { ActionBarComponent } from '../action-bar/action-bar.component';
import { ActionBarButtonComponent } from '../action-bar-button/action-bar-button.component';
import { ActionBarTitleComponent } from '../action-bar-title/action-bar-title.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModalComponent,
        ActionBarComponent,
        ActionBarButtonComponent,
        ActionBarTitleComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
