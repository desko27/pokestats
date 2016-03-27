import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {NgClass} from 'angular2/common';

import {Pokemon} from './pokestats/pokemon';
import {PokemonListComponent} from './pokestats/pokemon-list.component';
import {PokemonService} from './pokestats/pokemon.service';

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
        PokemonService
    ],
    templateUrl: 'templates/app.html'
})

export class AppComponent {
    search: string = '';
}