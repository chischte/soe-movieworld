import { Component, OnInit } from '@angular/core';
import {IMoviePage} from '../../model/IMoviePage';
import {IMovie} from '../../model/IMovie';
import {MovieSearchService} from '../../service/movie-search.service';
import {ITopRatedPage} from "../../model/ITopRatedPage";

@Component({
  selector: 'app-searchbar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {
  searchMovieResults: IMovie[] = [];
  searchInputField: string;

  constructor(private movieSearchService: MovieSearchService) { }

  ngOnInit(): void { }

  getTheSearchedMovie() {
    this.movieSearchService.getSearchedMovie(this.searchInputField)
      .subscribe((data: IMoviePage) => {
        this.searchMovieResults = data.results;
      });
  }
}
