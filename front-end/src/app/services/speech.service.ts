import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  private synth: SpeechSynthesis;

  constructor() {

    this.synth = window.speechSynthesis;
  }

  speak(text: string, lang: string = 'pt-BR', voiceName?: string): Observable<void> {
    
    if (this.synth.speaking) {
      this.synth.cancel();
    }
    
    return new Observable((observer: Observer<void>) => {
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;

      if (voiceName) {
        const voices = this.synth.getVoices();
        const selectedVoice = voices.find(voice => voice.name === voiceName && voice.lang === lang);
        if (selectedVoice) {
          utterance.voice = selectedVoice;
        }
      }

      utterance.onend = () => {
        observer.next();
        observer.complete();
      };

      utterance.onerror = (event) => {
        observer.error(`Erro na síntese de voz: ${event.error}`);
      };

      this.synth.speak(utterance);
    });
  }

  getAvailableVoices(): SpeechSynthesisVoice[] {
    return this.synth.getVoices();
  }

  stopSpeaking(): void {
    if (this.synth.speaking) {
      this.synth.cancel();
    }
  }
}
