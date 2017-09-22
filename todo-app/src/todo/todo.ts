
// describes our Todo domain model
export class Todo {

  // automatically creates private properties with this syntax...
  constructor(
    private description: string,
    private deadline: string,
    private priority: string
  ) { }
}