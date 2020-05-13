import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IGenre} from "../model/IGenre";
import {ITopRatedPage} from "../model/ITopRatedPage";
import {ServiceHelper} from "../serviceHelper/service-helper";

@Injectable({
  providedIn: 'root'
})

export class MovieDataServiceService {
  serviceHelper:ServiceHelper = new ServiceHelper();
  language:string = "&language=en-US";

  constructor(private httpClient: HttpClient) { }

  getGenre(){
    let firstPath:string = "genre/movie/list?";
    let genreUrl:string = this.serviceHelper.createUrlPath(firstPath, "", this.language);
    return this.httpClient.get<IGenre[]>(genreUrl);
  }

  getTopRatedPage(){
    let firstPath:string  = "movie/top_rated?";
    let page:string = "&page=1";
    let topRated:string = this.serviceHelper.createUrlPath(firstPath, "", this.language, page);
    return this.httpClient.get<ITopRatedPage>(topRated);
  }

  getPopularPage(){
    let firstPath:string  = "movie/top_rated?";
    let page:string = "&page=1";
    let topRated:string = this.serviceHelper.createUrlPath(firstPath, "", this.language, page);
    return this.httpClient.get<ITopRatedPage>(topRated);
  }

}
