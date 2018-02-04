import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {Pokemon} from '../classes/pokemon';

@Injectable()
export class PokemonListService {
    constructor(private http: Http) { }

    private _pokemonsUrl = 'assets/pokemons.json';
    // private _pokemonsUrl = 'https://pokeapi.co/api/v1/pokedex/1/';

    getPokemons() {
        return this.http.get(this._pokemonsUrl)
            .map(res => <Pokemon[]>res.json().pokemon)
            // .do(data => console.log(data)) // eyeball results in the console
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // logging error to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
