import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

// Importação da Biblioteca
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-qr-scanner',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ZXingScannerModule // Adicione o módulo aqui
  ],
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss']
})
export class QrScannerComponent {

  scannerEnabled = false;
  qrResultString: string = '';
  availableDevices: MediaDeviceInfo[] = [];
  selectedDevice: MediaDeviceInfo | undefined;

  handleQrCodeResult(resultString: string) {
    console.log('Código lido:', resultString);
    this.qrResultString = resultString;
    this.scannerEnabled = false;
  }

  onCamerasFound(devices: MediaDeviceInfo[]) {
    this.availableDevices = devices;
    if (this.availableDevices.length > 0) {
      const videoDevices = devices.filter(d => d.kind === 'videoinput');
      this.selectedDevice = videoDevices.find(d => d.label.toLowerCase().includes('back')) || videoDevices[0];
      this.scannerEnabled = true; // Inicia automaticamente
    } else {
        alert('Nenhuma câmera encontrada no dispositivo.');
    }
  }
  
  toggleScanner() {
    this.scannerEnabled = !this.scannerEnabled;
    this.qrResultString = '';
  }
}
