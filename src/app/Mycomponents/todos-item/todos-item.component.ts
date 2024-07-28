import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { NgClass } from '@angular/common';
import { TodosComponent } from '../todos/todos.component';

@Component({
  selector: 'app-todos-item',
  standalone: true,
  imports: [FormsModule, CommonModule], // Add CommonModule to imports
  templateUrl: './todos-item.component.html',
  styleUrl: './todos-item.component.css'
})
export class TodosItemComponent {

  @Input()
  todo!: Todo;

  @Output()
  todoDelete: EventEmitter<Todo> = new EventEmitter();

  @Output()
  todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  // Timer variables and state
  targetTime: number = 0; // Stores the target time in seconds
  isTimerRunning: boolean = false; // Tracks if the timer is currently running
  timerInterval: any; // Reference to the timer interval

  constructor() { }

  onClick(todo : Todo){
    // console.log('onClick triggred');
    this.todoDelete.emit(todo);
  }

  onCheckedboxClick(todo:Todo){
    this.todoCheckbox.emit(todo);
    console.log('onCheckedboxClick triggred');
  }

  setTimer() {
    // Prompt user for target time if not set
    if (!this.targetTime) {
      const targetTimeInput = prompt("Enter target time in seconds:");
      if (targetTimeInput) {
        this.targetTime = parseInt(targetTimeInput); // Ensure valid number input
      } else {
        return; // Exit if user cancels prompt
      }
    }

    // Toggle timer state
    this.isTimerRunning = !this.isTimerRunning;

    // Start or stop the timer based on the state
    if (this.isTimerRunning) {
      // Start the timer
      this.timerInterval = setInterval(() => {
        if (this.targetTime > 0) {
          this.targetTime--;
        } else {
          this.stopTimer();
          // Handle timer completion logic here (e.g., alert, play sound)
          alert("Timer completed!");
          this.isTimerRunning = false;
        }
      }, 1000); // Update timer every second
    } else {
      // Stop the timer
      this.stopTimer();
      this.isTimerRunning = false;
    }
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }
}
