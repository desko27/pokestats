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
    <div id="pokemon-list-container">
    <ul id="pokemon-list">
        <li *ngFor="#pokemon of pokemons" class="pokemon-item clickable valign-content" data-id="{{ pokemon.id }}">
            <span class="name valigned">{{ pokemon.name | firstCapitalLetter }}<div class="separator"></div></span>
            <span class="icon valigned"><img src="assets/pokemon/icon/{{ pokemon.id }}.png"></span>
        </li>
    </ul>
    </div>
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

}