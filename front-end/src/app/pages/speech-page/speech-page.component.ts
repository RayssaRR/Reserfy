import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextToSpeechComponent } from '../../components/text-to-speech/text-to-speech.component';

@Component({
  selector: 'app-speech-page',
  standalone: true,
  imports: [
    CommonModule, 
    TextToSpeechComponent
  ],
  template: `
    <div class="page-container">
      <h1>Recurso de Acessibilidade (Leitura de Voz)</h1>
      <p class="subtitle">Teste o motor de síntese de voz do seu navegador.</p>
      
      <app-text-to-speech></app-text-to-speech>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 30px;
      max-width: 900px;
      margin: 0 auto;
    }
    h1 {
      font-size: 1.8em;
      color: #3f51b5;
      margin-bottom: 5px;
    }
    .subtitle {
      color: #666;
      margin-bottom: 20px;
      border-bottom: 1px solid #eee;
      padding-bottom: 15px;
    }
  `]
})
export class SpeechPageComponent {}
