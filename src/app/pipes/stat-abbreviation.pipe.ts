import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'statAbbreviation' })
export class StatAbbreviation implements PipeTransform {

    private _stats_table = {
        'speed':           'spd',
        'special-defense': 'sdef',
        'special-attack':  'satk',
        'defense':         'def',
        'attack':          'atk',
        'hp':              'hp'
    }

    transform(full_stat:string) : number {
        return this._stats_table[full_stat];
    }
}