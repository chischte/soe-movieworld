import {Injectable, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ISearchMoviePage} from "../model/ISearchMoviePage";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class MovieSearchService {

  baseUrl:string = "https://api.themoviedb.org/3/";
  apiKey:string  = "api_key=9daf07285a3560ae7a1a515899ab5db5";
  language:string = "&language=en-US";
  page:string = "&page=1";
  searchPath:string = "search/movie?";
  searchMovieUrl:string;
  @Input() searchInputField: string;
  public searchTerm: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private _https: HttpClient) { }

  getSearchedMovie(){
    console.log("searchInputFieldService " + this.searchInputField);
    this.searchMovieUrl = this.baseUrl + this.searchPath + this.apiKey + "&query=" + this.searchTerm.value + this.page;
    return this._https.get<ISearchMoviePage>(this.searchMovieUrl);
  }
}
