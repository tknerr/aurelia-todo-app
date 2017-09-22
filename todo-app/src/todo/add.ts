import { TodoService } from './todo-service';
import { Todo } from './todo';
import { autoinject } from 'aurelia-framework';

@autoinject()
export class Add {

  // create an empty todo item which we can bind the form fields to
  // note that the binding is bi-directional, i.e. the values we initialize
  // here will also be shown in the UI
  todo = new Todo('', '', 'Medium')

  constructor(
    private todoService: TodoService
  ) { }

  addTodo() {
    console.log("heck yes, let's add it to the list!")
    this.todoService.todos.push(this.todo)
  }
}