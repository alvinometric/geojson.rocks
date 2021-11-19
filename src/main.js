import '../style.css';
import bbox from '@turf/bbox';
import maplibregl from 'maplibre-gl';
import style from './style';

const addGeojson = (map, geo) => {
  const layerID = 'layer_' + Math.random();
  const sourceID = 'source_' + Math.random();

  // Add a data source containing GeoJSON data.
  map.addSource(sourceID, {
    type: 'geojson',
    data: geo,
    generateId: true,
  });

  // Add a new layer to visualize the polygon.
  map.addLayer({
    id: layerID,
    type: 'fill',
    source: sourceID, // reference the data source
    paint: {
      'fill-color': '#ff0000', // color fill
      'fill-opacity': [
        'case',
        ['boolean', ['feature-state', 'hover'], false],
        1,
        0.5,
      ],
    },
  });

  map.fitBounds(bbox(geo), { padding: 20, duration: 0 });

  let hoveredStateId = null;
  // When the user moves their mouse over the state-fill layer, we'll update the
  // feature state for the feature under the mouse.
  map.on('mousemove', layerID, (e) => {
    map.getCanvas().style.cursor = 'pointer';

    if (e.features.length === 0) return;

    if (hoveredStateId) {
      map.setFeatureState(
        { source: sourceID, id: hoveredStateId },
        { hover: false }
      );
    }

    hoveredStateId = e.features[0].id;

    console.log(e.features[0].properties);

    map.setFeatureState(
      { source: sourceID, id: hoveredStateId },
      { hover: true }
    );
  });

  // When the mouse leaves the state-fill layer, update the feature state of the
  // previously hovered feature.
  map.on('mouseleave', layerID, () => {
    if (hoveredStateId) {
      map.setFeatureState(
        { source: sourceID, id: hoveredStateId },
        { hover: false }
      );
    }
    hoveredStateId = null;
    map.getCanvas().style.cursor = '';
  });
};

const preventDefaults = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

const start = async () => {
  const map = new maplibregl.Map({
    container: 'app',
    style,
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });

  const nav = new maplibregl.NavigationControl();
  map.addControl(nav, 'top-left');

  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
    document.body.addEventListener(eventName, preventDefaults, false);
  });

  document.body.addEventListener('drop', handleDrop, false);

  const handleDrop = async (e) => {
    let dt = e.dataTransfer;

    for (const item of dt.items) {
      // If dropped items aren't files, reject them
      if (item.kind === 'file') {
        var file = item.getAsFile();
        let t = await file.text();
        let j = JSON.parse(t);
        addGeojson(map, j);
      }
    }
  };
};

start().then(() => {
  console.log('done');
});
