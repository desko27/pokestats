import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'firstCapitalLetter'})
export class FirstCapitalLetter implements PipeTransform {
    transform(value:string) : string {
        return (!!value) ? value.charAt(0).toUpperCase() + value.substr(1).toLowerCase() : '';
    }
}