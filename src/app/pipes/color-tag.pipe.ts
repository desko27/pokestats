import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'colorTag'})
export class ColorTag implements PipeTransform {
    transform(value: number, leveled_max_stat: number) : string {

        // adapt to a 0-100 relation
        value = 100 * value / leveled_max_stat;

        // return the right color tag
        if (value < 25) return 'danger';
        else if (value < 50) return 'warning';
        else if (value < 75) return 'success';
        else return 'info';

    }
}