import {Component, OnInit} from '@angular/core';
import {MovieDataServiceService} from '../../../service/movie-data-service.service';
import {MovieFavoriteService} from '../../../service/movie-favorite.service';
import {IPopular} from '../../../model/IPopular';
import {IPopularPage} from '../../../model/IPopularPage';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  topRated$: IPopular[] = [];
  genre: number;
  topRatedImageBasePath: string = 'http://image.tmdb.org/t/p/w200/';
  displayMode: number = 1;

  constructor(private movieDataServiceService: MovieDataServiceService, private movieFavoriteService : MovieFavoriteService) {
  }

  ngOnInit() {
    return this.movieDataServiceService.getPopularPage()
      .subscribe((data: IPopularPage) => {
        this.topRated$ = data.results;
      });
  }
  addFavorite(index) {
    if (index >= 0) {
      let resultOfIndex = this.topRated$[index];

      const favorite = {movieName: resultOfIndex.title, additionalNotes: resultOfIndex.release_date};
      console.log(favorite);
      this.movieFavoriteService.insertFavorite(favorite)
        .subscribe((response: any) => {})

      alert('"' + resultOfIndex.title + '"' + " wurde in die Favoriten aufgenommen ");
    } else {
      alert("Der Film konnte nicht in die Favoriten gespeichert werden.");
    }
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }

  getGenrePipe(action: string) {
    // TODO: use this.topRated$ variable for the genre pipe do not use the original one because you would overwrite it
    let topGenreRated = this.topRated$;

    console.log("GenreButtonClickWorked");
  }

}
