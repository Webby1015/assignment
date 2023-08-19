import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-bottom-right',
  templateUrl: './bottom-right.component.html',
  styleUrls: ['./bottom-right.component.css']
})
export class BottomRightComponent implements OnDestroy {
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
