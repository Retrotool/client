/// <reference path="../typings/index.d.ts"/>

import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import './index.scss';

import { bootstrap } from '@angular/platform-browser-dynamic';


import { enableProdMode, provide } from '@angular/core';
import { UIRouterConfig, UIROUTER_PROVIDERS, UiView } from 'ui-router-ng2';
import { LocationStrategy, PathLocationStrategy, PlatformLocation } from '@angular/common';
import { BrowserPlatformLocation } from '@angular/platform-browser';
import { RouterConfig } from './routes';

declare var process: any;
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

bootstrap(UiView, [
  ...UIROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: PathLocationStrategy }),
  provide(PlatformLocation, { useClass: BrowserPlatformLocation }),
  provide(UIRouterConfig, { useClass: RouterConfig })
]);
