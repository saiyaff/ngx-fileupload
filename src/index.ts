import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUpload } from './file-upload.component';

export * from './file-upload.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FileUpload
  ],
  exports: [
    FileUpload
  ]
})
export class FileUploadModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FileUploadModule,
      providers: []
    };
  }
}
