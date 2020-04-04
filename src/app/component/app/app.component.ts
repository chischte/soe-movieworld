import {Component, OnInit} from '@angular/core';
import {MovieSearchService} from "../../service/movie-search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Movie World';

  public searchTerm$: string = "";
  isSearchLandingPageViewable: boolean;

  constructor(private movieSearchService : MovieSearchService) {  }

  ngOnInit() {
    this.movieSearchService.searchTerm.subscribe((newValue: string) =>
    {
      this.isSearchLandingPageViewable = !this.isSearchLandingPageViewable;
      this.searchTerm$ = newValue;
      console.log("this.searchTerm$: " + this.searchTerm$);
    });
  }
}
