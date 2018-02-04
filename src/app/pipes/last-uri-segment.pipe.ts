import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'lastUriSegment'})
export class LastUriSegment implements PipeTransform {
    transform(value:string) : number {
        return parseInt(value.slice(0, -1).split('/').pop());
    }
}