import { RouterConfiguration, Router } from 'aurelia-router';

export class App {
  router = null;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'todo'], name: 'Todos', moduleId: 'todo/index' },
      { route: 'todo/add', name: 'Add new todo', moduleId: 'todo/add' }
    ]);
  }
}
