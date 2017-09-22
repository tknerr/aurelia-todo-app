import { TodoService } from './todo-service';
import { autoinject } from 'aurelia-framework';

@autoinject()
export class Index {
  constructor(
    private todoService: TodoService
  ) { }
}