import { TodoService } from './todo-service';
import { autoinject } from 'aurelia-framework';

@autoinject()
export class Index {
  message = "Todo List"
  constructor(
    private todoService: TodoService
  ) { }
}