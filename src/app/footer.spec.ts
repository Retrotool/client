/// <reference path="../../typings/index.d.ts"/>

import { FooterComponent } from './footer.component';

import { async, TestBed } from '@angular/core/testing';

describe('Footer component', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
    })
    .compileComponents();
  }));

  it('should show version', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();

    const footer = fixture.nativeElement;

    expect(footer.querySelector('span').textContent.trim()).toBe('RetroTool v0.0.0');
  });

});
