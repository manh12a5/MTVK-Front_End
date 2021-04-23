import {Component, OnInit} from '@angular/core';
import {ISong} from '../../i-song';
import {SongService} from '../../song.service';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireStorage} from '@angular/fire/storage';
import {Router} from '@angular/router';
import {finalize} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit {

  song: ISong = {
    id: 0,
    nameSong: '',
    description: '',
    fileMp3: '',
    avatar: '',
    author: '',
    singer: '',
    poster: '',
    category: '',
    likes: '',
    comments: '',
  };
  selectedFile: any;
  selectedImage: any = null;
  fb: any;
  downloadURL: Observable<string> | any;

  constructor(private db: AngularFireDatabase,
              private storage: AngularFireStorage,
              private songService: SongService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onFileSelected(event: any): any {
    const file = event.target.files[0];
    const filePath = `RoomsImages/${Date.now()}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${Date.now()}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url: any) => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

  createSong(): any {
    this.songService.createSong(this.song)
      .subscribe(() => {
        this.router.navigate(['/song']);
      });
  }

}
