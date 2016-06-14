import { Component, OnInit } from '@angular/core';
import { Router, RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { IPlace } from './places'
import { PlaceService } from './places.service'

@Component({
  selector: 'tp-places-list',
  templateUrl: 'app/places/place-detail.component.html'
})
export class PlaceDetailComponent implements OnInit { 
    place: IPlace;
    errorMessage: string;

    constructor(
        private _placeService: PlaceService, 
        private _routeParams:RouteParams, 
        private _router: Router){}
    
    ngOnInit():void{
       this.place = {"id":0, "name":""};
       let id = +this._routeParams.get('id');
       if(id){
             this._placeService.getPlace(id)
                .subscribe(
                    place => this.place = place,
                    error => this.errorMessage = <any>error);
            }
    }
    
    save():void{
        console.log(this.place);
        this._placeService.savePlace(this.place)
            .subscribe(
                place => {console.log('subscribed', place), this.goToPlace(place)},
                error => this.errorMessage = <any>error);
    }
    
    private goToPlace(place:IPlace):void{
        console.log('goto', place);
        this._router.navigate(['PlaceDetail', { id: place.id }]);
    }
    
    private goToPlaces():void{
        this._router.navigate(['PlacesList']);
    }
    
}