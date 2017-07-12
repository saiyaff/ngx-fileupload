import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { FileUploadModule } from '@99xt/ng2-fileupload';

@NgModule({
  imports:      [ BrowserModule, FileUploadModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
