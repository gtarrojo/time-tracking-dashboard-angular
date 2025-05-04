import { Component, inject } from '@angular/core';
import { NavComponent } from '../components/nav/nav.component';
import { InfoCardComponent } from '../components/info-card/info-card.component';
import { IActivity, Timeframes } from '../../interfaces/iactivity.interface';
import { TrackingDataService } from '../../services/tracking-data.service';

@Component({
  selector: 'app-dashboard',
  imports: [NavComponent, InfoCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  trackingData: IActivity[] = [];
  trackingDataService = inject(TrackingDataService);
  selectedTimeframe: Timeframes = 'daily';

  ngOnInit() {
    this.trackingData = this.trackingDataService.getAll();
  }
}
