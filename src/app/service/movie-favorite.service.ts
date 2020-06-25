import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IFavorite} from '../model/IFavorite';

@Injectable({
  providedIn: 'root'
})

export class MovieFavoriteService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/api';

  public getFavorite(): Observable<Array<IFavorite>> {
    return this.http.get<Array<IFavorite>>(this.baseUrl + '/favourite/favorite');
  }

  public insertFavorite(favorite: IFavorite): Observable<any> {
    return this.http.post(this.baseUrl + '/favourite/favorite', favorite);
  }

  public deleteFavorite(favorite: IFavorite): Observable<any> {
    const url = this.baseUrl + '/favourite/favorite/' + favorite._id;
    return this.http.delete(url);
  }
}
