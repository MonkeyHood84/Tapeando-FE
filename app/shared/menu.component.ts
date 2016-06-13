import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  selector: 'tp-menu',
  directives: [ROUTER_DIRECTIVES],
  template: `<ul>
        <li>Feed</li>
        <li><a [routerLink]="['Places']">Places</a></li>
        <li><a [routerLink]="['Tapas']">Tapas</a></li>
        </ul>`
})
export class MenuComponent { }