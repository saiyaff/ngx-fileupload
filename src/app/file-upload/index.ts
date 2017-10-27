import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FileUploadComponent
  ],
  exports: [
    FileUploadComponent
  ],
  providers: [
    /** Don't add any service here
     * If you need singleton services, you should modify your library module like so in the below commented code */
  ]
})
export class FileUploadModule {
  //   static forRoot() {
  //     return {
  //       ngModule: FileUploadModule,
  //       providers: [ SomeService ]
  //     }
  //   }
  /**
   * And change the import of this module in the app.module as FileUploadModule.forRoot()
   */
}
