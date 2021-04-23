import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListSongsComponent} from './list-songs/list-songs.component';
import {CreateSongComponent} from './create-song/create-song.component';

const routes: Routes = [
  {
    path: 'song',
    component: ListSongsComponent
  },
  {
    path: 'song/create',
    component: CreateSongComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongRoutingModule { }
