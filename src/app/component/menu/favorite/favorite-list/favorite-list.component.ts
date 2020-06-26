import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IFavorite} from "../../../../model/IFavorite";
import {MovieFavoriteService} from "../../../../service/movie-favorite.service";

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

  constructor(private movieFavoriteService: MovieFavoriteService) {
  }

  @Input() favoriteListArray: Array<IFavorite>;
  @Output() updateFavoriteList: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
  }

  deleteFavourite(index: number): void {
    this.movieFavoriteService.deleteFavorite(this.favoriteListArray[index])
      .subscribe((response: any) => {
        this.updateFavoriteList.emit();
      });
  }
}
