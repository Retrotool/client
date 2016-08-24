/// <reference path="../../typings/index.d.ts"/>

import 'zone.js/dist/zone';
import 'zone.js/dist/async-test';
import { Component } from '@angular/core';
import { MainComponent } from './main';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { inject, async, TestComponentBuilder, ComponentFixture } from '@angular/core/testing';

@Component({
  selector: 'retro-footer',
  template: ''
})
class MockFooterComponent {}
@Component({
  selector: 'retro-header',
  template: ''
})
class MockHeaderComponent {}

describe('main component', () => {
  it('renders the header and footer', async(inject([ TestComponentBuilder ], (tcb: TestComponentBuilder) => {
    tcb
      .overrideDirective(MainComponent, FooterComponent, MockFooterComponent)
      .overrideDirective(MainComponent, HeaderComponent, MockHeaderComponent)
      .createAsync(MainComponent)
      .then((fixture: ComponentFixture<any>) => {
        fixture.detectChanges();
        const main = fixture.nativeElement;
        expect(main.querySelector('retro-header')).toBeDefined();
        expect(main.querySelector('retro-footer')).toBeDefined();
      });
  })));
});
