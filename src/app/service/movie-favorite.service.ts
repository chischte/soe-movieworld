import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {IFavorite} from "../model/IFavorite";

@Injectable({
  providedIn: 'root'
})

export class MovieFavoriteService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000';

  public getFavorite(): Observable<Array<IFavorite>> {
    return this.http.get<Array<IFavorite>>(this.baseUrl + '/favorite');
  }

  public insertFavorite(favorite: IFavorite): Observable<any> {
    console.log("favorite");
    console.log(favorite);
    return this.http.post(this.baseUrl + '/favorite', favorite);
  }

  public deleteFavorite(favorite: IFavorite): Observable<any> {
    const url = this.baseUrl + '/favorite/' + favorite._id;
    return this.http.delete(url);
  }
}
