import { Component } from '@angular/core';

const config = require('!!json!../../package.json');

@Component({
  selector: 'retro-footer',
  template: require('./footer.component.html')
})
export class FooterComponent {
  version: string;

  constructor() {
    this.version = config.version;
  }
}
