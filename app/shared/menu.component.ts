import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  selector: 'tp-menu',
  directives: [ROUTER_DIRECTIVES],
  template: `<nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>TAPEANDO</a>
                <ul class='nav navbar-nav'>
                    <li><a>Feed</a></li>
                    <li><a [routerLink]="['Places']">Places</a></li>
                    <li><a [routerLink]="['Tapas']">Tapas</a></li>
                </ul>
            </div>
        </nav>`
})
export class MenuComponent { }