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
  SELECT DISTINCT ?id 
  ?from__id ?from__prefLabel ?from__lat ?from__long ?from__dataProviderUrl
  ?to__id ?to__prefLabel ?to__lat ?to__long ?to__dataProviderUrl
  (COUNT(DISTINCT ?person) as ?instanceCount) 
  WHERE {
    {
      # people with no home_1937 
      <FILTER>
      BIND(<https://sws.geonames.org/2772809/> as ?from__id)
      ?person h-schema:home_1930 ?to__id .
      ?from__id gn:name ?from__prefLabel ;
                wgs84:lat ?from__lat ;
                wgs84:long ?from__long .
      ?to__id gn:name ?to__prefLabel ;
              wgs84:lat ?to__lat ;
              wgs84:long ?to__long .
      BIND(IRI(CONCAT(STR(?from__id), "-", REPLACE(STR(?to__id), "https://sws.geonames.org", "--"))) as ?id)
      FILTER NOT EXISTS { ?person h-schema:home_1937 [] . }
      FILTER (?to__id != <https://sws.geonames.org/2772809/>)
    }
    UNION 
    {
      # people with no home_1930
      <FILTER>
      BIND(<https://sws.geonames.org/2772809/> as ?from__id)
      ?person h-schema:home_1937 ?to__id .
      ?from__id gn:name ?from__prefLabel ;
                wgs84:lat ?from__lat ;
                wgs84:long ?from__long .
      ?to__id gn:name ?to__prefLabel ;
              wgs84:lat ?to__lat ;
              wgs84:long ?to__long .
      BIND(IRI(CONCAT(STR(?from__id), "-", REPLACE(STR(?to__id), "https://sws.geonames.org", "--"))) as ?id)
      FILTER NOT EXISTS { ?person h-schema:home_1930 [] . }
      FILTER (?to__id != <https://sws.geonames.org/2772809/>)
    }
    UNION 
    {
      # people with home_1930 = home_1937
      <FILTER>
      BIND(<https://sws.geonames.org/2772809/> as ?from__id)
      ?person h-schema:home_1930 ?to__id ;
                  h-schema:home_1937 ?home_1937 .
      ?from__id gn:name ?from__prefLabel ;
                wgs84:lat ?from__lat ;
                wgs84:long ?from__long .
      ?to__id gn:name ?to__prefLabel ;
              wgs84:lat ?to__lat ;
              wgs84:long ?to__long .
      BIND(IRI(CONCAT(STR(?from__id), "-", REPLACE(STR(?to__id), "https://sws.geonames.org", "--"))) as ?id)
      FILTER (?to__id = ?home_1937)
      FILTER (?to__id != <https://sws.geonames.org/2772809/>)
    }
    UNION
    {
       # people with home_1930 != home_1937, first arc
      <FILTER>
      BIND(<https://sws.geonames.org/2772809/> as ?from__id)
      ?person h-schema:home_1930 ?to__id ;
                  h-schema:home_1937 ?home_1937 .
      ?from__id gn:name ?from__prefLabel ;
                wgs84:lat ?from__lat ;
                wgs84:long ?from__long .
      ?to__id gn:name ?to__prefLabel ;
              wgs84:lat ?to__lat ;
              wgs84:long ?to__long .
      BIND(IRI(CONCAT(STR(?from__id), "-", REPLACE(STR(?to__id), "https://sws.geonames.org", "--"))) as ?id)
      FILTER (?to__id != ?home_1937)
      FILTER (?to__id != <https://sws.geonames.org/2772809/>)
    }
    UNION
    {
      # people with home_1930 != home_1937, second arc
      <FILTER>
      ?person h-schema:home_1930 ?from__id ;
                  h-schema:home_1937 ?to__id .
      ?from__id gn:name ?from__prefLabel ;
                wgs84:lat ?from__lat ;
                wgs84:long ?from__long .
      ?to__id gn:name ?to__prefLabel ;
              wgs84:lat ?to__lat ;
              wgs84:long ?to__long .
      BIND(IRI(CONCAT(STR(?from__id), "-", REPLACE(STR(?to__id), "https://sws.geonames.org", "--"))) as ?id)
      FILTER (?from__id != ?to__id)
      # FILTER (?to__id != <https://sws.geonames.org/2772809/>)
    }
  }
  GROUP BY ?id 
  ?from__id ?from__prefLabel ?from__lat ?from__long ?from__dataProviderUrl
  ?to__id ?to__prefLabel ?to__lat ?to__long ?to__dataProviderUrl
  ORDER BY desc(?instanceCount)
`

export const hellerauMigrationsDialogQuery = `
  SELECT DISTINCT ?id ?prefLabel { 
    { 
      BIND(<FROM_ID> as ?fromID) 
      BIND(<TO_ID> as ?toID) 
      ?id h-schema:home_1930|h-schema:home_1937 ?toID . 
      FILTER(?fromID = <https://sws.geonames.org/2772809/>)
      FILTER(?fromID != ?toID)
      FILTER NOT EXISTS {
        ?id h-schema:home_1930 ?toID ;
             h-schema:home_1937 ?fromID .
      }
    }
    UNION
    { 
      BIND(<FROM_ID> as ?fromID) 
      BIND(<TO_ID> as ?toID) 
      ?id h-schema:home_1930|h-schema:home_1937 ?fromID .
      ?id h-schema:home_1930|h-schema:home_1937 ?toID .
      FILTER(?fromID != <https://sws.geonames.org/2772809/>)
      FILTER(?fromID != ?toID)
    }
    ?id skos:prefLabel ?prefLabel .
    # BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?dataProviderUrl)
  }
  ORDER BY ?prefLabel
`
