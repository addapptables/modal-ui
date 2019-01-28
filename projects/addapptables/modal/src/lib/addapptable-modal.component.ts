import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'addapptable-modal',
  templateUrl: './addapptable-modal.component.html',
  styleUrls: ['./addapptable-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'modal'
  }
})
export class AddapptableModalComponent { }
