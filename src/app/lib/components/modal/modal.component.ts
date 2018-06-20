import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
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
    this._modalService.add(this);
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
