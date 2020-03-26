import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from "../../../service/movie-search.service";
import {ISearchMoviePage} from "../../../model/ISearchMoviePage";
import {ISearchMovie} from "../../../model/ISearchMovie";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private searchedMovie: [ISearchMovie];

  constructor(private movieSearchService: MovieSearchService) { }

  ngOnInit() {
    return this.movieSearchService.getSearchedMovie()
      .subscribe((data:ISearchMoviePage) =>
      {
        this.searchedMovie = data.results;
        console.log(Object.values(data.results));
      });
  }

}
