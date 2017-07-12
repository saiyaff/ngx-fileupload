# @99xt/ng2-fileupload

[![npm (scoped)](https://img.shields.io/npm/v/@99xt/ng2-fileupload.svg)]()
[![license](https://img.shields.io/github/license/99xt/ng2-fileupload.svg)]()

Simpler file upload implementation for angular2 apps.

## Installation

To install this library, run:

```bash
npm install @99xt/ng2-fileupload --save
```

## Usage

example.module.ts
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';

// Import the library
import { FileUploadModule } from '@99xt/ng2-fileupload';

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

### Setting up the development environment

Clone the repository to your workstation

```bash
git clone git@github.com:99xt/ng2-fileupload.git
```

Navigate to the project directory 

```bash
cd ng2-fileupload
```

Install and build the library
> Generate all `*.js`, `*.d.ts` files

```bash
npm install
npm run build
```

You can find the compiled version in the `dist/`

Create a symlink from the `dist` directory to the global `node_modules`

```bash
cd dist
npm link
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

### Run Demo app

```
cd demo
npm start
```

### Publish to NPM

Update the version in both `package.json` and `src/package.json`;

```
npm run build
npm publish dist
```

## License

MIT
