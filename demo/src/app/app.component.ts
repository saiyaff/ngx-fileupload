import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  allowedTypes: any;
  allowedSize: number;
  multiple: boolean;

  files: any;

  name = 'Angular';

  constructor() {
    this.allowedTypes = [];
    this.allowedSize = 15; // MB
    this.multiple = true;
  }

  onUploadFiles(evt: any) {
    if (evt.error) {
        throw evt.error;
    }

    const files = evt.files;
    // You can run upload script here
    console.log(files);
  }
}
