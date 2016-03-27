import {Injectable} from "angular2/core";
import {Pokemon} from '../classes/pokemon';

@Injectable()
export class PokemonService {
    private _pokemon: Pokemon = new Pokemon();

    constructor() {}

    setPokemon(pokemon) {
        this._pokemon = pokemon;
    }

    getPokemon() {
        return this._pokemon;
    }
}