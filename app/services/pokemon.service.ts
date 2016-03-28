import {Injectable} from "angular2/core";
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Pokemon} from '../classes/pokemon';

@Injectable()
export class PokemonService {
    constructor(private http: Http) { }

    private _pokemon: Pokemon = new Pokemon();
    errorMessage: string;

    displayPokemon() {
        return this._pokemon;
    }

    setPokemon(pokemon) {
        this._pokemon = pokemon;
        console.log(this._pokemon);
    }

    getPokemon(pokemon) {
        // return api data for this pokemon
        return this.http.get('http://pokeapi.co/' + pokemon.resource_uri)
            .map(res => <Pokemon>res.json())
            // .do(data => console.log(data)) // eyeball results in the console
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // logging error to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}