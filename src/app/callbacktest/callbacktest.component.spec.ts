/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CallbacktestComponent } from './callbacktest.component';

describe('CallbacktestComponent', () => {
  let component: CallbacktestComponent;
  let fixture: ComponentFixture<CallbacktestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallbacktestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbacktestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
