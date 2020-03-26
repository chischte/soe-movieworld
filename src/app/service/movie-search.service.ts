import {Injectable, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ISearchMoviePage} from "../model/ISearchMoviePage";

@Injectable({
  providedIn: 'root'
})

export class MovieSearchService {

  baseUrl:string = "https://api.themoviedb.org/3/";
  apiKey:string  = "api_key=9daf07285a3560ae7a1a515899ab5db5";
  language:string = "&language=en-US";
  page:string = "&page=1";
  searchPath:string = "search/company?";
  @Input() searchQuery:string;
  searchMovieUrl:string = this.baseUrl + this.searchPath + this.apiKey + "&query=" + this.searchQuery + this.page;
  genreUrl:string = this.baseUrl + "genre/movie/list?" + this.apiKey + this.language;

  constructor(private _https: HttpClient) { }

  getSearchedMovie(){
    return this._https.get<ISearchMoviePage>(this.searchMovieUrl);
  }
}
