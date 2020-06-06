import { Component, OnInit } from '@angular/core';
import {IMovie} from '../../../model/IMovie';
import {MovieSearchService} from '../../../service/movie-search.service';
import {IMoviePage} from '../../../model/IMoviePage';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchedMovieListOutput: Array<IMovie>;

  UrlParameter: string;

  constructor(private Activatedroute: ActivatedRoute, private movieSearchService: MovieSearchService) {
  }

  ngOnInit(): void {
    this.UrlParameter = this.Activatedroute.snapshot.paramMap.get('blub');
    console.log("Url parm");
    console.log(this.UrlParameter);

    this.movieSearchService.getSearchedMovie(this.UrlParameter)
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
