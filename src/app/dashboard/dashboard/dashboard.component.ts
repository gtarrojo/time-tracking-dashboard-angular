import { Component } from '@angular/core';
import { NavComponent } from '../components/nav/nav.component';
import { InfoCardComponent } from '../components/info-card/info-card.component';

@Component({
  selector: 'app-dashboard',
  imports: [NavComponent, InfoCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
