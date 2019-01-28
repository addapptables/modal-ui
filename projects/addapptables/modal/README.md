# ADDAPPTABLES modal

[See demo](http://addapptables.com/admin/ecommerce/products)

## Getting Started
To get started, lets install the package thru npm:

```
npm i @addapptables/modal --S
```

Install peer dependencies

```
npm i
@addapptables/perfect-scrollbar
perfect-scrollbar
@angular/material
@angular/cdk
@angular/animations --S
```

## How to use

```typescript
import { ModalModule } from '@addapptables/modal';
@NgModule({
  imports: [ModalModule.forRoot({ width: '800px' })]
})
export class AppModule { }
```

```html
<addapptable-modal>
  <addapptable-modal-header>
    <h3 class="text-accent">{{'product.create' | translate}}</h3>
    <button mat-icon-button (click)="close()">
      <mat-icon suffix>close</mat-icon>
    </button>
  </addapptable-modal-header>
  <addapptable-modal-body>
    //modal body
  </addapptable-modal-body>
  <addapptable-modal-footer>
    <button type="submit" mat-raised-button color="accent">
      {{'general.save' | translate}}
    </button>
    <button type="button" mat-raised-button (click)="close()">{{'general.close' | translate}}</button>
  </addapptable-modal-footer>
</addapptable-modal>
```

```typescript
@Component({
...
})
export class ProductFormModalComponent {

  constructor(
    private _dialogRef: MatDialogRef<ProductFormModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  close() {
    this._dialogRef.close();
  }

}
```

```typescript
import { ModalModule } from '@addapptables/modal';

@NgModule({
  imports: [ModalModule],
  entryComponents: [
    ProductFormModalComponent // this line is important
  ]
})
export class OtherModule { }
```

```typescript
@Component({
...
})
export class ProductListComponent {

  constructor(
    private _modalService: ModalService
  ) { }

  createProduct() {
    this._modalService.show(ProductFormModalComponent);
  }
}
```