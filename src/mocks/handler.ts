import { rest } from 'msw';

export const handlers = [
  rest.post('/stations', async (req, res, ctx) => {
    const body = await req.json();
    const { latitude, longitude, latitudeDelta, longitudeDelta } = body;

    const northEastBoundary = {
      latitude: latitude + latitudeDelta,
      longitude: longitude + longitudeDelta,
    };

    const southWestBoundary = {
      latitude: latitude - latitudeDelta,
      longitude: longitude - longitudeDelta,
    };
  }),
];
