import { Component, OnInit } from '@angular/core';
import {IMovie} from '../../../model/IMovie';
import {MovieSearchService} from '../../../service/movie-search.service';
import {IMoviePage} from '../../../model/IMoviePage';
import { ActivatedRoute } from '@angular/router';
import {IGenre} from "../../../model/IGenre";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchedMovieListOutput: Array<IMovie>;

  UrlParameter: string;

  constructor(private activatedRoute: ActivatedRoute, private movieSearchService: MovieSearchService) {
  }

  ngOnInit(): void {
    this.UrlParameter = this.activatedRoute.snapshot.paramMap.get('searchparam');

    this.search(this.UrlParameter);
  }

  search(urlParameter :string){
    this.movieSearchService.getSearchedMovie(urlParameter)
      .subscribe((data: IMoviePage) => {
        this.searchedMovieListOutput = data.results;
      });
  }
}





//
//
// export class SearchBarComponent implements OnInit {
//   searchInputField: string;
//
//   searchedMovieListOutput: Array<IMovie>;
//
//   constructor(private movieSearchService: MovieSearchService) { }
//
//   ngOnInit() {
//   }
//
//   getTheSearchedMovie() {
//     return this.movieSearchService.getSearchedMovie(this.searchInputField)
//       .subscribe((data: IMoviePage) => {
//         this.searchedMovieListOutput = data.results;
//       });
//   }
// }
