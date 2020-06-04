import { Component, OnInit } from '@angular/core';
import {ISearchMoviePage} from '../../model/ISearchMoviePage';
import {MovieSearchService} from '../../service/movie-search.service';
import {ISearchMovie} from '../../model/ISearchMovie';

@Component({
  selector: 'app-searchbar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {
  searchMovieResults: ISearchMovie[] = [];
  searchInputField: string;

  constructor(private movieSearchService: MovieSearchService) { }

  ngOnInit(): void { }

  getSearchedMovie($event: any) {

    // console.log("SearchBarComponent " + this.searchInputField + " $event--> " + $event);
    this.movieSearchService.getSearchedMovie(this.searchInputField)
      .subscribe((data: ISearchMoviePage) => {
        this.searchMovieResults = data.results;
        console.log(data.results);
      });

    console.log(this.searchInputField);
      // ,
      //   error =>
      //   {
      //     console.error("Backend returned code ${{error}} " + error)
      //   });

  }
}
