import { Component, OnInit } from '@angular/core';
import {IMovie} from '../../../model/IMovie';
import {MovieDataService} from '../../../service/movie-data.service';
import {IMoviePage} from '../../../model/IMoviePage';
import {IFavorite} from '../../../model/IFavorite';
import {MovieFavoriteService} from '../../../service/movie-favorite.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {
  movies: Array<IMovie>;
  favoriteListArray: Array<IFavorite> = [];

  constructor(private movieDataService: MovieDataService, private movieFavoriteService: MovieFavoriteService) { }

  ngOnInit(): void {
    this.getTopRated();
    this.getFavoriteList();
  }

  getTopRated(){
    return this.movieDataService.getTopRatedPage()
      .subscribe((data: IMoviePage) => {
        this.movies = data.results;
      });
  }

  getFavoriteList() {
    this.movieFavoriteService.getFavorite()
      .subscribe((data: Array<IFavorite>) => {
        this.favoriteListArray = data;
        console.log('Das sind die Daten von dem Server' + data);
      });
  }


}
