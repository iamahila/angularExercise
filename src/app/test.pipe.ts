import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: string, till: number): string {
    let result = value.charAt(0).toUpperCase() + value.slice(1, till).toLowerCase();
    return result;
  }

}
