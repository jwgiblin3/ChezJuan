import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'noSpaces'
})
export class RemoveSpaces implements PipeTransform {
  transform(value: string): string {
    return value.split(' ').join('').toLowerCase();
  }
}
