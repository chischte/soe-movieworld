import {Injectable, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {IGenre} from "../model/IGenre";
import {ServiceHelper} from "../serviceHelper/service-helper";

@Injectable({
  providedIn: 'root'
})

export class MovieSearchService {
  serviceHelper:ServiceHelper = new ServiceHelper();
  language:string = "&language=en-US";
  page:string = "&page=1";

  searchMovieUrl:string;
  @Input() searchInputField: string;
  public searchTerm: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private _https: HttpClient) { }

  getSearchedMovie(){
    let firstPath:string = "search/movie?";
    let searchPath:string = this.serviceHelper.createUrlPath(firstPath, "", this.language, this.page, this.searchTerm.value );
    console.log(searchPath);
    console.log("this.searchTerm.value " + this.searchTerm.value);
    console.log(this.searchTerm);
    return this._https.get<IGenre[]>(searchPath);
  }
}
