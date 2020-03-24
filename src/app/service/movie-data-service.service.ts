import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IGenre} from "../component/model/IGenre";
import {ITopRated} from "../component/model/ITopRated";

@Injectable({
  providedIn: 'root'
})
export class MovieDataServiceService {

  apiKey:string  = "api_key=9daf07285a3560ae7a1a515899ab5db5";
  language:string = "&language=en-US";
  page:string = "&page=1";
  genreUrl:string = "https://api.themoviedb.org/3/genre/movie/list?" + this.apiKey;
  topRated:string = "https://api.themoviedb.org/3/movie/top_rated?"  + this.apiKey + this.language + this.page;

  constructor(private _https: HttpClient) { }


  getGenre(){
    return this._https.get<IGenre[]>(this.genreUrl);
  }

  getTopRated(){
    return this._https.get<ITopRated[]>(this.topRated);
  }
}
