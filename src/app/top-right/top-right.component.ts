import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-top-right',
  templateUrl: './top-right.component.html',
  styleUrls: ['./top-right.component.css']
})
export class TopRightComponent implements OnDestroy {
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
