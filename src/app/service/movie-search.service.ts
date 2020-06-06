import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {ServiceHelper} from '../serviceHelper/service-helper';
import {IMoviePage} from '../model/IMoviePage';

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

  constructor(private httpClient: HttpClient) { }

  getSearchedMovie(searchInputField: string) {
    const firstPath: string = 'search/movie?';
    // tslint:disable-next-line:max-line-length
    const searchPath: string = this.serviceHelper.createUrlSearchPath(firstPath, '' , this.language, this.page, this.pageQuery + searchInputField, this.includeAdult );
    return this.httpClient.get<IMoviePage>(searchPath);
  }
}
