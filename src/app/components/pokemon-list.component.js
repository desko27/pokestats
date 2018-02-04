System.register(['angular2/core', '../services/pokemon-list.service', '../services/pokemon.service', '../services/nanobar.service', '../pipes/first-capital-letter.pipe', '../pipes/last-uri-segment.pipe'], function(exports_1, context_1) {
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
    var core_1, pokemon_list_service_1, pokemon_service_1, nanobar_service_1, first_capital_letter_pipe_1, last_uri_segment_pipe_1;
    var PokemonListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pokemon_list_service_1_1) {
                pokemon_list_service_1 = pokemon_list_service_1_1;
            },
            function (pokemon_service_1_1) {
                pokemon_service_1 = pokemon_service_1_1;
            },
            function (nanobar_service_1_1) {
                nanobar_service_1 = nanobar_service_1_1;
            },
            function (first_capital_letter_pipe_1_1) {
                first_capital_letter_pipe_1 = first_capital_letter_pipe_1_1;
            },
            function (last_uri_segment_pipe_1_1) {
                last_uri_segment_pipe_1 = last_uri_segment_pipe_1_1;
            }],
        execute: function() {
            PokemonListComponent = (function () {
                function PokemonListComponent(_pokemonListService, _pokemonService, _nanobar) {
                    this._pokemonListService = _pokemonListService;
                    this._pokemonService = _pokemonService;
                    this._nanobar = _nanobar;
                    // local vars
                    this.firstApiCall = true;
                }
                PokemonListComponent.prototype.ngOnInit = function () { this.getPokemons(); };
                PokemonListComponent.prototype.getPokemon = function (pokemon) {
                    var _this = this;
                    this._nanobar.start();
                    this._pokemonService.getPokemon(pokemon)
                        .subscribe(function (pokemon) {
                        _this._pokemonService.setPokemon(pokemon);
                        _this._nanobar.finish();
                        if (_this.firstApiCall) {
                            // finish the startup loading screen
                            window.loading_screen.finish();
                            _this.firstApiCall = false;
                        }
                    }, function (error) { return _this.errorMessage = error; });
                };
                PokemonListComponent.prototype.getPokemons = function () {
                    var _this = this;
                    this._pokemonListService.getPokemons()
                        .subscribe(function (pokemons) {
                        // give id from resource_uri to all of them
                        pokemons.forEach(function (item) {
                            item.id = new last_uri_segment_pipe_1.LastUriSegment().transform(item.resource_uri);
                        });
                        // filter only 3rd generation
                        _this.allPokemons = _this.filterPokemons(pokemons);
                        // sort by id
                        _this.allPokemons.sort(function compare(a, b) {
                            if (a.id < b.id)
                                return -1;
                            else if (a.id > b.id)
                                return 1;
                            else
                                return 0;
                        });
                        // give allPokemons to filtered array
                        _this.execFilter();
                        // select a random pokemon
                        _this.selectPokemon(Math.floor(Math.random() * (386 - 1) + 1));
                    }, function (error) { return _this.errorMessage = error; });
                };
                PokemonListComponent.prototype.filterPokemons = function (pokemons) {
                    return pokemons.filter(function (item) {
                        return item.id <= 386 // 3rd generation
                            && (item.name.indexOf(this.search) > -1);
                    }, this);
                };
                PokemonListComponent.prototype.execFilter = function () {
                    document.getElementById('pokemon-list-container').scrollTop = 0;
                    this.pokemons = this.filterPokemons(this.allPokemons);
                };
                PokemonListComponent.prototype.selectPokemon = function (id) {
                    this.getPokemon(this.allPokemons[id - 1]);
                };
                PokemonListComponent = __decorate([
                    core_1.Component({
                        selector: 'pokemon-list',
                        providers: [nanobar_service_1.NanobarService],
                        pipes: [first_capital_letter_pipe_1.FirstCapitalLetter],
                        inputs: ['search'],
                        template: "\n    <div id=\"pokemon-list-container\">\n    <ul id=\"pokemon-list\">\n        <li *ngFor=\"#pokemon of pokemons\" class=\"pokemon-item clickable valign-content\" (click)=\"selectPokemon(pokemon.id)\" data-id=\"{{ pokemon.id }}\">\n            <span class=\"name valigned\">{{ pokemon.name | firstCapitalLetter }}<div class=\"separator\"></div></span>\n            <span class=\"icon valigned\"><img src=\"assets/pokemon/icon/{{ pokemon.id }}.png\"></span>\n        </li>\n    </ul>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [pokemon_list_service_1.PokemonListService, pokemon_service_1.PokemonService, nanobar_service_1.NanobarService])
                ], PokemonListComponent);
                return PokemonListComponent;
            }());
            exports_1("PokemonListComponent", PokemonListComponent);
        }
    }
});
//# sourceMappingURL=pokemon-list.component.js.map