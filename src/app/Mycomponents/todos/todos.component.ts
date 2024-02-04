import { Component, Injector, PLATFORM_ID } from '@angular/core';
import { Todo } from '../../Todo';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { TodosItemComponent } from '../todos-item/todos-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodosItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  todos: Todo[] = [];

  constructor(private injector: Injector) {
    if (isPlatformBrowser(this.injector.get(PLATFORM_ID))) { // Access platformId correctly
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        try {
          this.todos = JSON.parse(storedTodos) as Todo[];
        } catch (error) {
          console.error('Error parsing local storage todos:', error);
        }
      }
    }
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    if (isPlatformBrowser(this.injector.get(PLATFORM_ID))) { // Access platformId correctly
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    if (isPlatformBrowser(this.injector.get(PLATFORM_ID))) { // Access platformId correctly
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    if (isPlatformBrowser(this.injector.get(PLATFORM_ID))) { // Access platformId correctly
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
}
