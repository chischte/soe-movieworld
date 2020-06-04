import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {ISearchMovie} from '../model/ISearchMovie';
import {ServiceHelper} from '../serviceHelper/service-helper';

@Injectable({
  providedIn: 'root'
})

export class MovieSearchService {
  serviceHelper: ServiceHelper = new ServiceHelper();
  language:string = '&language=en-US';
  page:string = '&page=1';
  pageQuery:string = '&query=';
  includeAdult:string = '&include_adult=false';

  searchMovieUrl: string;
  @Input() searchInputField: string;
  public searchTerm: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private _https: HttpClient) { }

  getSearchedMovie(searchInputField: string) {

    // alert(this.searchTerm);
    const firstPath: string = 'search/movie?';
    // tslint:disable-next-line:max-line-length
    const searchPath: string = this.serviceHelper.createUrlSearchPath(firstPath, '' , this.language, this.page, this.pageQuery + searchInputField, this.includeAdult );

    console.log(searchPath);
    console.log('this.searchTerm.value ' + this.searchTerm.value);
    console.log(this.searchTerm);
    return this._https.get<ISearchMovie[]>(searchPath);
  }
}
