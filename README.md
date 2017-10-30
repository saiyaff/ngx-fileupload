# ngx-fileupload

[![npm (scoped)](https://img.shields.io/npm/v/@99xt/ng2-fileupload.svg)](https://www.npmjs.com/package/@99xt/ng2-fileupload)
[![license](https://img.shields.io/github/license/99xt/ng2-fileupload.svg)](https://github.com/99xt/ng2-fileupload/blob/master/LICENSE)

Above npm package details are renamed to be ng2-fileupload to ngx-fileupload with the name change of the npm.
<!-- [![npm (scoped)](https://img.shields.io/npm/v/@99xt/ngx-fileupload.svg)](https://www.npmjs.com/package/@99xt/ngx-fileupload)
[![license](https://img.shields.io/github/license/99xt/ngx-fileupload.svg)](https://github.com/99xt/ngx-fileupload/blob/master/LICENSE) -->

Simpler file upload implementation for angular apps.

## Installation

To install this library, implement the following:

```bash
npm install @99xt/ngx-fileupload --save
```
This is to be updated to ngx-fileupload

## Usage

example.module.ts
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';

// Import the library
import { FileUploadModule } from '@99xt/ngx-fileupload';
/** This is to be updated to ngx-fileupload*/

@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [ ExampleComponent ]
})
export class ExampleModule { }
```

example.component.ts
```typescript
export class ExampleComponent {
  allowedTypes: any;
  allowedSize: number;
  multiple: boolean;

  files: any;
  
  constructor() {
    this.allowedTypes = [ 'text/markdown' ];
    this.allowedSize = 15; // MB
    this.multiple = true;
  }

  onUploadFiles(evt: any) {
    if (evt.error) {
        throw evt.error;
    }

    const files = evt.files;
    // You can run upload script here
  }
}
```

example.component.html
```html
<file-upload
  [allowedTypes]="allowedTypes"
  [allowedSize]="allowedSize"
  [multiple]="multiple"
  (onUploadFiles)="onUploadFiles($event)"
>
</file-upload>
```

## Contributing Guide

### Setting up the Development Environment

Make sure you have the @angular/cli latest version and its [Prerequisites](https://github.com/angular/angular-cli#prerequisites) installed globally.
For more info Check [Angular CLI](https://github.com/angular/angular-cli).

Clone the repository to your workstation

```bash
git clone git@github.com:99xt/ngx-fileupload.git
```

Navigate to the project directory 

```bash
cd ngx-fileupload
```

```bash
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
