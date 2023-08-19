import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent {
  sharedText: string = '';

  constructor(private communicationService: CommunicationService) {}

  updateSharedText() {
    this.communicationService.updateSharedText(this.sharedText);
  }
}
