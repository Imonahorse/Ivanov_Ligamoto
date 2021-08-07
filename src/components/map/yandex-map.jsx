import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import icon from './../../img/icon.svg';

const Default = {
  CENTER_LOCATION: [59.96755, 30.322802],
  MARKER_LOCATION: [59.968367, 30.31457],
  ZOOM: 14,
};

function YandexMap() {
  return (
    <YMaps>
      <Map defaultState={{center: Default.CENTER_LOCATION, zoom: Default.ZOOM}}>
        <Placemark geometry={Default.MARKER_LOCATION} options={{iconLayout: 'default#image', iconImageHref: icon}}/>
      </Map>
    </YMaps>
  );
}

export default YandexMap;
