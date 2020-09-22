import { Tile } from 'ol/layer';
import { OSM, XYZ } from 'ol/source';

const mapbox_access_token = 'pk.eyJ1IjoiYnJhbWphbnNzZW4iLCJhIjoiY2o4dnlpdGt5MTZrbTMzcnB2amJxcmRzdyJ9.WQfT2IF5Ij15-jTxbgMWRw'

export const BACKGROUND_LAYERS = [
    {
      'name': 'Open Street Map',
      'layer': new Tile({
        source: new OSM(),
        visible: true
      })
    },
    {
      'name': 'Mapbox Streets',
      'layer': new Tile({
        source: new XYZ({
          url: `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}?access_token=${mapbox_access_token}`,
        }),
        visible: false
      })
    },
    {
      'name': 'Mapbox Light',
      'layer': new Tile({
        source: new XYZ({
          url: `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}?access_token=${mapbox_access_token}`,
        }),
        visible:false
      })
    },
    {
      'name': 'Mapbox Dark',
      'layer': new Tile({
        source: new XYZ({
          url: `https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}?access_token=${mapbox_access_token}`,
        }),
        visible:false
      })
    },
    {
      'name': 'Mapbox Satellite',
      'layer': new Tile({
        source: new XYZ({
          url: `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=${mapbox_access_token}`,
        }),
        visible:false
      })
    },
    {
      'name': 'Mapbox Streets Satellite',
      'layer': new Tile({
        source: new XYZ({
          url: `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}?access_token=${mapbox_access_token}`,
        }),
        visible:false
      })
    },
  {
    'name': 'Mapbox Outdoors',
    'layer': new Tile({
      source: new XYZ({
        url: `https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}?access_token=${mapbox_access_token}`,
      }),
      visible:false
    })
  },

  ];
