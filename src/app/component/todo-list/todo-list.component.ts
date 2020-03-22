import {Component, Input, OnInit} from '@angular/core';
import {ITodo} from "../model/ITodo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  constructor() {
  }

  @Input() todoListArray: Array<ITodo>;

  ngOnInit(): void {
  }

  deleteTodo(msg: ITodo) {
    const index: number = this.todoListArray.indexOf(msg);
    if (index !== -1) {
      this.todoListArray.splice(index, 1);
    }
  }
}
