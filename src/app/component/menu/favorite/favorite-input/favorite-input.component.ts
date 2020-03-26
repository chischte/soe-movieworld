import {Component, Input, OnInit} from '@angular/core';
import {IFavorite} from "../../../../model/IFavorite";

@Component({
  selector: 'app-favorite-input',
  templateUrl: './favorite-input.component.html',
  styleUrls: ['./favorite-input.component.css']
})
export class FavoriteInputComponent implements OnInit {

  constructor() { }

  @Input() favoriteInputArray : Array<IFavorite>;

  movieName: string;
  additionalNotes: string;

  addFavorite(){
    if(this.movieName !='') {
      this.favoriteInputArray.push(
        {
          movieName: this.movieName,
          additionalNotes: this.additionalNotes,
        });
    }
    else{
      alert('Damit ein Film gespeichert werden kann, musst du diesem einen Namen geben');
    }

    this.movieName = '';
    this.additionalNotes = '';
  }

  ngOnInit(): void {
  }
}
