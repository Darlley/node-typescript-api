import { AxiosStatic } from 'axios';

export class StormGlass {
  /**
   * https://docs.stormglass.io/#/v1/weather
   */

  readonly stormGlassAPIParams = [
    'swellDirection',
    'swellHeight',
    'swellPeriod',
    'waveDirection',
    'waveHeight',
    'windDirection',
    "windSpeed"
  ];
  readonly stormGlassAPISource: 'noaa' | 'dwd' = 'noaa';

  constructor(protected request: AxiosStatic) {}

  public async fetchPoints(lat: number, lng: number): Promise<{}> {
    const params = this.stormGlassAPIParams.join(',');
    const timestampUTC = Math.floor(Date.now() / 1000);

    return this.request.get(
      `https://api.stormglass.io/v1/weather/point?params=${params}&source=${this.stormGlassAPISource}&end=${timestampUTC}&lat=${lat}&lng=${lng}`
    );
  }
}
