export type Timeframes = 'daily' | 'weekly' | 'monthly';

export interface IActivity {
  title: string;
  timeframes: TimeframesStructure;
}

export interface TimeframesStructure {
  daily: TimeframeData;
  weekly: TimeframeData;
  monthly: TimeframeData;
}

export interface TimeframeData {
  current: number;
  previous: number;
}
