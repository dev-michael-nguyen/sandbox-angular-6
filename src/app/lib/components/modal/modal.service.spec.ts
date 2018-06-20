import { TestBed, inject, ComponentFixture, async } from '@angular/core/testing';

import { ModalService } from './modal.service';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  const ID = '1';
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ],
      providers: [ModalService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    component.id = ID;
    fixture.detectChanges();
  });

  it('should be created', inject([ModalService], (service: ModalService) => {
    expect(service).toBeTruthy();
  }));

  it('should add', inject([ModalService], (service: ModalService) => {
    expect(service.count).toEqual(1);
  }));

  it('should open', inject([ModalService], (service: ModalService) => {
    expect(service.open(ID)).toBeTruthy();
  }));

  it('should close', inject([ModalService], (service: ModalService) => {
    expect(service.open(ID)).toBeTruthy();
  }));

  it('should remove', inject([ModalService], (service: ModalService) => {
    service.remove(ID);
    expect(service.count).toEqual(0);
  }));
});
