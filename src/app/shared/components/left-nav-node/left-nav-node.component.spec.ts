import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavNodeComponent } from './left-nav-node.component';

describe('LeftNavNodeComponent', () => {
  let component: LeftNavNodeComponent;
  let fixture: ComponentFixture<LeftNavNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftNavNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNavNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
