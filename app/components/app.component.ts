import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {NgClass} from 'angular2/common';

import {Pokemon} from '../classes/pokemon';

import {PokemonListService} from '../services/pokemon-list.service';
import {PokemonService} from '../services/pokemon.service';

import {PokemonListComponent} from '../components/pokemon-list.component';

import {FirstCapitalLetter} from '../pipes/first-capital-letter.pipe';
import {ColorTag} from '../pipes/color-tag.pipe';

// load bootstrap 4
import {Alert, Ng2BootstrapConfig, Ng2BootstrapTheme} from 'ng2-bootstrap/ng2-bootstrap';
Ng2BootstrapConfig.theme = Ng2BootstrapTheme.BS4;

@Component({
    selector: 'pokestats-app',
    directives: [
        Alert,
        NgClass,
        PokemonListComponent
    ],
    providers: [
        HTTP_PROVIDERS,
        PokemonListService,
        PokemonService
    ],
    pipes: [
        FirstCapitalLetter,
        ColorTag
    ],
    templateUrl: 'app/templates/app.html'
})

export class AppComponent implements OnInit {
    
    search: string = '';

    // pokemon parameters
    level: number = 100;
    nature: string = '';
    iv: { [id: string]: number; } = { 'hp': 31, 'atk': 31, 'def': 31, 'satk': 31, 'sdef': 31, 'spd': 31 };
    ev: { [id: string]: number; } = { 'hp': 0,  'atk': 0,  'def': 0,  'satk': 0,  'sdef': 0,  'spd': 0  };

    // pure stats
    max_stat: number = 400;
    stats_table = {
        'hp':   'hp',
        'atk':  'attack',
        'def':  'defense',
        'satk': 'special-attack',
        'sdef': 'special-defense',
        'spd':  'speed'
    }

    constructor(private _pokemonService:PokemonService) {}

    
    ngOnInit() {}

    getKeysOfStatsTable() : Array<string> {

        return Object.keys(this.stats_table);
    }

    displayPokemon() {

        return this._pokemonService.displayPokemon();
    }

    getLeveledMaxStat() : number {

        return this.max_stat * (+this.level) / 100;
    }

    getBaseStat(key) : number {

        if (this.displayPokemon().stats != undefined) {

            for (var i = Object.keys(this.displayPokemon().stats).length - 1; i >= 0; i--) {

                var real_keys = Object.keys(this.displayPokemon().stats);
                var real_stat = this.displayPokemon().stats[real_keys[i]];

                if (real_stat.stat.name == this.stats_table[key])
                    return real_stat.base_stat;

            }
        }
        return -1;
    }

    getCalculatedStat(key) : number {

        var base_stat = this.getBaseStat(key);
        if (base_stat != -1) {

            // formula vars
            var B = base_stat;
            var I = +this.iv[key];
            var E = Math.floor(+this.ev[key] / 4);
            var L = +this.level;
            var N = 1;

            if (key == 'hp') {

                if (this.displayPokemon().name == 'shedinja') {

                    // shedinja special case
                    return 1;

                } else {

                    // hp formula
                    return Math.floor( (2 * B + I + E) * L / 100 + L + 10 );
                }

            } else {
                
                // common case formula
                return Math.floor( Math.floor( (2 * B + I + E) * L / 100 + 5 ) * N );
            }

        }
        return 0;
    }

}