import {Component, Input, OnInit} from '@angular/core';
import {ISearchMovie} from "../../../model/ISearchMovie";

@Component({
  selector: 'app-search-landing-page',
  templateUrl: './search-landing-page.component.html',
  styleUrls: ['./search-landing-page.component.css']
})

export class SearchLandingPageComponent implements OnInit {
  searchMoviePage$ : ISearchMovie[] = [];
  imageBasePath : string = 'http://image.tmdb.org/t/p/w200/';

  @Input() searchInput : string;

  constructor() { }

  ngOnInit() { }
}
