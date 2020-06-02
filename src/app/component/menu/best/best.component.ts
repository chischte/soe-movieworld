import {Component, OnInit} from '@angular/core';
import {ITopRated} from "../../../model/ITopRated";
import {ITopRatedPage} from "../../../model/ITopRatedPage";
import {IGenre} from "../../../model/IGenre";
import {MovieDataServiceService} from "../../../service/movie-data-service.service";
import {MovieFavoriteService} from "../../../service/movie-favorite.service";

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.css']
})

export class BestComponent implements OnInit {
  topRated$: ITopRated[] = [];
  topRatedImageBasePath: string = 'http://image.tmdb.org/t/p/w200/';
  displayMode: number = 1;
  allGenres: [{ id: number; name: string }];

  constructor(private movieDataServiceService: MovieDataServiceService, private movieFavoriteService : MovieFavoriteService) {
  }

  ngOnInit() {
    this.getAllGenresFromTMDB();

    return this.movieDataServiceService.getTopRatedPage()
      .subscribe((data: ITopRatedPage) => {
        this.topRated$ = data.results;
      });
  }

  addFavorite(index) {
    if (index >= 0) {
      let resultOfIndex = this.topRated$[index];

      const favorite = {movieName: resultOfIndex.title, additionalNotes: resultOfIndex.release_date};
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

  getAllGenresFromTMDB(){
    this.movieDataServiceService.getGenre()
      .subscribe((data: IGenre) => {
        this.allGenres = data.genres;
      }, err=>{
        console.log(err);
      });
  }

  toggleGenre(genre: IGenre) {
    console.log("toggeld ");
  }

  getSelectedGenre(id: number) {
    alert(id);
  }
}
