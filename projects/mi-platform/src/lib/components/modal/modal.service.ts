import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ModalService {
  private modals: any[] = [];

  get count() {
    return this.modals.length;
  }

  register(modal: any) {
    if (this._find(modal.id)) { return false; }
    this.modals.push(modal);
    return true;
  }

  unregister(id: string) {
    const index = this.modals.findIndex((m) => m.id === id);
    if (index === -1) { return false; }
    this.modals.splice(index, 1);
    return true;
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
