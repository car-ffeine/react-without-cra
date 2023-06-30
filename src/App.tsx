import { Loader } from '@googlemaps/js-api-loader';
import React from 'react';

let map: google.maps.Map;

const loader = new Loader({
  apiKey: process.env.API_KEY as string,
  version: 'weekly',
});

loader.load().then(async () => {
  const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary;

  const myLatLng = { lat: -34.397, lng: 150.644 };

  map = new Map(document.getElementById('map') as HTMLDivElement, {
    center: myLatLng,
    zoom: 8,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: 'Hello World!',
  });
});

const App = () => {
  return <div id='map' style={{ width: '400px', height: '400px' }}></div>;
};

export default App;
