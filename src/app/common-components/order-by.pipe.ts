import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array<Object>, param: string): Array<Object> {
    return _.sortBy(value, param);
  }

}
