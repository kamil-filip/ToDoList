import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfItemsComponent } from './list-of-items/list-of-items.component';
import { ToDoItemsService } from './todo-items.service';

@NgModule({
  declarations: [
    AppComponent,
    ListOfItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ToDoItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
