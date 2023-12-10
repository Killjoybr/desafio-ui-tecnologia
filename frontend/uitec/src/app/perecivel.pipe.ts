import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'perecivel'
})
export class PerecivelPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Perecível' : 'Não Perecível';
  }

}
