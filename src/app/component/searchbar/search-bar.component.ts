import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IMoviePage} from '../../model/IMoviePage';
import {IMovie} from '../../model/IMovie';
import {MovieSearchService} from '../../service/movie-search.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {
  searchInputField: string;
  @Output() searchedMovieListOutput = new EventEmitter<IMovie[]>();

  constructor(private movieSearchService: MovieSearchService) { }

  ngOnInit() {
  }

  getTheSearchedMovie() {
    return this.movieSearchService.getSearchedMovie(this.searchInputField)
      .subscribe((data: IMoviePage) => {
        this.searchedMovieListOutput.emit(data.results);
      });
  }
}
