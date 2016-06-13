import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { MenuComponent } from './shared/menu.component'
import { PlacesListComponent } from './places/places-list.component'
import { TapasListComponent } from './tapas/tapas-list.component'


@Component({
  selector: 'tp-app',
  template: `<h1>Tapeando</h1>
            <tp-menu></tp-menu>
            <router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES, MenuComponent],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/places', name: 'Places', component: PlacesListComponent, useAsDefault: true},
    { path: '/tapas', name: 'Tapas', component: TapasListComponent}
])
export class AppComponent { }