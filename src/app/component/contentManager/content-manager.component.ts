import { Component, Input, OnChanges, OnInit} from '@angular/core';
import {IMovie} from '../../model/IMovie';
import {MovieDataServiceService} from '../../service/movie-data-service.service';
import {MovieFavoriteService} from '../../service/movie-favorite.service';
import {IGenre} from '../../model/IGenre';

@Component({
  selector: 'app-content-manager',
  templateUrl: './content-manager.component.html',
  styleUrls: ['./content-manager.component.css']
})

export class ContentManagerComponent implements OnInit, OnChanges {
  movieFiltered: IMovie[] = [];
  movieTemp: IMovie[] = [];
  displayMode = 1;
  allGenres: [{ id: number; name: string }];
  topRatedImageBasePath = 'http://image.tmdb.org/t/p/w200/';

  @Input() Movies: Array<IMovie>;

  constructor(private movieDataServiceService: MovieDataServiceService, private movieFavoriteService: MovieFavoriteService) {}

  ngOnInit() {
    console.log('%cMade with %c\u2764 %cin Switzerland.', 'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; color: black; font-size: 14px;', 'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; color: red; font-size: 14px;', 'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; color: black; font-size: 14px;');
    this.getAllGenresFromTMDB();
  }

  ngOnChanges() {
    this.movieFiltered = this.Movies;
  }

  addFavorite(index) {
    if (index >= 0) {
      const resultOfIndex = this.movieFiltered[index];
      let stringBuilder = '<table><tr><td>Release date:</td><td>' + resultOfIndex.release_date + '</td></tr>';
      stringBuilder += '<tr><td>Original title:</td><td>' + resultOfIndex.original_title + '</td></tr>';
      stringBuilder += '<tr><td>Original language:</td><td>' + resultOfIndex.original_language + '</td></tr>';
      stringBuilder += '<td>Teaser text:</td><td>' + resultOfIndex.overview + '</td></tr></table>';
      const favorite = {movieName: resultOfIndex.title, additionalNotes: stringBuilder};
      this.movieFavoriteService.insertFavorite(favorite)
        .subscribe((response: any) => {});

      alert('"' + resultOfIndex.title + '"' + ' wurde in die Favoriten aufgenommen.');
    } else {
      alert('Der Film konnte nicht in die Favoriten gespeichert werden.');
    }
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }

  getAllGenresFromTMDB() {
    this.movieDataServiceService.getGenre()
      .subscribe((data: IGenre) => {
        this.allGenres = data.genres;
      });
  }

  getSelectedGenre(id: number) {
    this.movieTemp = [];
    this.Movies.forEach(function(movie) {
      if (movie.genre_ids.includes(id)) {
        this.movieTemp.push(movie);
      }
    }.bind(this));
    this.movieFiltered = this.movieTemp;
  }
}
