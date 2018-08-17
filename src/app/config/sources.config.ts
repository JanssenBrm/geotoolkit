
export const SOURCES = [

  {
    'name': 'PROBA-V MEP (WMTS)',
    'description': 'The  PROBA-V Mission Exploitation Platform (MEP), as an ESA pathfinder project, complements the PROBA-V user segment by offering an operational Exploitation Platform on the PROBA-V data, correlative data and derived products. ',
    'url': '/proxy/mapcache/wmts?service=WMTS&request=GetCapabilities',
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
