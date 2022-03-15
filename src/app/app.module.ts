import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component';
import { HeaderComponent } from './components/header/header.component';
import { ToDoFormComponent } from './components/to-do-form/to-do-form.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';

@NgModule({
	declarations: [
		AppComponent,
		ToDoItemComponent,
		HeaderComponent,
		ToDoFormComponent,
  AddTodoComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
