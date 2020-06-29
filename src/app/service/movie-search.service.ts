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
  language: string;
  page: string;
  pageQuery: string;
  includeAdult: string;

  @Input() searchInputField: string;
  public searchTerm: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private httpClient: HttpClient) {
    this.language = '&language=en-US';
    this.page = '&page=1';
    this.pageQuery = '&query=';
    this.includeAdult = '&include_adult=false';
  }

  getSearchedMovie(searchInputField: string) {
    const firstPath: string = 'search/movie?';
    // tslint:disable-next-line:max-line-length
    const searchPath: string = this.serviceHelper.createUrlSearchPath(firstPath, '', this.language, this.page, this.pageQuery + searchInputField, this.includeAdult);
    return this.httpClient.get<IMoviePage>(searchPath);
  }


}
