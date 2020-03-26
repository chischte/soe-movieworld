import {Component, OnInit} from '@angular/core';
import {IFavorite} from "../../model/IFavorite";
import {MovieDataServiceService} from "../../service/movie-data-service.service";
import {IGenre} from "../../model/IGenre";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Movie World';
  genresTypes$ : IGenre[] = [];

  todoListArray : Array<IFavorite> = [];

  constructor(private movieDataServiceService: MovieDataServiceService) {  }

  ngOnInit() {
    // return this.movieDataServiceService.getGenre().subscribe(data => { this.genresTypes$ = Object.values(data); console.log(Object.values(data)); });
  }
}
