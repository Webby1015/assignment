import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private sharedTextSubject = new BehaviorSubject<string>('');
  sharedText$ = this.sharedTextSubject.asObservable();

  updateSharedText(newText: string) {
    this.sharedTextSubject.next(newText);
  }
}
