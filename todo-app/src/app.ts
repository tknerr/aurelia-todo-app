import { RouterConfiguration, Router } from 'aurelia-router';

export class App {
  router = null;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      // welcome page, http://localhost:9000
      { route: '', name: 'Welcome', moduleId: 'welcome' },
      // see http://localhost:9000/#/todo/
      { route: 'todo', name: 'Todos', moduleId: 'todo/index' },
      // see http://localhost:9000/#/todo/add
      { route: 'todo/add', name: 'Add new todo', moduleId: 'todo/add' }
    ]);
  }
}
