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
    <FILTER>
    ## Koulun nimi muuton (1925 jälkeen): Die Schule Hellerau-Laxenburg.
    # Sijainti:  https://www.geonames.org/2772809/schloss-laxenburg.html
    BIND(<https://sws.geonames.org/2772809/> as ?from__id)
    ?person__id skos:prefLabel ?person__prefLabel .
    OPTIONAL { ?person__id h-schema:home_1930 ?home1930 }
    OPTIONAL { ?person__id h-schema:home_1937 ?home1937 }
    BIND(COALESCE(?home1930, ?home1937, "-") as ?to__id) 
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?person__id), "^.*\\\\/(.+)", "$1")) AS ?person__dataProviderUrl)
    ?from__id gn:name ?from__prefLabel ;
              wgs84:lat ?from__lat ;
              wgs84:long ?from__long .
    ?to__id gn:name ?to__prefLabel ;
            wgs84:lat ?to__lat ;
            wgs84:long ?to__long .
    BIND(IRI(CONCAT(STR(?from__id), "-", REPLACE(STR(?to__id), "https://sws.geonames.org", "--"))) as ?id)
  }
`
