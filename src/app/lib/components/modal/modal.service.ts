import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ModalService {
  private modals: any[] = [];

  get count() {
    return this.modals.length;
  }

  add(modal: any) {
    this.modals.push(modal);
  }

  remove(id: string) {
    const index = this.modals.findIndex((m) => m.id === id);
    if (index === -1) { return false; }
    this.modals.splice(index, 1);
  }

  open(id: string) {
    const modal = this._find(id);
    return modal.open();
  }

  close(id: string) {
    const modal = this._find(id);
    return modal.close();
  }

  private _find(id: string) {
    return this.modals.find((m) => m.id === id);
  }
}
