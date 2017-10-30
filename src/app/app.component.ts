import { Component } from '@angular/core';

@Component({
  selector: 'fup-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private onUploadFiles(e) {
    console.log(e);
  }
}
