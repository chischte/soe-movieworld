import {Component} from '@angular/core';
import {ITodo} from "../model/ITodo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieWorld';

  todoListArray : Array<ITodo> = [];
}
