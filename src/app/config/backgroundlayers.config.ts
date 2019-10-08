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
          url: `https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}@2x.png?access_token=${mapbox_access_token}`,
        }),
        visible: false
      })
    },
    {
      'name': 'Mapbox Light',
      'layer': new Tile({
        source: new XYZ({
          url: `https://api.mapbox.com/v4/mapbox.light/{z}/{x}/{y}@2x.png?access_token=${mapbox_access_token}`,
        }),
        visible:false
      })
    },
    {
      'name': 'Mapbox Dark',
      'layer': new Tile({
        source: new XYZ({
          url: `https://api.mapbox.com/v4/mapbox.dark/{z}/{x}/{y}@2x.png?access_token=${mapbox_access_token}`,
        }),
        visible:false
      })
    },
    {
      'name': 'Mapbox Satellite',
      'layer': new Tile({
        source: new XYZ({
          url: `https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}@2x.png?access_token=${mapbox_access_token}`,
        }),
        visible:false
      })
    },
    {
      'name': 'Mapbox Streets Satellite',
      'layer': new Tile({
        source: new XYZ({
          url: `https://api.mapbox.com/v4/mapbox.streets-satellite/{z}/{x}/{y}@2x.png?access_token=${mapbox_access_token}`,
        }),
        visible:false
      })
    },
  {
    'name': 'Mapbox Outdoors',
    'layer': new Tile({
      source: new XYZ({
        url: `https://api.mapbox.com/v4/mapbox.outdoors/{z}/{x}/{y}@2x.png?access_token=${mapbox_access_token}`,
      }),
      visible:false
    })
  },

  ];
