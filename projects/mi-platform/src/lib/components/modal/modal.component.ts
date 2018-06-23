import { Component, OnInit, Input, ElementRef, OnDestroy } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'mi-platform-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  @Input() title: string;
  @Input() titleIcon: string;

  get rootEl() {
    return this._el.nativeElement.firstElementChild as HTMLElement;
  }

  constructor(
    private _modalService: ModalService,
    private _el: ElementRef
  ) { }

  ngOnInit() {
    this._modalService.register(this);
  }

  ngOnDestroy() {
    this._modalService.unregister(this.id);
  }

  open() {
    this.rootEl.style.display = 'block';
    return true;
  }

  close() {
    this.rootEl.style.display = 'none';
    return true;
  }
}
