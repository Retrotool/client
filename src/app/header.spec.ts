/// <reference path="../../typings/index.d.ts"/>

import { HeaderComponent } from './header.component';

import { async, TestBed } from '@angular/core/testing';

describe('Header component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  it('renders "RetroApp" title', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();

    const header = fixture.nativeElement;

    expect(header.querySelector('p').textContent.trim()).toBe('RetroTool');
  });
});
