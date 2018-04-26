import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'layerFilter'
})
export class LayerFilterPipe implements PipeTransform {

  transform(layers: any[], filter: string): any {

     if(filter){
       return layers.filter( layer => {
         return layer.name.toUpperCase().includes(filter.toUpperCase());
       })
     }else{
       return layers;
     }
  }

}
