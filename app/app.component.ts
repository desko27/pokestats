import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';

// load bootstrap 4
import {Alert, Ng2BootstrapConfig, Ng2BootstrapTheme} from 'ng2-bootstrap/ng2-bootstrap';
Ng2BootstrapConfig.theme = Ng2BootstrapTheme.BS4;

interface Pokemon {
    id: number;
    name: string;
}

@Component({
    selector: 'pokestats-app',
    inputs: ['searchBoxFocused'],
    directives: [Alert, NgClass],
    templateUrl: 'templates/app.html'
})
export class AppComponent {
    public title = 'PokeStats';
    public pokemon: Pokemon = {
        id: 1,
        name: 'Pikachu'
    }
}