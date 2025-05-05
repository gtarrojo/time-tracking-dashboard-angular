import { Component, EventEmitter, Output } from '@angular/core';
import { Timeframes } from '../../../interfaces/iactivity.interface';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  @Output() timeframeChange = new EventEmitter<Timeframes>();
  currentTimeframe: Timeframes = 'daily';

  onTimeframeSelect(timeframe: Timeframes): void {
    this.timeframeChange.emit(timeframe);
    this.currentTimeframe = timeframe;
  }
}
