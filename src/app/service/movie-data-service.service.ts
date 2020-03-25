import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IGenre} from "../component/model/IGenre";
import {ITopRatedPage} from "../component/model/ITopRatedPage";

@Injectable({
  providedIn: 'root'
})
export class MovieDataServiceService {
  baseUrl:string = "https://api.themoviedb.org/3/";
  apiKey:string  = "api_key=9daf07285a3560ae7a1a515899ab5db5";
  language:string = "&language=en-US";
  page:string = "&page=1";

  genreUrl:string = this.baseUrl + "genre/movie/list?" + this.apiKey + this.language;
  topRated:string = this.baseUrl + "movie/top_rated?"  + this.apiKey + this.language + this.page;

  constructor(private _https: HttpClient) { }

  getGenre(){
    return this._https.get<IGenre[]>(this.genreUrl);
  }

  getTopRatedPage(){
    return this._https.get<ITopRatedPage[]>(this.topRated);
  }
}
