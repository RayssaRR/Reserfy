import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  requestPermission(): Observable<boolean> {
    return new Observable(observer => {
      if (!('Notification' in window)) {
        console.error('Este navegador não suporta notificações.');
        observer.next(false);
        observer.complete();
        return;
      }
      
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          observer.next(true);
        } else {
          observer.next(false);
        }
        observer.complete();
      });
    });
  }

  showNotification(title: string, body: string, icon?: string): void {
    if (Notification.permission === 'granted') {
      new Notification(title, {
        body: body,
        icon: icon,
        vibrate: [200, 100, 200]
      });
    } else {
      console.warn('Permissão de notificação não concedida.');
    }
  }
}
