import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-y-component',
  templateUrl: './y-component.component.html',
  styleUrls: ['./y-component.component.css']
})
export class YComponent {
  @Input() yData: string = '';
  @Output() yDataSaved = new EventEmitter<string>();

  saveY() {
    this.yDataSaved.emit(this.yData);
  }
}
