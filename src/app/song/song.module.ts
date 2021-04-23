import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongRoutingModule } from './song-routing.module';
import {CreateSongComponent} from './create-song/create-song.component';
import {ListSongsComponent} from './list-songs/list-songs.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ListSongsComponent,
    CreateSongComponent
  ],
    imports: [
        CommonModule,
        SongRoutingModule,
        FormsModule
    ]
})
export class SongModule { }
