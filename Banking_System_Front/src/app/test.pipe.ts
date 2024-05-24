import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(productName:string): string {
    return  `buy ${productName}`;
  }

}
