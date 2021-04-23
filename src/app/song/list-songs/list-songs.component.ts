import {Component, OnInit} from '@angular/core';
import {ISong} from '../../i-song';
import {SongService} from '../../song.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-list-songs',
  templateUrl: './list-songs.component.html',
  styleUrls: ['./list-songs.component.css']
})
export class ListSongsComponent implements OnInit {
  songs: ISong[] = [];

  constructor(private songService: SongService) {
    this.getAllSongs();
  }

  ngOnInit(): void {
  }

  getAllSongs(): ISong[] {
    this.songService.getAllSongs().subscribe(songs => {
      this.songs = songs;
    });
    return this.songs;
  }

  deleteSong(id: any): any {
    if (confirm('Bạn có thực sự muốn xóa?')) {
      this.songService.deleteSong(id).subscribe(
        next => {
          this.songs = this.getAllSongs();
        },
        error => {
          alert('error');
        }
      );
    }
  }

}
