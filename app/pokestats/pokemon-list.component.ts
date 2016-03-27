import {Component, OnInit} from 'angular2/core';
import {Pokemon} from './pokemon';
import {PokemonService} from './pokemon.service';
import {LastUriSegment} from '../pipes/last-uri-segment.pipe';
import {FirstCapitalLetter} from '../pipes/first-capital-letter.pipe';

@Component({
    selector: 'pokemon-list',
    pipes: [LastUriSegment, FirstCapitalLetter],
    inputs: ['search'],
    template: `
    <li *ngFor="#pokemon of pokemons" class="pokemon-item valign-content" data-id="{{ pokemon.resource_uri | lastUriSegment }}">
        <span class="name valigned">{{ pokemon.name | firstCapitalLetter }}<div class="separator"></div></span>
        <span class="icon valigned"><img src="assets/pokemon/icon/{{ pokemon.resource_uri | lastUriSegment }}.png"></span>
    </li>
    `
})
export class PokemonListComponent implements OnInit {

    constructor (private _pokemonService: PokemonService) {}

    search: string;
    errorMessage: string;
    allPokemons: Pokemon[];
    pokemons: Pokemon[];

    ngOnInit() { this.getPokemons(); }

    getPokemons() {
        this._pokemonService.getPokemons()
            .subscribe(
                pokemons => {
                    this.allPokemons = this.filterPokemons(pokemons);
                    this.execFilter();
                },
                error => this.errorMessage = <any>error);
    }

    filterPokemons(pokemons) {
        console.log(this.search);
        return pokemons.filter(function(item) {
            var id = new LastUriSegment().transform(item.resource_uri);
            return id <= 386 // 3rd generation
                   && (item.name.indexOf(this.search) > -1);
        }, this);
    }

    execFilter() {
        this.pokemons = this.filterPokemons(this.allPokemons);
    }

}