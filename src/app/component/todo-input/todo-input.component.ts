import {Component, Input, OnInit} from '@angular/core';
import {ITodo} from "../model/ITodo";

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})

export class TodoInputComponent implements OnInit {

  constructor() { }

  @Input() todoInputArray : Array<ITodo>;

  firstName: string;
  lastName: string;
  todoField: string;

  addTodo(){
    this.todoInputArray.push(
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
