import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddapptableModalComponent } from './addapptable-modal.component';

describe('AddapptableModalComponent', () => {
  let component: AddapptableModalComponent;
  let fixture: ComponentFixture<AddapptableModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddapptableModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddapptableModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
