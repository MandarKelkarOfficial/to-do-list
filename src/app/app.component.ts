import { AppRoutesModule } from './app-routing.module';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './Mycomponents/todos/todos.component';
import { FormsModule } from '@angular/forms';
import { AboutMeComponent } from './Mycomponents/about-me/about-me.component';

// const routes: Routes = [
//   // Define your routes here, e.g.,
//   { path: '', component: TodosComponent },
//   { path: 'about', component: AboutMeComponent} // Add your "about" component here
// ];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent,CommonModule,FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-list';

}
