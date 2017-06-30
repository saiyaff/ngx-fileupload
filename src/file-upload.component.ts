import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: [ './file-upload.component.css' ]
})

export class FileUpload {
  status: string;

  @Input() allowedTypes: any;
  @Input() allowedSize: number; // MB
  @Input() multiple: boolean;

  @Output() onUploadFiles = new EventEmitter<any>();

  constructor() {
    this.reset();
  }

  ngOnInit() {
    this.allowedTypes = (this.allowedTypes && Array.isArray(this.allowedTypes)) ? this.allowedTypes : [];
    this.multiple = (this.multiple) ? this.multiple : false ;
  }

  onDragEnter(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();

    this.status = evt.type;
  }

  onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();

    this.status = evt.type;
  }

  onSelectFiles(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();

    this.status = evt.type;

    // Fetch files
    const files = evt.target.files;

    this.uploadFiles(files);
  }

  onDrop(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();

    this.status = evt.type;

    // Fetch files
    const files = evt.dataTransfer.files;

    this.uploadFiles(files);
  }

  uploadFiles(files: any) {
    let error = false;
    const errorMessages = [];

    const data = {
      error: null,
      files: files
    };

    if (this.allowedTypes.length > 0) {
      for (let i=0; i<files.length; i++) {
        const file = files[i];

        // Validate file type
        if (!this.allowedTypes.includes(file.type)) {
          error = true;
          errorMessages.push('Invalid file type(s)');
        }

        // Validate fileSize
        if (this.allowedSize && this.allowedSize > 0) {
          if ((file.size) / 1048576 > this.allowedSize) {
            error = true;
            errorMessages.push('Invalid file size(s)');
          }
        }
      }
    }

    if (error) {
      data.error = errorMessages;
      data.files = null;
    }

    this.onUploadFiles.emit(data);
    this.reset();
  }

  reset() {
    this.status = 'ready';
  }
};
