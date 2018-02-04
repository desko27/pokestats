System.register(["angular2/core", 'angular2/http', 'rxjs/Observable', '../classes/pokemon'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1, pokemon_1;
    var PokemonService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (pokemon_1_1) {
                pokemon_1 = pokemon_1_1;
            }],
        execute: function() {
            PokemonService = (function () {
                function PokemonService(http) {
                    this.http = http;
                    this._pokemon = new pokemon_1.Pokemon();
                }
                PokemonService.prototype.displayPokemon = function () {
                    return this._pokemon;
                };
                PokemonService.prototype.setPokemon = function (pokemon) {
                    this._pokemon = pokemon;
                    // debug retrieved object
                    console.log(this._pokemon);
                };
                PokemonService.prototype.getPokemon = function (pokemon) {
                    // return api data for this pokemon
                    return this.http.get('http://pokeapi.co/' + pokemon.resource_uri)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                PokemonService.prototype.handleError = function (error) {
                    // logging error to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                PokemonService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PokemonService);
                return PokemonService;
            }());
            exports_1("PokemonService", PokemonService);
        }
    }
});
//# sourceMappingURL=pokemon.service.js.map