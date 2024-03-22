<template>
  <q-page padding>
    <div id="map" class="map" ref="map-root"></div>
  </q-page>
</template>

<script setup lang="ts">
import { Feature, Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM.js';
import { onMounted } from 'vue';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Circle, Geometry, Point } from 'ol/geom';
import { useGeographic } from 'ol/proj';
import { Fill, Stroke, Style, Text } from 'ol/style';
import { Modify, Select } from 'ol/interaction';
import { click, singleClick } from 'ol/events/condition';

const createAirportWeather = (coordinates: number[], color: string) => {
  const feature = new Feature(new Point(coordinates));
  feature.setStyle(
    new Style({
      stroke: new Stroke({ color: color, width: 6 }),
      geometry: new Circle(coordinates, 0.5),
      zIndex: 5,
    })
  );
  return feature;
};
const createAirportStatus = (
  coordinates: number[],
  color: string,
  icao: string
) => {
  const feature = new Feature(new Point(coordinates));
  feature.setProperties({ icao: icao });

  feature.setStyle(
    new Style({
      // stroke: new Stroke({ color: color, width: 5 }),
      fill: new Fill({ color: color }),
      geometry: new Circle(coordinates, 0.3),
      zIndex: 1,
    })
  );
  // feature.setId('airport');
  return feature;
};

onMounted(() => {
  useGeographic();

  const airportsWeather = new VectorLayer({
    source: new VectorSource({
      features: [
        createAirportWeather([48.403333333, 54.314166667], '#f44336'), //red
        createAirportWeather([37.9075, 55.409167], '#ffeb3b'), //yellow
        // createAirportWeather([82.599167, 55.033333], 'green'),
        createAirportWeather([82.599167, 55.033333], '#4caf50'), //green
      ],
    }),
  });
  const airportsStatus = new VectorLayer({
    source: new VectorSource({
      features: [
        createAirportStatus([48.403333333, 54.314166667], '#4caf50', 'UWLW'), //green
        createAirportStatus([37.9075, 55.409167], '#f44336', 'UUDD'), //red
        // createAirportStatus([82.599167, 55.033333], '#ffeb3b', 'UNNT'), //yellow
        createAirportStatus([82.599167, 55.033333], '#ff9800', 'UNNT'), //yellow
      ],
    }),
  });

  const map = new Map({
    controls: [],
    target: 'map',
    layers: [
      new TileLayer({
        // opacity: 0.6,
        source: new OSM({}),
      }),
      airportsWeather,
      airportsStatus,
    ],
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });
  let selectedFeatures;
  const mySelect = new Select({
    // multi: true,
    hitTolerance: 5,
    condition: singleClick,
    style: (feature) => {
      if (feature)
        return [
          new Style({
            text: new Text({
              // text: 'Selected',
              text: 'SELECTED',
              // textAlign: 'end',
              textBaseline: 'top',
              font: '20px sans-serif',
              fill: new Fill({ color: 'red' }),
            }),
            fill: new Fill({ color: 'black' }),
            stroke: new Stroke({ color: 'black', width: 5 }),
            geometry: new Circle(feature.getGeometry()?.getCoordinates(), 1.5),
          }),
        ];
    },
  });
  mySelect.addEventListener('select', (e) => {
    // console.log(e.target.getFeatures().getArray());
    selectedFeatures = e.target.getFeatures().getArray();
    console.log(selectedFeatures[0].values_);
  });
  map.addInteraction(mySelect);
});
</script>

<style scoped lang="scss">
#map {
  border: 5px solid $primary;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  :hover {
    cursor: pointer;
  }
}
</style>
