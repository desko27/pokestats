import {bootstrap}      from 'angular2/platform/browser';
import {AppComponent}   from './components/app.component';
import {PokemonService} from './services/pokemon.service';

// Add all operators to Observable
import 'rxjs/Rx';

bootstrap(AppComponent, [PokemonService]);