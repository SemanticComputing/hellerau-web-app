export default {
  languageLabel: 'English',
  appTitle: {
    short: 'hellerau',
    long: ' &nbsp; &nbsp; Hellerau  &nbsp;  &nbsp;',
    subheading: `
      "Here to forge for us the Sampo, Hammer us the lid in colors"
    `
  },
  appDescription: `
    
  `,
  appDescription1: `
    Sampo is a web service for searching and studying place names. The search results
    can be viewed as a table, on maps, and as statistical distributions. 
    Historical and current background maps are provided.
  `,
  appDescription2: `
    Start by choosing source dataset(s) and input a place name on the search field.
    Alternatively you can search by area. 
  `,
  appDescription3: `
    
  `,
  appDescription4: `
  
  `,
  selectPerspective: 'Select a perspective to search and browse the knowledge graph:',
  mainPageImageLicence: 'Images used under license from Shutterstock.com',
  topBar: {
    feedback: 'feedback',
    info: {
      info: 'Info',
      blog: 'Project blog',
      blogUrl: 'https://seco.cs.aalto.fi',
      aboutThePortal: 'About the Portal'
    },
    searchBarPlaceHolder: 'Search all content',
    searchBarPlaceHolderShort: 'Search',
    instructions: 'instructions'
  },
  facetBar: {
    results: 'Results',
    narrowDownBy: 'Narrow down by',
    filterOptions: 'Filter options',
    filterByName: 'Filter by name',
    filterByBoundingBox: 'Filter by bounding box',
    selectionOptions: 'Selection options',
    selectAlsoSubconcepts: 'Automatically select all subconcepts',
    doNotSelectSubconcepts: 'Do not select subconcepts',
    sortingOptions: 'Sorting options',
    sortAlphabetically: 'Sort alphabetically',
    sortByNumberOfSearchResults: 'Sort by number of search results',
    useDisjunction: 'Use logical OR between selections',
    useConjuction: 'Use logical AND between selections'
  },
  tabs: {
    table: 'table',
    map: 'map',
    production_places: 'production places',
    production_places_heatmap: 'production heatmap',
    last_known_locations: 'last known locations',
    migrations: 'migrations',
    network: 'network',
    export: 'export',
    production_dates: 'production dates',
    event_dates: 'event dates',
    map_clusters: 'clustered map',
    map_markers: 'map',
    heatmap: 'heatmap',
    statistics: 'statistics',
    emloLetterNetwork: 'Network of letters',
    emloSentReceived: 'Sent and received letters',
    download: 'download',
    recommendations: 'recommendations'
  },
  table: {
    rowsPerPage: 'Rows per page',
    of: 'of'
  },
  lineChart: {
    productionCount: 'Production',
    transferCount: 'Transfer of custody',
    observationCount: 'Observation',
    sentCount: 'Sent',
    receivedCount: 'Received',
    allCount: 'All'
  },
  exportToYasgui: 'open the result table query in yasgui sparql editor',
  openInLinkedDataBrowser: 'open in linked data browser',
  resultsAsCSV: 'download the search results as a CSV table',
  facets: {
    dateFacet: {
      invalidDate: 'Epäkelpo päivämäärä.',
      toBeforeFrom: 'Alkupäivämäärän täytyy olla ennen loppupäivämäärää.',
      minDate: 'Aikaisin sallittu päivämäärä on {minDate}',
      maxDate: 'Myöhäisin sallittu päivämäärä on {maxDate}',
      cancel: 'Peruuta',
      fromLabel: 'Alku',
      toLabel: 'Loppu'
    },
    textFacet: {
      inputLabel: 'Etsi nimellä'
    }
  },
  leafletMap: {
    basemaps: {
      mapbox: {
        'light-v10': 'Mapbox Light'
      },
      googleRoadmap: 'Google Maps',
      topographicalMapNLS: 'Topographical map (National Land Survey of Finland)',
      backgroundMapNLS: 'Background map (National Land Survey of Finland)'
    },
    externalLayers: {
      arkeologiset_kohteet_alue: 'Register of Archaeological Sites, areas',
      arkeologiset_kohteet_piste: 'Register of Archaeological Sites, points',
      karelianMaps: 'Karelian maps, 1:100 000 topographic (SeCo)',
      senateAtlas: 'Senate atlas, 1:21 000 topographic (SeCo)',
      'kotus:pitajat': 'Finnish parishes in 1938 (Institute for the Languages of Finland)',
      'kotus:rajat-sms-alueet': 'Dialectical regions in Finland (Institute for the Languages of Finland)',
      'kotus:rajat-sms-alueosat': 'Dialectical subregions in Finland (Institute for the Languages of Finland)',
      'kotus:rajat-lansi-ita': 'Border between western and eastern dialects in Finland (Institute for the Languages of Finland)'
    },
    mapModeButtons: {
      markers: 'Markers',
      heatmap: 'Heatmap'
    },
    wrongZoomLevel: 'The map zoom level has to at least 11',
    wrongZoomLevelFHA: 'The map zoom level has to be at least 13 in order to show this layer',
    tooManyResults: 'More than 3000 results, please use clustered map or heatmap'
  },
  instancePageGeneral: {
    introduction: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        This landing page provides a human-readable summary of the data points that link
        to this {entity}. The data included in this summary reflect only those data points
        used in the MMM Portal. Click the Open in Linked Data Browser on button on the
        Export tab to view the complete set of classes and properties linked to this record.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        To cite this record, use its url. You can use also use the url to return directly
        to the record at any time.
      </p>
    `,
    repetition: `
      <h6 class="MuiTypography-root MuiTypography-h6">
        Repetition of data
      </h6>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        The same or similar data may appear within a single data field multiple times.
        This repetition occurs due to the merging of multiple records from different datasets
        to create the MMM record.
      </p>
    `
  },
  perspectives: {
    hellerau: {
      label: 'Hellerau',
      facetResultsType: 'people',
      shortDescription: 'Description',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Intro text can be added here.
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>MIGRATIONS</STRONG> ...
          <li>
            <strong>TABLE</STRONG> ...
          </li>
        </ul>
      `,
      // instancePage: {
      //   label: 'Place',
      //   description: `
      //     <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      //       Events refer to various activities related to Manuscripts and Actors. Event
      //       types include Production, Transfer of Custody, and Activity events.
      //       Production events refer to the production of the physical manuscript.
      //       Transfer of Custody events indicate a change of ownership that involved
      //       a transaction of some kind, usually through an auction house or bookseller.
      //       The generic Activity event type covers all other types of events.
      //     </p>
      //   `
      // },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Name',
          description: `
            Preferable place label.
          `
        },
        home1930: {
          label: 'Hometown 1930',
          description: `
            Hometown 1930 description.
          `
        },
        home1937: {
          label: 'Hometown 1937',
          description: `
            Hometown 1937 description.
          `
        }
      }
    },
    clientFSPlaces: {
      label: 'ClientFS',
      shortDescription: 'Client-side faceted search',
      datasets: {
        kotus: {
          label: 'Names Archive of the Institute for the Languages of Finland (NA)',
          aboutLink: 'https://nimiarkisto.fi/wiki/Nimiarkisto:Tietoja'
        },
        pnr: {
          label: 'Finnish Geographic Names Registry (PNR)',
          aboutLink: 'https://www.maanmittauslaitos.fi/kartat-ja-paikkatieto/asiantuntevalle-kayttajalle/tuotekuvaukset/nimisto'
        },
        warsa_karelian_places: {
          label: 'Karelian map names (KK)',
          aboutLink: 'https://www.suomi.fi/palvelut/verkkoasiointi/vanhat-karjalan-kartat-maanmittauslaitos/f51d72a2-510c-4c34-bb3e-b752f5d38250'
        },
        tgn: {
          label: 'The Getty Thesaurus of Geographic Names (TGN)',
          aboutLink: 'http://www.getty.edu/research/tools/vocabularies/tgn/about.html'
        }
      },
      facetResultsType: '',
      inputPlaceHolder: 'Search place names',
      searchByArea: 'Search by area',
      searchByAreaTitle: `
        Siirrä karttanäkymä tutkittavalle alueelle, aseta zoomaustasoksi 
        vähintään 11 ja käytä alareunan hakupainiketta.
      `,
      searchByAreaCancel: 'Cancel',
      searchByAreaSearch: 'Search',
      properties: {
        datasetSelector: {
          label: 'Choose dataset(s)',
          description: 'Description'
        },
        prefLabel: {
          label: 'Name',
          description: 'Description'
        },
        broaderTypeLabel: {
          label: 'Type',
          description: 'Description'
        },
        broaderAreaLabel: {
          label: 'Area',
          description: 'Description'
        },
        modifier: {
          label: 'Modifier',
          description: 'Description'
        },
        basicElement: {
          label: 'Base',
          description: 'Description'
        },
        collectionYear: {
          label: 'Year',
          description: 'Description'
        },
        source: {
          label: 'Source',
          description: 'Description'
        }
      }
    }
  },
  aboutThePortalPartOne: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      About the Portal
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Morbi nunc ex, ultrices vitae molestie eu, fringilla quis dolor. Vivamus in enim nibh. 
      Nunc rutrum molestie ex eget dictum. Mauris lectus leo, ultrices in sodales ac, fermentum 
      ut massa. In porta, mauris sed facilisis lacinia, eros magna sollicitudin tortor, quis venenatis 
      nisl ipsum lacinia justo. Duis pretium bibendum consequat. 
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In 
      hac habitasse platea dictumst. Curabitur consectetur aliquet est, ac dapibus ante semper vitae. 
      Sed consequat at est ac lobortis. In vitae metus in ligula pretium vehicula. Aliquam maximus 
      ac massa euismod eleifend. Vestibulum vehicula mattis libero at tempus.
    </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Data
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Nullam eu blandit ex, quis consectetur enim. Nulla aliquam, enim non euismod tincidunt, 
      neque eros tincidunt urna, eget elementum diam metus vel elit. Donec dui augue, vehicula a cursus ut, 
      efficitur eget velit. Aliquam pellentesque odio vel metus sodales tempor. Donec in lectus magna. 
      Cras at odio a libero laoreet viverra nec sed lorem. In malesuada tempus dolor. 
      Suspendisse et ligula quis nisi facilisis maximus. Sed dictum justo eu condimentum efficitur. 
      Mauris porttitor ante nec auctor vulputate. Phasellus varius, odio sed egestas bibendum, 
      dolor lacus consequat turpis, ac pulvinar libero lorem maximus nunc. Praesent egestas volutpat 
      leo, vel faucibus dui convallis sed. Ut sed libero eu nisi accumsan mollis. Pellentesque 
      ultricies est non porta luctus. Maecenas eget viverra mauris.
    </p>
    `,
  aboutThePortalPartTwo: `
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Mauris porttitor ante nec auctor vulputate. Phasellus varius, odio sed egestas bibendum, 
      dolor lacus consequat turpis, ac pulvinar libero lorem maximus nunc. Praesent egestas volutpat 
      leo, vel faucibus dui convallis sed. Ut sed libero eu nisi accumsan mollis. Pellentesque 
      ultricies est non porta luctus. Maecenas eget viverra mauris.
      </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Data Reuse
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Nullam eu blandit ex, quis consectetur enim. Nulla aliquam, enim non euismod tincidunt, 
      neque eros tincidunt urna, eget elementum diam metus vel elit. Donec dui augue, vehicula a cursus ut, 
      efficitur eget velit. Aliquam pellentesque odio vel metus sodales tempor. Donec in lectus magna. 
      Cras at odio a libero laoreet viverra nec sed lorem. In malesuada tempus dolor. 
      Suspendisse et ligula quis nisi facilisis maximus. Sed dictum justo eu condimentum efficitur. 
      Mauris porttitor ante nec auctor vulputate. Phasellus varius, odio sed egestas bibendum, 
      dolor lacus consequat turpis, ac pulvinar libero lorem maximus nunc. Praesent egestas volutpat 
      leo, vel faucibus dui convallis sed. Ut sed libero eu nisi accumsan mollis. Pellentesque 
      ultricies est non porta luctus. Maecenas eget viverra mauris.
    </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      More Information
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Nullam eu blandit ex, quis consectetur enim. Nulla aliquam, enim non euismod tincidunt, 
      neque eros tincidunt urna, eget elementum diam metus vel elit. Donec dui augue, vehicula a cursus ut, 
      efficitur eget velit. Aliquam pellentesque odio vel metus sodales tempor. Donec in lectus magna. 
      Cras at odio a libero laoreet viverra nec sed lorem. In malesuada tempus dolor. 
      Suspendisse et ligula quis nisi facilisis maximus. Sed dictum justo eu condimentum efficitur. 
      Mauris porttitor ante nec auctor vulputate. Phasellus varius, odio sed egestas bibendum, 
      dolor lacus consequat turpis, ac pulvinar libero lorem maximus nunc. Praesent egestas volutpat 
      leo, vel faucibus dui convallis sed. Ut sed libero eu nisi accumsan mollis. Pellentesque 
      ultricies est non porta luctus. Maecenas eget viverra mauris.
    </p>
  `,
  instructions: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Instructions
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The search functionality of this semantic portal is based on the
      <a href="https://doi.org/10.2200/S00190ED1V01Y200904ICR005" target='_blank' rel='noopener noreferrer'>
      faceted search</a> paradigm. By default each perspective displays
      all results from the corresponding class.
      This default result set can be narrowed down by using the filters on the left.
    </p>

    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Using a single filter
    </h2>

    <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      Selecting values within a filter
    </h3>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      All possible values for a filter are displayed either as a list or as a hierarchical
      tree structure (if available). The number of results is shown in brackets for each value.
      Once a value is selected, the results are automatically updated. To prevent further
      selections that do not return any results, also the possible values for all
      other filters are updated at the same time.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Multiple values can be selected within a single filter. Selecting multiple values
      generates results that contain any of the selected values. For example, selecting
      both <i>Saint Augustine</i> and <i>Saint Jerome</i> as an Author returns results that
      include either <i>Saint Augustine</i> <strong>OR</strong> <i>Saint Jerome</i> as an Author.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Selected values of a filter appear in the Active filters section at the top of the list
      of filters. To deselect a filter, click the X mark next to it within the Active filters
      section. You can also deselect a filter value by unchecking the checkmark in the
      filter’s value list. The Active filters section only appears if there are filter
      values currently selected.
    </p>

    <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      Searching within a filter
    </h3>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Search within a filter by using the search field at the top of each filter.
      All possible values of a filter remain visible at all times. The values of
      the filter that match the search term are indicated by a purple underline.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Steps for searching within filters:
    </p>
    <ol class="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom">
      <li>
        Type search term into search field. If there are matches, a number
        will appear to the right of the search field, indicating the number
        of filter values that match the search term.
      </li>
      <li>
        Click the arrows to the right of the search field to cycle
        through the results. As you click the arrow, a different filter value
        will appear at the top of the list. Matched filters are underlined in
        purple.
      </li>
      <li>
        Click the checkmark next to a filter value to activate it. The results
        (and also other filters) are automatically updated.
      </li>
    </ol>

    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Using multiple filters simultaneously
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The effectiveness of faceted search is realized when multiple filters are
      applied at the same time. As in many e-commerce sites, a logical AND is
      always used between the filters. For example selecting <i>Saint Augustine </i>
      and <i>Saint Jerome</i> as an Author and <i>Sir Thomas Phillipps</i> and
      <i> Thomas Thorpe</i> as an Owner, the results are narrowed down as follows:
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
      (Author: <i>Saint Augustine</i> <strong>OR</strong> Author: <i>Saint Jerome</i>)
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
        <strong>AND</strong>
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
      (Owner: <i>Sir Thomas Phillipps</i> <strong>OR</strong> Owner: <i>Thomas Thorpe</i>)
    </p>
  `,
  feedback: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Feedback
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      This semantic portal has been developed by ...
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      We are interested in your feedback on the functionality, coverage, and usefulness of the portal and its data.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Please complete our
      <a href="" target='_blank' rel='noopener noreferrer'>Feedback Survey Form (add link).</a>
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      You can also contact us via email: ... or DM us on Twitter: ...
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Please be aware that this portal’s response times may be affected by the size and complexity
      of the underlying knowledge graph.
    </p>
    `
}
