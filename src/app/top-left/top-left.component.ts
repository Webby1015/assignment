import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-top-left',
  templateUrl: './top-left.component.html',
  styleUrls: ['./top-left.component.css']
})
export class TopLeftComponent implements OnDestroy {
  sharedText: string = '';
  private subscription: Subscription;

  constructor(private communicationService: CommunicationService) {
    this.subscription = this.communicationService.sharedText$.subscribe(text => {
      this.sharedText = text;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
