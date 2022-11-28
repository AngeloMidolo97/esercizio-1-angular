import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  array!: Todo[]

  constructor() { }

  ngOnInit(): void {
    let res = fetch('http://localhost:3000/todo').then((res) => res.json())
      .then((data: Todo[]) => {
        console.log(data);
        this.array = data
        this.completeAll()
        console.log(this.array);
      })
  }

  completeAll(){
    this.array = this.array.map(todo => {
      return {...todo,completed : true}
    })
  }
}
