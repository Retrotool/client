import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2StateDeclaration, UIRouterModule, UIView } from 'ui-router-ng2';

import { AppComponent }   from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

const homeState: Ng2StateDeclaration = {
  name: 'homeState',
  component: AppComponent
};


@NgModule({
  imports:      [
    BrowserModule,
    UIRouterModule.forRoot({
      otherwise: { state: 'homeState', params: {} },
      states: [ homeState ]
    })
  ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent ],
  bootstrap:    [ UIView ]
})
export class AppModule {}
