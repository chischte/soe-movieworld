import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IFavorite} from "../../../../model/IFavorite";
import {MovieFavoriteService} from "../../../../service/movie-favorite.service";

@Component({
  selector: 'app-favorite-input',
  templateUrl: './favorite-input.component.html',
  styleUrls: ['./favorite-input.component.css']
})
export class FavoriteInputComponent implements OnInit {

  constructor(private movieFavoriteService: MovieFavoriteService) {
  }

  movieName: string;
  additionalNotes: string;
  @Input() favoriteInputArray: Array<IFavorite>;
  @Output() updateFavoriteList: EventEmitter<void> = new EventEmitter<void>();

  addFavorite() {
    if (this.movieName != '') {
      const favorite = {movieName: this.movieName, additionalNotes: this.additionalNotes};
      this.movieFavoriteService.insertFavorite(favorite)
        .subscribe((response: any) => {
          this.movieName = '';
          this.additionalNotes = '';
          this.updateFavoriteList.emit();
        });
      alert("Gugus");
    } else {
      alert('Damit ein Film gespeichert werden kann, musst du diesem einen Namen geben');
    }

    this.movieName = '';
    this.additionalNotes = '';
  }

  ngOnInit(): void {
  }
}
