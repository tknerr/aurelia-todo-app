import { Todo } from './todo';

// a service / singleton to keep our TODOs
export class TodoService {
    todos: Array<Todo> = [];

    constructor() {
    }
}