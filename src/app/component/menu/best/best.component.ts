import { Component, OnInit } from '@angular/core';
import {ITopRated} from "../../../model/ITopRated";
import {MovieDataServiceService} from "../../../service/movie-data-service.service";
import {ITopRatedPage} from "../../../model/ITopRatedPage";

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.css']
})

export class BestComponent implements OnInit {
  topRated$ : ITopRated[] = [];
  topRatedImageBasePath : string = 'http://image.tmdb.org/t/p/w200/';
  displayMode: number = 1;

  constructor(private movieDataServiceService: MovieDataServiceService) { }

  ngOnInit() {
    return this.movieDataServiceService.getTopRatedPage()
      .subscribe((data:ITopRatedPage) =>
      {
        this.topRated$ = data.results;
      });
  }

  addFavorite(index) {
    if(index >= 0){
      let resultOfIndex = this.topRated$[index];
      console.log(resultOfIndex);
      // ToDo: call method to add it to the database in the favorite table with the variable "resultOfIndex"
      alert('"' + resultOfIndex.title +'"' + " wurde in die Favoriten aufgenommen ");
    }
    else{
      alert("Der Film konnte nicht in die Favoriten gespeichert werden.");
    }
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }
}
