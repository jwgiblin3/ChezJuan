import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'm2h'
})
export class MinutesToHours implements PipeTransform {
  transform(value: number): string {
    let hours = Math.floor(value / 60);
    let minutes = Math.floor(value % 60);
    let m2h = minutes + ' mins'
    if (hours>0) {
        m2h = hours + ' hrs ' + m2h
    }
    return m2h;
  }
}
