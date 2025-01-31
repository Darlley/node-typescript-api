import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stormGlassWeather3HoursFixture from "@test/fixtures/stormglass_weather_3_hours.json"
import stormGlassNormalized3HoursFixture from "@test/fixtures/stormglass_normalizes_response_3_hours.json"

jest.mock('axios');

describe('StormGlass client', () => {
  it('should be return the normalized forecat from the StormGlass service', async () => {
    const lat = 58.7984;
    const lng = 17.8081;

    axios.get = jest.fn().mockRejectedValue(stormGlassWeather3HoursFixture);

    const stormGlass = new StormGlass(axios);
    const response = await stormGlass.fetchPoints(lat, lng);

    expect(response).toEqual(stormGlassNormalized3HoursFixture);
  });
});
