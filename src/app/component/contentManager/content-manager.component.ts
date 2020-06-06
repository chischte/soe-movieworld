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
  movie: IMovie[] = [];
  movieFiltered: IMovie[] = [];
  movieTemp: IMovie[] = [];
  displayMode = 1;
  allGenres: [{ id: number; name: string }];
  topRatedImageBasePath = 'http://image.tmdb.org/t/p/w200/';

  @Input() Movies: Array<IMovie>;

  constructor(private movieDataServiceService: MovieDataServiceService, private movieFavoriteService: MovieFavoriteService) {}

  ngOnInit() {
    this.getAllGenresFromTMDB();
  }

  ngOnChanges() {
    this.movieFiltered = this.Movies;
  }

  addFavorite(index) {
    if (index >= 0) {
      const resultOfIndex = this.movieFiltered[index];

      const favorite = {movieName: resultOfIndex.title, additionalNotes: resultOfIndex.release_date};
      this.movieFavoriteService.insertFavorite(favorite)
        .subscribe((response: any) => {});

      alert('"' + resultOfIndex.title + '"' + ' wurde in die Favoriten aufgenommen ');
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
    this.movie.forEach(function(movie) {
      if (movie.genre_ids.includes(id)) {
        this.movieTemp.push(movie);
      }
    }.bind(this));
    this.movieFiltered = this.movieTemp;
  }

  toggleGenre(genre: IGenre) {
    console.log('toggled ');
  }
}
