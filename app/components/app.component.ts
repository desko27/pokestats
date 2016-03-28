import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {NgClass} from 'angular2/common';

import {Pokemon} from '../classes/pokemon';

import {PokemonListService} from '../services/pokemon-list.service';
import {PokemonService} from '../services/pokemon.service';

import {PokemonListComponent} from '../components/pokemon-list.component';

import {FirstCapitalLetter} from '../pipes/first-capital-letter.pipe';

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
    pipes: [FirstCapitalLetter],
    templateUrl: 'app/templates/app.html'
})

export class AppComponent implements OnInit {
    search: string = '';

    constructor(private _pokemonService:PokemonService) {}

    displayPokemon() { return this._pokemonService.displayPokemon(); }

    ngOnInit() { window.loading_screen.finish(); }
}