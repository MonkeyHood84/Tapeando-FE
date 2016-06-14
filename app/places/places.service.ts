import { Injectable } from '@angular/core'
import { Headers, Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Rx'

import { IPlace } from './places'

@Injectable()
export class PlaceService {
    private _serviceUrl = "http://localhost:5000/";
    
    constructor(private _http: Http) {}
    
    getPlaces(): Observable<IPlace[]>{
        return this._http.get(this._serviceUrl + "places")
            .map((response: Response)=> <IPlace[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');        
    }
    
    getPlace(id:number): Observable<IPlace>{
        return this._http.get(this._serviceUrl + "places/" + id)
            .map((response: Response)=> <IPlace>response.json())
            .do(data => console.log('Selected: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    savePlace(place:IPlace): Observable<IPlace> {
        if(place.id){
            return this.put(place);
        }
        return this.post(place);
    }
    
    delete(place:IPlace): Observable<IPlace>{
        return this._http.delete(this._serviceUrl + 'places/' + place.id)
                .map((response:Response)=><IPlace>response.json())
                .do(data => console.log('deleted: ' + JSON.stringify(data)))
                .catch(this.handleError);
    }
    
    private post(place:IPlace): Observable<IPlace>{
        let headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post(this._serviceUrl + 'places/', JSON.stringify(place), {headers: headers})
                .map((response:Response)=><IPlace>response.json())
                .do(data => console.log('Added: ' + JSON.stringify(data)))
                .catch(this.handleError);
    }
    
    private put(place:IPlace): Observable<IPlace>{
        console.log('put func', place);
        let headers = new Headers({'Content-Type': 'application/json'});
        return this._http.put(this._serviceUrl + 'places/'+ place.id, JSON.stringify(place), {headers: headers})
                .map((response:Response)=><IPlace>response.json())
                .do(data => console.log('Updated: ' + JSON.stringify(data)))
                .catch(this.handleError);
    }
}