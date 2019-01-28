import { NgModule, ModuleWithProviders } from '@angular/core';
import { AddapptableModalComponent } from './addapptable-modal.component';
import { ModalHeaderDirective } from './directives/modal-header.directive';
import { ModalFooterDirective } from './directives/modal-footer.directive';
import { ModalBodyComponent } from './components/modal-body/modal-body.component';
import { AddapptablePerfectScrollbarModule } from '@addapptables/perfect-scrollbar';
import { MatDialogModule } from '@angular/material';
import { ModalConfig } from './models/modal-config.model';
import { ModalService } from './services/modal.service';
import { ADDAPPTABLE_MODAL_CONFIG } from './tokens';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AddapptableModalComponent,
    ModalHeaderDirective,
    ModalFooterDirective,
    ModalBodyComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    AddapptablePerfectScrollbarModule,
  ],
  exports: [
    AddapptableModalComponent,
    ModalBodyComponent,
    ModalHeaderDirective,
    ModalFooterDirective
  ],
  providers: [
    ModalService
  ]
})
export class ModalModule {
  static forRoot(config: ModalConfig = { width: '800px' }): ModuleWithProviders {
    return {
      ngModule: ModalModule,
      providers: [
        { provide: ADDAPPTABLE_MODAL_CONFIG, useValue: config }
      ]
    };
  }
}
