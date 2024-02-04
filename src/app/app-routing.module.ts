import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './Mycomponents/todos/todos.component';
import { AboutMeComponent } from './Mycomponents/about-me/about-me.component';
// import path from 'path';

export const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'about', component: AboutMeComponent }

];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })

export class AppRoutesModule { }
