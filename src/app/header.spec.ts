/// <reference path="../../typings/index.d.ts"/>

import 'zone.js/dist/zone';
import 'zone.js/dist/async-test';
import { HeaderComponent } from './header';
import { inject, async, TestComponentBuilder, ComponentFixture } from '@angular/core/testing';

describe('header component', () => {
  it('renders "RetroApp" title', async(inject([ TestComponentBuilder ], (tcb: TestComponentBuilder) => {
    tcb.createAsync(HeaderComponent)
      .then((fixture: ComponentFixture<any>) => {
        fixture.detectChanges();
        const header = fixture.nativeElement;
        expect(header.querySelector('p').textContent.trim()).toBe('RetroTool');
      });
  })));
});
