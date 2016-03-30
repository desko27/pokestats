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

    getBaseStat(key) : number {

        if (this.displayPokemon().stats != undefined) {

            for (var i = Object.keys(this.displayPokemon().stats).length - 1; i >= 0; i--) {

                var real_keys = Object.keys(this.displayPokemon().stats);
                var real_stat = this.displayPokemon().stats[real_keys[i]];

                if (real_stat.stat.name == this.stats_table[key])
                    return real_stat.base_stat;

            }
        }
        return 0;
    }

    displayPokemon() {

        return this._pokemonService.displayPokemon();
    }

}