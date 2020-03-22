import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';

import { HeaderComponent } from './component/navigation/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app/app.component';
import { TodoInputComponent } from './component/favorite/todo-input/todo-input.component';
import { TodoListComponent } from './component/favorite/todo-list/todo-list.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from './component/navigation/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoInputComponent,
    TodoListComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
