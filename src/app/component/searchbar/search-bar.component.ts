import { Component, OnInit } from '@angular/core';
import {ISearchMoviePage} from "../../model/ISearchMoviePage";
import {MovieSearchService} from "../../service/movie-search.service";
import {ISearchMovie} from "../../model/ISearchMovie";

@Component({
  selector: 'app-searchbar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchMoviePage$ : ISearchMovie[] = [];
  searchInputField: string;

  constructor(private movieSearchService: MovieSearchService) { }

  ngOnInit(): void { }

  getSearchedMovie($event: any) {
  //   console.log("SearchBarComponent " + this.searchInputField + " $event--> " + $event);
  //   this.movieSearchService.getSearchedMovie()
  //     .subscribe((data:ISearchMoviePage) =>
  //     {
  //       this.searchMoviePage$ = data.results;
  //       console.log(data.results);
  //     },
  //       error =>
  //       {
  //         console.error("Backend returned code ${{error}} " + error)
  //       });
   }
}
