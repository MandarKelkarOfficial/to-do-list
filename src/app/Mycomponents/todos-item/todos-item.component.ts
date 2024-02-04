import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
// import { TodosComponent } from '../todos/todos.component';

@Component({
  selector: 'app-todos-item',
  standalone: true,
  imports: [FormsModule,NgClass],
  templateUrl: './todos-item.component.html',
  styleUrl: './todos-item.component.css'
})
export class TodosItemComponent {

  @Input()
  todo!: Todo;

  @Output()
  todoDelete : EventEmitter<Todo> = new EventEmitter();
  @Output()
  todoCheckbox : EventEmitter<Todo> = new EventEmitter();
  constructor() {

  }
  onClick(todo : Todo){
    // console.log('onClick triggred');
    this.todoDelete.emit(todo);
  }

  onCheckedboxClick(todo:Todo){
    this.todoCheckbox.emit(todo);
    console.log('onCheckedboxClick triggred');
  }
}
