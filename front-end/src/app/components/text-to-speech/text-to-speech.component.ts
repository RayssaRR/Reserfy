import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { SpeechService } from '../../services/speech.service';

@Component({
  selector: 'app-text-to-speech',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './text-to-speech.component.html',
  styleUrls: ['./text-to-speech.component.scss']
})
export class TextToSpeechComponent implements OnInit {

  sampleText = 'Este é um exemplo da leitura de texto de uma bula ou de um registro de histórico clínico. O áudio é gerado diretamente pelo seu navegador.';
  voices: SpeechSynthesisVoice[] = [];
  selectedVoiceControl = new FormControl('');
  isSpeaking: boolean = false;
  
  constructor(private speechService: SpeechService) { }

  ngOnInit(): void {
    this.loadVoices();

    if (this.voices.length === 0) {
        window.speechSynthesis.onvoiceschanged = () => this.loadVoices();
    }
  }

  loadVoices(): void {
    this.voices = this.speechService.getAvailableVoices().filter(voice => voice.lang.includes('pt'));
    
    if (this.voices.length > 0 && !this.selectedVoiceControl.value) {
      this.selectedVoiceControl.setValue(this.voices[0].name);
    }
  }

  startReading(): void {
    this.isSpeaking = true;
    const voiceName = this.selectedVoiceControl.value || undefined;

    this.speechService.speak(this.sampleText, 'pt-BR', voiceName).subscribe({
      next: () => {
        this.isSpeaking = false;
      },
      error: (err) => {
        console.error(err);
        this.isSpeaking = false;
        alert('Ocorreu um erro durante a leitura.');
      }
    });
  }

  stopReading(): void {
    this.speechService.stopSpeaking();
    this.isSpeaking = false;
  }
}
