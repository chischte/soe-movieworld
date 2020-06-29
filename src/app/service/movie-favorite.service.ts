import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IFavorite} from '../model/IFavorite';

@Injectable({
  providedIn: 'root'
})

export class MovieFavoriteService {

  constructor(private http: HttpClient) {
  }

  baseUrl = 'http://localhost:3000/api';

  public getFavorite(): Observable<Array<IFavorite>> {
    return this.http.get<Array<IFavorite>>(this.baseUrl + '/favourite/favorite');
  }

  public insertFavorite(favorite: { genreId: []; teaserText: string; releaseDate: string; language: string; title: string; additionalNotes: string; movieName: string }): Observable<any> {
    console.log('favorite: ', favorite)
    return this.http.post(this.baseUrl + '/favourite/favorite', favorite);
  }

  public deleteFavorite(favorite: IFavorite): Observable<any> {
    const url = this.baseUrl + '/favourite/favorite/' + favorite._id;
    return this.http.delete(url);
  }
}
