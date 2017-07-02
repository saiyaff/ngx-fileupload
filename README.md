
# @99xt/ng2-fileupload

[![npm (scoped)](https://img.shields.io/npm/v/@99xt/ng2-fileupload.svg)]()
[![license](https://img.shields.io/github/license/99xt/ng2-fileupload.svg)]()

Simpler file upload implementation for angular2 apps.

## Installation

```
npm install @99xt/ng2-fileupload
```

## Usage

example.module.ts
```
import { FileUpload } from '@99xt/ng2-fileupload';

@NgModule({
  declarations: [
    ExampleComponent,
    FileUpload
  ],
})
```

example.component.ts
```
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
```
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

```
git clone git@github.com:99xt/ng2-fileupload.git
cd ng2-fileupload
npm install
npm run build
```
