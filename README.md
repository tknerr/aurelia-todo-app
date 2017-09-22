
# Aurelia Playground

Playground repository for the aurelia tutorial by @wizzapp 
https://github.com/Zuehlke/aurelia-tutorial

Aurelia docs:
http://aurelia.io/hub.html

# Notes

## First Steps

Create a new aurelia app:

```
au new
```

Name it "todo-app" and accept the defaults.

 * Change into the generated app directory: `cd todo-app`
 * Run `au` to see the available commands in this context
 * Use `au run` to start a server with the app on http://localhost:9000
 * Also try:
    * `au run --watch` to start with live reloading

## Concepts

### Files

* `main.ts` is the main entry point, sets the environment and root module
* `app.ts` is the default modules
* `index.html` is the main page which includes and renders all the app classes and view templates

### Terminology

 * a "module" is a combination of typescript class + html template
 * the templates contain only snippets an

### Useful VS Code Plugins

 * "Typescript Toolbox"
 * "Aurelia"