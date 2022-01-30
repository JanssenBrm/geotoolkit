
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {BACKGROUND_LAYERS} from "../config/backgroundlayers.config";
import {Observable} from "rxjs";
import {Http} from "@angular/http";
import {HttpClient} from "@angular/common/http";
import {environment} from '../../environments/environment';

@Injectable()
export class MapboxService {

  private accessToken = environment.MAPBOX_API_KEY;
  private baseUrl = 'https://api.mapbox.com';

  constructor(private http:HttpClient) { }

  reverseGeocode(lat: any, lon: any){
    return this.http.get(`${this.baseUrl}/geocoding/v5/mapbox.places/${lat},${lon}.json?access_token=${this.accessToken}`).pipe(
      map(response => {
         return response;
      }));
  }

  search(term: string, language = 'en') {
    let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${term}.json`;
    url += `?autocomplete=true&language=${language}&types=place,address&access_token=${this.accessToken}`;

    return this.http.get(url);
  }
}
