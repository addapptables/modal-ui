import { Directive } from '@angular/core';

@Directive({
  selector: 'addapptable-modal-footer, [addapptable-modal-footer], [addapptableModalFooter]',
  host: { class: 'modal-footer' }
})
export class ModalFooterDirective { }
