import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStudentPage } from './manage-student.page';

describe('ManageStudentPage', () => {
  let component: ManageStudentPage;
  let fixture: ComponentFixture<ManageStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageStudentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
