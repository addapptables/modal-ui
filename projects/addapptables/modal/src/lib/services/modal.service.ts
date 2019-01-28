import { Injectable, TemplateRef, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ComponentType } from '@angular/cdk/portal';
import { ADDAPPTABLE_MODAL_CONFIG } from '../tokens';
import { ModalConfig } from '../models/modal-config.model';

@Injectable()
export class ModalService {

  constructor(
    private _dialog: MatDialog,
    @Inject(ADDAPPTABLE_MODAL_CONFIG) private modalConfig: ModalConfig
  ) { }

  show<T = any>(component: ComponentType<T> | TemplateRef<T>, data?: any) {
    return this._dialog.open(component, {
      data,
      width: this.modalConfig.width
    });
  }

}
