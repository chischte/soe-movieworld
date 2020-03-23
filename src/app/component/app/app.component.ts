import {Component} from '@angular/core';
import {IFavorite} from "../model/IFavorite";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieWorld';

  todoListArray : Array<IFavorite> = [];
}
