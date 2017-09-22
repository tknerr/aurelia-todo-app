import { TodoService } from './todo-service';
import { autoinject } from 'aurelia-framework';

@autoinject()
export class Add {
  constructor(
    private todoService: TodoService
  ) { }
}