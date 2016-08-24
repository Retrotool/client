/// <reference path="../typings/index.d.ts"/>

import { Injectable } from '@angular/core';
import { UIRouter } from 'ui-router-ng2/router';
import { MainComponent } from './app/main';

const initialStates: any[] = [
  { name: 'App', url: '/', component: MainComponent }
];

@Injectable()
export class RouterConfig {
  configure(uiRouter: UIRouter) {
    uiRouter.urlRouterProvider.otherwise(() => uiRouter.stateService.go('App', null, null));
    uiRouter.stateRegistry.root();
    initialStates.forEach(state => uiRouter.stateRegistry.register(state));
  }
}
