import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FileUploadModule } from './file-upload/index';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
