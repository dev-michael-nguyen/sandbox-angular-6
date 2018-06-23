import { Component, OnInit } from '@angular/core';
import { ModalService } from 'mi-platform';

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.scss']
})
export class PersonPageComponent implements OnInit {

  constructor(
    private _modalService: ModalService
  ) { }

  ngOnInit() {
  }

  ADD_PERSON_MODAL_ID = 'app-add-person-modal';
  openAddPersonModal() {
    this._modalService.open(this.ADD_PERSON_MODAL_ID);
  }

  SETTING_MODAL_ID = 'app-setting-modal';
  openSettingModal() {
    this._modalService.open(this.SETTING_MODAL_ID);
  }
}
