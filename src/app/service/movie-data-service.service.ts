import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IGenre} from '../model/IGenre';
import {IMoviePage} from '../model/IMoviePage';
import {ServiceHelper} from '../serviceHelper/service-helper';
import {IPopularPage} from '../model/IPopularPage';

@Injectable({
  providedIn: 'root'
})

export class MovieDataServiceService {
  serviceHelper: ServiceHelper = new ServiceHelper();
  language = '&language=en-US';
  page = '&page=1';

  constructor(private httpClient: HttpClient) {
  }

  getGenre() {
    const firstPath = 'genre/movie/list?';
    const genre: string = this.serviceHelper.createUrlPath(firstPath, '', this.language);
    return this.httpClient.get<IGenre>(genre);
  }

  getTopRatedPage() {
    const firstPath = 'movie/top_rated?';
    const topRated: string = this.serviceHelper.createUrlPath(firstPath, '', this.language, this.page);
    return this.httpClient.get<IMoviePage>(topRated);
  }

  getPopularPage() {
    const firstPath = 'movie/popular?';
    const afterApiKeyPath = '&sort_by=popularity.desc&include_adult=true&include_video=false';
    const popular: string = this.serviceHelper.createUrlPath(firstPath, '', this.language, this.page, afterApiKeyPath);
    return this.httpClient.get<IPopularPage>(popular);
  }

  getLatest() {
    const firstPath = 'movie/upcoming?';
    const afterApiKeyPath = '&sort_by=popularity.desc&include_adult=true&include_video=false';
    const popular: string = this.serviceHelper.createUrlPath(firstPath, '', this.language, this.page, afterApiKeyPath);
    return this.httpClient.get<IPopularPage>(popular);
  }
}
