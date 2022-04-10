/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListaAnimaisComponent } from './lista-animais.component';

describe('ListaAnimaisComponent', () => {
  let component: ListaAnimaisComponent;
  let fixture: ComponentFixture<ListaAnimaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAnimaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
