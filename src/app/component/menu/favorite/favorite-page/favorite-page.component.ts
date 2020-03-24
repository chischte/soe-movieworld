import { Component, OnInit } from '@angular/core';
import {IFavorite} from "../../../model/IFavorite";

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit {
  favoriteListArray : Array<IFavorite> = [];

  constructor() { }

  ngOnInit(): void {
  }
}
