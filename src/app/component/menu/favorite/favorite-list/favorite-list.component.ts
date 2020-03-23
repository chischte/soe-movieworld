import {Component, Input, OnInit} from '@angular/core';
import {ITodo} from "../../../model/ITodo";

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

  constructor() {
  }

  @Input() favoriteListArray: Array<ITodo>;

  ngOnInit(): void {
  }

  deleteTodo(msg: ITodo) {
    const index: number = this.favoriteListArray.indexOf(msg);
    if (index !== -1) {
      this.favoriteListArray.splice(index, 1);
    }
  }
}
