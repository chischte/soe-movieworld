import {Component, Input, OnInit} from '@angular/core';
import {IFavorite} from "../../../../model/IFavorite";

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

  constructor() {}

  @Input() favoriteListArray: Array<IFavorite>;

  ngOnInit(): void {
  }

  deleteFavorite(msg: IFavorite) {
    const index: number = this.favoriteListArray.indexOf(msg);
    if (index !== -1) {
      this.favoriteListArray.splice(index, 1);
    }
  }
}
