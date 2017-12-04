import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'toHoursMinutes'})
export class formatMinutesFilter implements PipeTransform {
  transform(value: number): string {
    return `${Math.floor(value / 60)}h ${value % 60}min`
  }
}
