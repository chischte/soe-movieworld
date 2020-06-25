import { Component, OnInit } from '@angular/core';
import {IFavorite} from '../../../../model/IFavorite';
import {MovieFavoriteService} from '../../../../service/movie-favorite.service';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit {
  favoriteListArray: Array<IFavorite> = [];

  constructor(private movieFavoriteService: MovieFavoriteService) { }

  ngOnInit(): void {
    this.getFavoriteList();
  }

  updateFavoriteList(): void {
    this.getFavoriteList();
  }

  getFavoriteList() {
    this.movieFavoriteService.getFavorite()
      .subscribe((data: Array<IFavorite>) => {
        this.favoriteListArray = data;
        console.log('Das sind die Daten von dem Server' + data);
      });
  }
}
