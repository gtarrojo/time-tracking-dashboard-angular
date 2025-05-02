import { Injectable } from '@angular/core';
import { dataTracking } from '../data/data';
import { IActivity } from '../interfaces/iactivity.interface';

@Injectable({
  providedIn: 'root',
})
export class TrackingDataService {
  private trackingData: IActivity[] = dataTracking;

  getAll() {
    return this.trackingData;
  }
}
