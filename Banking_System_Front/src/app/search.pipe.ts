import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
// import { Product } from './product';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:any[],searchTerm:string): any[] {
    return products.filter((product)=>product.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

}
