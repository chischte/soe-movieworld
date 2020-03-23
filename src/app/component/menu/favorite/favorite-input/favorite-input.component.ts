import {Component, Input, OnInit} from '@angular/core';
import {ITodo} from "../../../model/ITodo";

@Component({
  selector: 'app-favorite-input',
  templateUrl: './favorite-input.component.html',
  styleUrls: ['./favorite-input.component.css']
})
export class FavoriteInputComponent implements OnInit {

  constructor() { }

  @Input() favoriteInputArray : Array<ITodo>;

  firstName: string;
  lastName: string;
  todoField: string;

  addTodo(){
    this.favoriteInputArray.push(
      {
        firstName: this.firstName,
        lastName: this.lastName,
        todoField: this.todoField
      });

    this.firstName = '';
    this.lastName = '';
    this.todoField = '';
  }

  ngOnInit(): void {
  }
}
