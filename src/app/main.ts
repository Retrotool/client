import { Component } from '@angular/core';

import { HeaderComponent } from './header';
import { FooterComponent } from './footer';

@Component({
  selector: 'retro-app',
  template: require('./main.html'),
  directives: [ HeaderComponent, FooterComponent ]
})
export class MainComponent {}
