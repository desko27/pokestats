import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';

import { PokemonListService } from './services/pokemon-list.service';
import { PokemonService } from './services/pokemon.service';
import { NanobarService } from './services/nanobar.service';

import { PokemonListComponent } from './components/pokemon-list.component';

import { FirstCapitalLetter } from './pipes/first-capital-letter.pipe';
import { ColorTag } from './pipes/color-tag.pipe';
import { LastUriSegment } from './pipes/last-uri-segment.pipe';
import { StatAbbreviation } from './pipes/stat-abbreviation.pipe';


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  declarations: [
    // directives
    AppComponent,
    PokemonListComponent,

    // pipes
    FirstCapitalLetter,
    ColorTag,
    LastUriSegment,
    StatAbbreviation
  ],
  providers: [
    PokemonListService,
    PokemonService,
    NanobarService
  ]
})
export class AppModule { }
