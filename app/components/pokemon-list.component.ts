import {Component, OnInit} from 'angular2/core';

import {Pokemon} from '../classes/pokemon';

import {PokemonListService} from '../services/pokemon-list.service';
import {PokemonService} from '../services/pokemon.service';

import {FirstCapitalLetter} from '../pipes/first-capital-letter.pipe';
import {LastUriSegment} from '../pipes/last-uri-segment.pipe';

@Component({
    selector: 'pokemon-list',
    pipes: [FirstCapitalLetter],
    inputs: ['search'],
    template: `
    <div id="pokemon-list-container">
    <ul id="pokemon-list">
        <li *ngFor="#pokemon of pokemons" class="pokemon-item clickable valign-content" (click)="selectPokemon(pokemon.id)" data-id="{{ pokemon.id }}">
            <span class="name valigned">{{ pokemon.name | firstCapitalLetter }}<div class="separator"></div></span>
            <span class="icon valigned"><img src="assets/pokemon/icon/{{ pokemon.id }}.png"></span>
        </li>
    </ul>
    </div>
    `
})
export class PokemonListComponent implements OnInit {

    constructor(private _pokemonListService: PokemonListService,
                private _pokemonService: PokemonService) { }

    // inputs
    search: string;

    // local vars
    firstApiCall: boolean = true;
    errorMessage: string;
    allPokemons: Pokemon[];
    pokemons: Pokemon[];

    ngOnInit() { this.getPokemons(); }

    getPokemon(pokemon) {
        this._pokemonService.getPokemon(pokemon)
            .subscribe(
            pokemon => {

                this._pokemonService.setPokemon(pokemon);

                if (this.firstApiCall) {
                    
                    // finish the startup loading screen
                    window.loading_screen.finish();
                    this.firstApiCall = false;
                }

            },
            error => this.errorMessage = <any>error);
    }

    getPokemons() {
        this._pokemonListService.getPokemons()
            .subscribe(
                pokemons => {

                    // give id from resource_uri to all of them
                    pokemons.forEach(function(item) {
                        item.id = new LastUriSegment().transform(item.resource_uri);
                    });

                    // filter only 3rd generation
                    this.allPokemons = this.filterPokemons(pokemons);

                    // sort by id
                    this.allPokemons.sort(function compare(a,b) {
                        if (a.id < b.id) return -1;
                        else if (a.id > b.id) return 1;
                        else return 0;
                    });

                    // give allPokemons to filtered array
                    this.execFilter();

                    // select a random pokemon
                    this.selectPokemon(Math.floor(Math.random() * (386 - 1) + 1));
                },
                error => this.errorMessage = <any>error);
    }

    filterPokemons(pokemons) {
        return pokemons.filter(function(item) {
            return item.id <= 386 // 3rd generation
                   && (item.name.indexOf(this.search) > -1);
        }, this);
    }

    execFilter() {
        document.getElementById('pokemon-list-container').scrollTop = 0;
        this.pokemons = this.filterPokemons(this.allPokemons);
    }

    selectPokemon(id) {
        this.getPokemon(this.allPokemons[id - 1]);
    }

}