import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ITodoItem } from "./todoitem";

@Injectable()
export class ToDoItemsService {

  private todoSubject = new BehaviorSubject<ITodoItem[]>([]);
  private todoItems: ITodoItem[] = [];

  constructor() {
    this.loadSomeInitData();
  }

  loadSomeInitData() {
    this.todoItems = TODOITEMS;
    this.todoSubject.next(this.todoItems);
  }

  getTodoItems(): Observable<ITodoItem[]>
  {
      return this.todoSubject.asObservable();
  }

  addItem(item: ITodoItem) {
    item.id = this.todoItems.length + 1;
    this.todoItems.push(item);
    this.todoSubject.next(Object.assign([], this.todoItems));
  }

  deleteItem(item: ITodoItem) {

    var index = this.todoItems.indexOf(item);
    if (index > -1) {
      this.todoItems.splice(index, 1);
      this.todoSubject.next(Object.assign([], this.todoItems));
    }
  }
}

const TODOITEMS:ITodoItem[] = [
  {id:1, title:'Feed cat'},
  {id:2, title:'Go work'},
  {id:3, title:'Go sleep'}
]
