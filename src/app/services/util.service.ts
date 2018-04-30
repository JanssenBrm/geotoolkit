import { Injectable } from '@angular/core';
import * as ol from 'openlayers';

@Injectable()
export class UtilService {

  constructor() { }

  formatArea(polygon) {
    var area = polygon.getArea();
    var output;
    if (area > 10000) {
      output = (Math.round(area / 1000000 * 100) / 100) +
        ' ' + 'km<sup>2</sup>';
    } else {
      output = (Math.round(area * 100) / 100) +
        ' ' + 'm<sup>2</sup>';
    }
    return output;
  }

  formatCircleArea(circle) {
    var radius = circle.getRadius();
    var area = Math.PI * Math.pow(radius, 2);
    var output;
    if (area > 10000) {
      output = (Math.round(area / 1000000 * 100) / 100) +
        ' ' + 'km<sup>2</sup>';
    } else {
      output = (Math.round(area * 100) / 100) +
        ' ' + 'm<sup>2</sup>';
    }
    return output;
  }

  formatLength(line) {
    var length = ol.Sphere.getLength(line);
    var output;
    if (length > 100) {
      output = (Math.round(length / 1000 * 100) / 100) +
        ' ' + 'km';
    } else {
      output = (Math.round(length * 100) / 100) +
        ' ' + 'm';
    }
    return output;
  };

  formatRadius(circle){
    var radius = circle.getRadius();

    var output;
    if (radius > 100) {
      output = (Math.round(radius / 1000 * 100) / 100) +
        ' ' + 'km';
    } else {
      output = (Math.round(radius * 100) / 100) +
        ' ' + 'm';
    }
    return output;

  }

}
