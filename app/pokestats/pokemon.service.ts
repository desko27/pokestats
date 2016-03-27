import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Pokemon} from './pokemon';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PokemonService {
    constructor(private http: Http) { }
    
    private _pokemonsUrl = 'assets/pokemons.json';
    // private _pokemonsUrl = 'http://pokeapi.co/api/v1/pokedex/1/';

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