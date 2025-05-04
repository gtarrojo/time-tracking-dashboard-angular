import { Component, inject, Input } from '@angular/core';
import { TrackingDataService } from '../../../services/tracking-data.service';
import { IActivity, Timeframes } from '../../../interfaces/iactivity.interface';

@Component({
  selector: 'app-info-card',
  imports: [],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css',
})
export class InfoCardComponent {
  @Input() activity!: IActivity;
  @Input() selectedTimeframe!: Timeframes;
}
