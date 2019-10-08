
export const SOURCES = [
  {
    'name': 'TerraScope (WMTS)',
    'description': 'VITO WMTS based on GeoTrellis',
    'url': 'https://viewer.terrascope.be/proxy/mapcache-cgs/wmts?service=WMTS&request=GetCapabilities',
    'infoUrl': '',
    'imageUrl': 'https://terrascope.be/sites/terrascope.be/files/logo-terrascope-70.png'
  },
  {
    'name': 'GeoTrellis (WMTS)',
    'description': 'VITO WMTS based on GeoTrellis',
    'url': 'https://wmts.terrascope.be/service/wmts?service=WMTS&request=GetCapabilities',
    'infoUrl': '',
    'imageUrl': 'data:image/png;base64,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'
  },
  {
    'name': 'PROBA-V MEP (WMTS)',
    'description': 'The  PROBA-V Mission Exploitation Platform (MEP), as an ESA pathfinder project, complements the PROBA-V user segment by offering an operational Exploitation Platform on the PROBA-V data, correlative data and derived products. ',
    'url': 'https://proba-v-mep.esa.int/applications/geo-viewer/app/mapcache/wmts?service=WMTS&request=GetCapabilities',
    'infoUrl': 'https://proba-v-mep.esa.int/',
    'imageUrl': 'https://pbs.twimg.com/profile_images/641168186897858560/PI1QimyT_400x400.png'
  },
  {
      'name': 'PROBA-V MEP (WMS)',
      'description': 'The  PROBA-V Mission Exploitation Platform (MEP), as an ESA pathfinder project, complements the PROBA-V user segment by offering an operational Exploitation Platform on the PROBA-V data, correlative data and derived products. ',
      'url': '/proxy/geoserver/wms?service=WMS&request=GetCapabilities',
      'infoUrl': 'https://proba-v-mep.esa.int/',
      'imageUrl': 'https://pbs.twimg.com/profile_images/641168186897858560/PI1QimyT_400x400.png'
  },
  {
      'name': 'MAPS (WMS)',
      'description': 'VITO TAP Maps Cluster',
      'url': '/proxy/maps/geoserver/ows?service=wms&version=1.3.0&request=getcapabilities',
      'infoUrl': '',
      'imageUrl': 'https://pbs.twimg.com/profile_images/641168186897858560/PI1QimyT_400x400.png'
  },
/*{
    'name': 'MAPS (Geowebcache)',
    'description': 'VITO TAP Maps Cluster',
    'url': '/proxy/maps/geowebcache/service/wmts?REQUEST=getcapabilities',
    'infoUrl': '',
    'imageUrl': 'https://pbs.twimg.com/profile_images/641168186897858560/PI1QimyT_400x400.png'
}*/
  /*{
    'name': 'Databank Ondergrond Vlaanderen',
    'description': 'DOV zorgt ervoor dat alle gegevens van de Vlaamse ondergrond vlot beschikbaar zijn via één loket, het DOV-Portaal.',
    'url': 'https://www.dov.vlaanderen.be/geoserver/wms?service=wms&request=GetCapabilities as external source',
    'infoUrl': 'https://www.dov.vlaanderen.be/',
    'imageUrl': 'https://pbs.twimg.com/profile_images/748851579214766080/yd2vIwV4.jpg'
  }*/
  ];
