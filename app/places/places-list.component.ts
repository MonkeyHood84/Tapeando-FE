import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import { IPlace } from './places'
import { PlaceService } from './places.service'

@Component({
  selector: 'tp-places-list',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/places/places-list.component.html'
})
export class PlacesListComponent implements OnInit { 
    places: IPlace[];
    errorMessage: string;

    constructor(private _placeService: PlaceService){}
    
    ngOnInit():void{
        this.getAll();
    }
    
    getAll():void{
        this._placeService.getPlaces()
            .subscribe(
                places => this.places = places,
                error => this.errorMessage = <any>error);
    }
    
    delete(place:IPlace, event: any):void {
        event.stopPropagation();
        this._placeService.delete(place)
            .subscribe(
                res=> this.getAll(),                
                error => this.errorMessage = <any>error);
    }
    
}