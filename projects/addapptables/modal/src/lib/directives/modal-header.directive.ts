import { Directive } from '@angular/core';

@Directive({
  selector: 'addapptable-modal-header, [addapptable-modal-header], [addapptableModalHeader]',
  host: { class: 'modal-header' }
})
export class ModalHeaderDirective { }
