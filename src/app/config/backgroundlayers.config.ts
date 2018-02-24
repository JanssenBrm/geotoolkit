import * as ol from 'openlayers';


const mapbox_access_token = 'pk.eyJ1IjoiYnJhbWphbnNzZW4iLCJhIjoiY2o4dnlpdGt5MTZrbTMzcnB2amJxcmRzdyJ9.WQfT2IF5Ij15-jTxbgMWRw'

export const BACKGROUND_LAYERS = [
    {
      'name': 'Open Street Map',
      'layer': new ol.layer.Tile({
        source: new ol.source.OSM(),
        visible: true
      })
    },
    {
      'name': 'Mapbox Streets',
      'layer': new ol.layer.Tile({
        source: new ol.source.XYZ({
          url: `https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}@2x.png?access_token=${mapbox_access_token}`,
        }),
        visible: false
      })
    },
    {
      'name': 'Mapbox Light',
      'layer': new ol.layer.Tile({
        source: new ol.source.XYZ({
          url: `https://api.mapbox.com/v4/mapbox.light/{z}/{x}/{y}@2x.png?access_token=${mapbox_access_token}`,
        }),
        visible:false
      })
    },
    {
      'name': 'Mapbox Dark',
      'layer': new ol.layer.Tile({
        source: new ol.source.XYZ({
          url: `https://api.mapbox.com/v4/mapbox.dark/{z}/{x}/{y}@2x.png?access_token=${mapbox_access_token}`,
        }),
        visible:false
      })
    },
    {
      'name': 'Mapbox Satellite',
      'layer': new ol.layer.Tile({
        source: new ol.source.XYZ({
          url: `https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}@2x.png?access_token=${mapbox_access_token}`,
        }),
        visible:false
      })
    },
    {
      'name': 'Mapbox Streets Satellite',
      'layer': new ol.layer.Tile({
        source: new ol.source.XYZ({
          url: `https://api.mapbox.com/v4/mapbox.streets-satellite/{z}/{x}/{y}@2x.png?access_token=${mapbox_access_token}`,
        }),
        visible:false
      })
    },
  {
    'name': 'Mapbox Outdoors',
    'layer': new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: `https://api.mapbox.com/v4/mapbox.outdoors/{z}/{x}/{y}@2x.png?access_token=${mapbox_access_token}`,
      }),
      visible:false
    })
  },

  ];
