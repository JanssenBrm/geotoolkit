import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'layerSort'
})
export class LayerSortPipe implements PipeTransform {

  transform(array: any[], args: string): any[] {
    array.sort((a: any, b: any) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
