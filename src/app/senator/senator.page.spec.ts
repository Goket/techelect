import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenatorPage } from './senator.page';

describe('SenatorPage', () => {
  let component: SenatorPage;
  let fixture: ComponentFixture<SenatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenatorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
