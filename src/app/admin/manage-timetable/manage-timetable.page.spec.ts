import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTimetablePage } from './manage-timetable.page';

describe('ManageTimetablePage', () => {
  let component: ManageTimetablePage;
  let fixture: ComponentFixture<ManageTimetablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTimetablePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTimetablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
