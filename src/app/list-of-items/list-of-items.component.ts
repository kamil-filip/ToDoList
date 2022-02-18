import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { ToDoItemsService } from '../todo-items.service';
import { ITodoItem } from '../todoitem';

@Component({
  selector: 'list-of-items',
  template: `

    <form [formGroup]="todoForm" (submit)="onSubmit()" >
        <input type="text" id="title" name="title" formControlName="title" required/>
        <button type="submit" [disabled]="todoForm.invalid">Add Item</button>
    </form>

    <hr/>

    <div *ngFor="let todo of todoItems | async" >
        {{ todo.title }}
        <button (click)="OnChange(todo)">Checked</button>
    </div>
  `,
  styles: []
})
export class ListOfItemsComponent implements OnInit {
  todoItems!: Observable<ITodoItem[]>;

  todoForm: FormGroup;
  title: FormControl = new FormControl('', Validators.required);

  constructor(private todoItemsService: ToDoItemsService) {
    this.todoForm = new FormGroup({
      title: this.title,
    });
  }

  ngOnInit() {
    this.todoItems= this.todoItemsService.getTodoItems();
  }

  OnChange(todoItem: ITodoItem){
    this.todoItemsService.deleteItem(todoItem);
  }

  onSubmit() {
    this.todoItemsService.addItem(this.todoForm.value);
  }
}
