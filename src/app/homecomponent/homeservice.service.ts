import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HomeserviceService {
  url =
    'https://api.themoviedb.org/3/movie/now_playing?api_key=238e86869a4e9b7e779f44b1bdfc4900';

  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get(this.url);
  }
}
