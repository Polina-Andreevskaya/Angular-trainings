import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'toHoursMinutes'})
export class formatMinutes implements PipeTransform {
  transform(value: number): string {
    let hours = Math.floor(value / 60);
    let minutes = value % 60;
    return hours > 0 ? `${hours}h ${minutes}min` : `${minutes}min`;
  }
}
