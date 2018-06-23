# Sandbox Angular 6

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Project Structure
```bash
root
|
|-src
| |
| |-app
|   | # app index page
|   |-index.html
|   | # bootstrap app module
|   |-main.ts
|   | # import projects/modules and bootstrap app component
|   |-app.module.ts
|
|-projects
 |
 |-mi-platform
   |
   |-src
     | # export api for mi-platform
     |-public_api.ts
     |
     |-lib
       | # index for lib module
       |-lib.module.ts
       |
       |-components
       |
       |-services
       |
       |-sass
       |
       |-modules
         |
         |-navigation
         |
         |-layout
         |
         |-...
```


## App CLI

```bash
# Run development server @http://localhost:4200/. The app will automatically reload if you change any of the source files.
ng serve -o

# Generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`
ng generate component component-name

# Build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
ng build

# Running unit tests via [Karma](https://karma-runner.github.io)
ng test

# Running end-to-end tests via [Protractor](http://www.protractortest.org/)
ng e2e

# Further help or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md)
ng help
```
##
