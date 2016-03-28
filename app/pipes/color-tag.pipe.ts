import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'colorTag'})
export class ColorTag implements PipeTransform {
    transform(value:number) : string {
        
        if (value < 25) return 'danger';
        else if (value < 50) return 'warning';
        else if (value < 75) return 'success';
        else return 'info';

    }
}