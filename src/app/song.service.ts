import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ISong} from './i-song';
import {environment} from '../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpClient: HttpClient) { }

  getAllSongs(): Observable<ISong[]> {
    return this.httpClient.get<ISong[]>(API_URL + '/songs');
  }

  createSong(song: ISong): Observable<ISong> {
    return this.httpClient.post<ISong>(API_URL + '/create-song', song);
  }

  getSongById(id: number): Observable<ISong> {
    return this.httpClient.get<ISong>(API_URL + '/song/' + id);
  }

  updateSong(id: number, song: ISong): Observable<ISong> {
    return this.httpClient.put<ISong>(API_URL + '/edit-song/' + id, song);
  }

  deleteSong(id: number): Observable<ISong> {
    return this.httpClient.delete<ISong>(API_URL + '/delete-song/' + id);
  }

}
