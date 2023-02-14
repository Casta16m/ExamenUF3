import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MuseumApiService {

  constructor(private http: HttpClient) { }

  getQuadres(): Observable<any> {
    return this.http.get('https://api.artic.edu/api/v1/artworks');
  }

  getPagination(): Observable<any> {
    return this.http.get('https://api.artic.edu/api/v1/artworks?page=1&limit=15');
  }


}
