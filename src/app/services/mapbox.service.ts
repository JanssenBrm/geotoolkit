import { Injectable } from '@angular/core';
import {BACKGROUND_LAYERS} from "../config/backgroundlayers.config";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import * as ol from 'openlayers';
import {HttpClient} from "@angular/common/http";
import {baseBuildCommandOptions} from "@angular/cli/commands/build";

@Injectable()
export class MapboxService {

  private accessToken = 'pk.eyJ1IjoiYnJhbWphbnNzZW4iLCJhIjoiY2o4dnlpdGt5MTZrbTMzcnB2amJxcmRzdyJ9.WQfT2IF5Ij15-jTxbgMWRw';
  private baseUrl = 'https://api.mapbox.com';

  constructor(private http:HttpClient) { }

  reverseGeocode(lat: any, lon: any){
    console.log("REVERSE GEOCODE")
    return this.http.get(`${this.baseUrl}/geocoding/v5/mapbox.places/${lat},${lon}.json?access_token=${this.accessToken}`)
      .map(response => {
         return response;
      });
  }

  search(term: string, language = 'en') {
    let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${term}.json`;
    url += `?autocomplete=true&language=${language}&types=place,address&access_token=${this.accessToken}`;

    return this.http.get(url);
  }
}
