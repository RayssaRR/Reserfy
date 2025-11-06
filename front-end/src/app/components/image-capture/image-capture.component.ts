import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-image-capture',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './image-capture.component.html',
  styleUrls: ['./image-capture.component.scss']
})
export class ImageCaptureComponent {
  
  selectedFile: File | null = null;
  imagePreviewUrl: string | ArrayBuffer | null = null;
  uploading: boolean = false;

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreviewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  uploadImage(): void {
    if (!this.selectedFile) {
      alert('Por favor, selecione um arquivo de imagem.');
      return;
    }

    this.uploading = true;

    const formData = new FormData();
    formData.append('imageFile', this.selectedFile, this.selectedFile.name);

    setTimeout(() => {
      this.uploading = false;
      alert(`Upload simulado de '${this.selectedFile!.name}' concluído!`);
      this.resetForm();
    }, 1500);
  }

  resetForm(): void {
    this.selectedFile = null;
    this.imagePreviewUrl = null;
    this.uploading = false;
  }
}
