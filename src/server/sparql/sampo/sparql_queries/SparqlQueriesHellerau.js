const perspectiveID = 'hellerau'

export const personPropertiesFacetResults =
`   {
      ?id skos:prefLabel ?prefLabel .
      # BIND (?prefLabel__id as ?prefLabel__prefLabel)
      # BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
    }
    UNION 
    {
      ?id h-schema:home_1930/gn:name ?home1930 .
    }
    UNION
    {
      ?id h-schema:home_1937/gn:name ?home1937 .
    }
`

// # https://github.com/uber/deck.gl/blob/master/docs/layers/arc-layer.md
export const hellerauMigrationsQuery = `
  SELECT DISTINCT ?id ?person__id ?person__prefLabel ?person__dataProviderUrl
    ?from__id ?from__prefLabel ?from__lat ?from__long
    ?to__id ?to__prefLabel ?to__lat ?to__long
  WHERE {
    {
      # people with no home_1937 
      <FILTER>
      BIND(<https://sws.geonames.org/2772809/> as ?from__id)
      ?person__id h-schema:home_1930 ?to__id ;
                  skos:prefLabel ?person__prefLabel .
      ?from__id gn:name ?from__prefLabel ;
                wgs84:lat ?from__lat ;
                wgs84:long ?from__long .
      ?to__id gn:name ?to__prefLabel ;
              wgs84:lat ?to__lat ;
              wgs84:long ?to__long .
      BIND(IRI(CONCAT(STR(?from__id), "-", REPLACE(STR(?to__id), "https://sws.geonames.org", "--"))) as ?id)
      FILTER NOT EXISTS { ?person__id h-schema:home_1937 [] . }
    }
    UNION 
    {
      # people with no home_1930
      <FILTER>
      BIND(<https://sws.geonames.org/2772809/> as ?from__id)
      ?person__id h-schema:home_1937 ?to__id ;
                  skos:prefLabel ?person__prefLabel .
      ?from__id gn:name ?from__prefLabel ;
                wgs84:lat ?from__lat ;
                wgs84:long ?from__long .
      ?to__id gn:name ?to__prefLabel ;
              wgs84:lat ?to__lat ;
              wgs84:long ?to__long .
      BIND(IRI(CONCAT(STR(?from__id), "-", REPLACE(STR(?to__id), "https://sws.geonames.org", "--"))) as ?id)
      FILTER NOT EXISTS { ?person__id h-schema:home_1930 [] . }
    }
    UNION 
    {
      # people with home_1930 = home_1937
      <FILTER>
      BIND(<https://sws.geonames.org/2772809/> as ?from__id)
      ?person__id h-schema:home_1930 ?to__id ;
                  h-schema:home_1937 ?home_1937 ;
                  skos:prefLabel ?person__prefLabel .
      ?from__id gn:name ?from__prefLabel ;
                wgs84:lat ?from__lat ;
                wgs84:long ?from__long .
      ?to__id gn:name ?to__prefLabel ;
              wgs84:lat ?to__lat ;
              wgs84:long ?to__long .
      BIND(IRI(CONCAT(STR(?from__id), "-", REPLACE(STR(?to__id), "https://sws.geonames.org", "--"))) as ?id)
      FILTER (?to__id = ?home_1937)
    }
    UNION
    {
       # people with home_1930 != home_1937, first arc
      <FILTER>
      BIND(<https://sws.geonames.org/2772809/> as ?from__id)
      ?person__id h-schema:home_1930 ?to__id ;
                  h-schema:home_1937 ?home_1937 ;
                  skos:prefLabel ?person__prefLabel .
      ?from__id gn:name ?from__prefLabel ;
                wgs84:lat ?from__lat ;
                wgs84:long ?from__long .
      ?to__id gn:name ?to__prefLabel ;
              wgs84:lat ?to__lat ;
              wgs84:long ?to__long .
      BIND(IRI(CONCAT(STR(?from__id), "-", REPLACE(STR(?to__id), "https://sws.geonames.org", "--"))) as ?id)
      FILTER (?to__id != ?home_1937)
    }
    UNION
    {
      # people with home_1930 != home_1937, second arc
      <FILTER>
      ?person__id h-schema:home_1930 ?from__id ;
                  h-schema:home_1937 ?to__id ;
                  skos:prefLabel ?person__prefLabel .
      ?from__id gn:name ?from__prefLabel ;
                wgs84:lat ?from__lat ;
                wgs84:long ?from__long .
      ?to__id gn:name ?to__prefLabel ;
              wgs84:lat ?to__lat ;
              wgs84:long ?to__long .
      BIND(IRI(CONCAT(STR(?from__id), "-", REPLACE(STR(?to__id), "https://sws.geonames.org", "--"))) as ?id)
      FILTER (?from__id != ?to__id)
    }
  }
`
