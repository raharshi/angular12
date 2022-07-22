import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    console.log("Custom Pipe Value: " + value);
    value = value.filter(d => JSON.stringify(d).toLowerCase().includes(args.toLowerCase()));
    return value;
  }

}
