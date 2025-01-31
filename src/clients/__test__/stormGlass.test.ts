import { StormGlass } from '@src/clients/stormGlass';

describe('StormGlass client', () => {
  it('should be return the normalized forecat from the StormGlass service', async () => {
    const lat = 58.7984;
    const lng = 17.8081;

    const stormGlass = new StormGlass();
    const response = await stormGlass.fetchPoints(lat, lng);

    expect(response).toEqual({});
  });
});
