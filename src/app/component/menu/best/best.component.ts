import { Component, OnInit } from '@angular/core';
import {MovieDataServiceService} from '../../../service/movie-data-service.service';
import {MovieFavoriteService} from '../../../service/movie-favorite.service';
import {IPopular} from '../../../model/IPopular';
import {IPopularPage} from '../../../model/IPopularPage';
import {IMoviePage} from '../../../model/IMoviePage';
import {IMovie} from "../../../model/IMovie";

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.css']
})

export class BestComponent implements OnInit {

  topRated$: IMovie[] = [];
  topRatedImageBasePath = 'http://image.tmdb.org/t/p/w200/';
  displayMode = 1;

  constructor(private movieDataServiceService: MovieDataServiceService, private movieFavoriteService : MovieFavoriteService) {
  }

  ngOnInit() {
    return this.movieDataServiceService.getTopRatedPage()
      .subscribe((data: IMoviePage) => {
        this.topRated$ = data.results;
      });

  }

  addFavorite(index) {
    if (index >= 0) {
      let resultOfIndex = this.topRated$[index];

      const favorite = {movieName: resultOfIndex.title, additionalNotes: resultOfIndex.release_date};
      console.log(favorite);
      this.movieFavoriteService.insertFavorite(favorite)
        .subscribe((response: any) => {});

      alert('"' + resultOfIndex.title + '"' + ' wurde in die Favoriten aufgenommen');
    } else {
      alert('Der Film konnte nicht in die Favoriten gespeichert werden.');
    }
  }
}
