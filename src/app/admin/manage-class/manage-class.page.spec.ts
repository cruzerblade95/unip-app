import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageClassPage } from './manage-class.page';

describe('ManageClassPage', () => {
  let component: ManageClassPage;
  let fixture: ComponentFixture<ManageClassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageClassPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
