import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform<T>(arrToFilter: Array<T>, param: string, value: string): Array<T> {
    return _.filter(arrToFilter, function (item) {
      return item[param].toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
  }

}
