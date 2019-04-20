import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernorPage } from './governor.page';

describe('GovernorPage', () => {
  let component: GovernorPage;
  let fixture: ComponentFixture<GovernorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovernorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
