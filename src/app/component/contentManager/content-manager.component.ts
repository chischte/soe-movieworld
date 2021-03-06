import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {IMovie} from '../../model/IMovie';
import {MovieDataService} from '../../service/movie-data.service';
import {MovieFavoriteService} from '../../service/movie-favorite.service';
import {IGenre} from '../../model/IGenre';
import {AuthService} from '../../service/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-content-manager',
  templateUrl: './content-manager.component.html',
  styleUrls: ['./content-manager.component.css']
})

export class ContentManagerComponent implements OnInit, OnChanges, OnDestroy {
  filteredMovies: IMovie[] = [];
  movieTemp: IMovie[] = [];
  displayMode = 1;
  allGenres: [{ id: number; name: string }];
  topRatedImageBasePath = 'http://image.tmdb.org/t/p/w200/';
  userIsAuthenticated = false;
  private authStatusSub: Subscription;


  @Input() movies: Array<IMovie>;

  // tslint:disable-next-line:max-line-length
  constructor(private movieDataService: MovieDataService, private movieFavoriteService: MovieFavoriteService, private authService: AuthService) {
  }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    console.log('%cMade with %c\u2764 %cin Switzerland.', 'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; color: black; font-size: 14px;', 'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; color: red; font-size: 14px;', 'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; color: black; font-size: 14px;');
    this.getAllGenresFromTMDB();

    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  ngOnChanges() {
    this.filteredMovies = this.movies;
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

  addFavorite(index) {
    if (index >= 0) {
      const resultOfIndex = this.filteredMovies[index];
      let stringBuilder = '<table><tr><td>Release date:</td><td>' + resultOfIndex.release_date + '</td></tr>';
      stringBuilder += '<tr><td>Original title:</td><td>' + resultOfIndex.original_title + '</td></tr>';
      stringBuilder += '<tr><td>Original language:</td><td>' + resultOfIndex.original_language + '</td></tr>';
      stringBuilder += '<td>Teaser text:</td><td>' + resultOfIndex.overview + '</td></tr></table>';
      const favorite = {
        movieName: resultOfIndex.title,
        releaseDate: resultOfIndex.release_date,
        genreId: resultOfIndex.genre_ids,
        title: resultOfIndex.original_title,
        language: resultOfIndex.original_language,
        teaserText: resultOfIndex.overview,
        additionalNotes: stringBuilder
      };
      this.movieFavoriteService.insertFavorite(favorite)
        .subscribe((response: any) => {
        });

      alert('"' + resultOfIndex.title + '"' + ' wurde in die Favoriten aufgenommen.');
    } else {
      alert('Der Film konnte nicht in die Favoriten gespeichert werden.');
    }
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }

  getAllGenresFromTMDB() {
    this.movieDataService.getGenre()
      .subscribe((data: IGenre) => {
        this.allGenres = data.genres;
      });
  }

  getSelectedGenre(id: number) {
    this.movieTemp = [];
    this.movies.forEach(function (movie) {
      if (movie.genre_ids.includes(id)) {
        this.movieTemp.push(movie);
      }
    }.bind(this));
    this.filteredMovies = this.movieTemp;
  }
}
