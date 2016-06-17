"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
var menu_component_1 = require('./shared/menu.component');
var places_list_component_1 = require('./places/places-list.component');
var place_detail_component_1 = require('./places/place-detail.component');
var places_service_1 = require('./places/places.service');
var tapas_list_component_1 = require('./tapas/tapas-list.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'tp-app',
            template: "<div>\n                <tp-menu></tp-menu>        \n                <router-outlet></router-outlet>\n            </div>",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, menu_component_1.MenuComponent],
            providers: [router_deprecated_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, places_service_1.PlaceService]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/places', name: 'Places', component: places_list_component_1.PlacesListComponent, useAsDefault: true },
            { path: '/places/add', name: 'AddPlace', component: place_detail_component_1.PlaceDetailComponent },
            { path: '/places/:id', name: 'PlaceDetail', component: place_detail_component_1.PlaceDetailComponent },
            { path: '/tapas', name: 'Tapas', component: tapas_list_component_1.TapasListComponent },
            { path: '/tapas/add', name: 'AddTapa', component: tapas_list_component_1.TapasListComponent },
            { path: '/tapas/:id', name: 'TapaDetail', component: tapas_list_component_1.TapasListComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map