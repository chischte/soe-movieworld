import {Component, OnInit} from '@angular/core';
import {IFavorite} from "../model/IFavorite";
import {MovieDataServiceService} from "../../service/movie-data-service.service";
import {IGenre} from "../model/IGenre";
import {ITopRated} from "../model/ITopRated";
import {ITopRatedPage} from "../model/ITopRatedPage";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Movie World';
  genresTypes$ : IGenre[] = [];
  topRatedPage$: ITopRatedPage[] = [];

  todoListArray : Array<IFavorite> = [];

  testTopRatedPage : Array<ITopRatedPage>;
  topRated$ : Array<ITopRated>;

  constructor(private movieDataServiceService: MovieDataServiceService) {  }

  ngOnInit() {

    //return this.movieDataServiceService.getTopRatedPage().subscribe(data => { this.topRatedPage$ = Object.values(data); console.log(Object.values(data)); });
    // return this.movieDataServiceService.getGenre().subscribe(data => { this.genresTypes$ = Object.values(data); console.log(Object.values(data)); });
  }

  async getTopRated() {
    this.topRated$ = await this.getTopRatedRequestArray();
    console.log('this.handle output: ', this.topRated$);

  }

  async getTopRatedRequestArray(){
    let ret = await this.movieDataServiceService.getTopRatedPage().toPromise();

    return ret["results"];
  }
}
