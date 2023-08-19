import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-bottom-left',
  templateUrl: './bottom-left.component.html',
  styleUrls: ['./bottom-left.component.css']
})
export class BottomLeftComponent implements OnDestroy {
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
