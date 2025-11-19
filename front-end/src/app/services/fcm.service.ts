import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Messaging, getToken, onMessage } from '@angular/fire/messaging';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(private messaging: Messaging, private http: HttpClient) { }

  requestPermissionAndToken(): Observable<string | null> {
    
    return new Observable(observer => {
      getToken(this.messaging, { vapidKey: 'SUA_CHAVE_VAPID_DO_FIREBASE' })
        .then(token => {
          if (token) {
            console.log('FCM Token obtido:', token);
            this.sendTokenToBackend(token).subscribe();
            observer.next(token);
          } else {
            console.warn('Permissão negada ou token indisponível.');
            observer.next(null);
          }
          observer.complete();
        })
        .catch(error => {
          console.error('Erro ao obter token FCM:', error);
          observer.error(error);
        });
    });
  }
  
  monitorForegroundMessages() {
    onMessage(this.messaging, (payload) => {
      console.log('Mensagem Foreground recebida:', payload);
      
    });
  }

  private sendTokenToBackend(token: string): Observable<any> {
    const userId = 'ID_DO_USUARIO_ATUAL'; 
    return this.http.post('/api/notifications/register-token', { token, userId });
  }
}
