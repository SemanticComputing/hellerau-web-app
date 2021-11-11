import React from 'react'
import PropTypes from 'prop-types'
import intl from 'react-intl-universal'
import { Route, Redirect } from 'react-router-dom'
import PerspectiveTabs from '../../main_layout/PerspectiveTabs'
import ResultTable from '../../facet_results/ResultTable'
// import LeafletMap from '../../facet_results/LeafletMap'
import Deck from '../../facet_results/Deck'
// import Export from '../../facet_results/Export'
import { MAPBOX_ACCESS_TOKEN, MAPBOX_STYLE } from '../../../configs/sampo/GeneralConfig'

const Hellerau = props => {
  const { rootUrl, perspective } = props
  return (
    <>
      <PerspectiveTabs
        routeProps={props.routeProps}
        tabs={props.perspective.tabs}
        screenSize={props.screenSize}
      />
      <Route
        exact path={`${rootUrl}/${perspective.id}/faceted-search`}
        render={() => <Redirect to={`${rootUrl}/${perspective.id}/faceted-search/migrations`} />}
      />
      <Route
        path={[`${props.rootUrl}/${perspective.id}/faceted-search/table`, '/iframe.html']}
        render={routeProps =>
          <ResultTable
            data={props.perspectiveState}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='hellerau'
            facetClass='hellerau'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
            updateRowsPerPage={props.updateRowsPerPage}
            sortResults={props.sortResults}
            routeProps={routeProps}
            rootUrl={rootUrl}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/migrations`}
        render={() =>
          <Deck
            results={props.perspectiveState.results}
            facetUpdateID={props.facetData.facetUpdateID}
            instanceAnalysisData={props.placesResults.instanceAnalysisData}
            instanceAnalysisDataUpdateID={props.placesResults.instanceAnalysisDataUpdateID}
            resultClass='hellerauMigrations'
            facetClass='hellerau'
            fetchResults={props.fetchResults}
            fetchInstanceAnalysis={props.fetchInstanceAnalysis}
            fetching={props.placesResults.fetching}
            fetchingInstanceAnalysisData={props.placesResults.fetchingInstanceAnalysisData}
            layerType='arcLayer'
            getArcWidth={d => d.instanceCountScaled}
            fromText={intl.get('deckGlMap.studentMigrations.from')}
            toText={intl.get('deckGlMap.studentMigrations.to')}
            countText={intl.get('deckGlMap.studentMigrations.count')}
            legendTitle={intl.get('deckGlMap.studentMigrations.legendTitle')}
            legendFromText={intl.get('deckGlMap.studentMigrations.legendFrom')}
            legendToText={intl.get('deckGlMap.studentMigrations.legendTo')}
            showMoreText={intl.get('deckGlMap.showMoreInformation')}
            listHeadingSingleInstance={intl.get('deckGlMap.studentMigrations.listHeadingSingleInstance')}
            listHeadingMultipleInstances={intl.get('deckGlMap.studentMigrations.listHeadingMultipleInstances')}
            showTooltips
            mapBoxAccessToken={MAPBOX_ACCESS_TOKEN}
            mapBoxStyle={MAPBOX_STYLE}
          />}
      />
    </>
  )
}

Hellerau.propTypes = {
  facetResults: PropTypes.object.isRequired,
  placesResults: PropTypes.object.isRequired,
  leafletMapLayers: PropTypes.object.isRequired,
  facetData: PropTypes.object.isRequired,
  fetchResults: PropTypes.func.isRequired,
  clearGeoJSONLayers: PropTypes.func.isRequired,
  fetchGeoJSONLayers: PropTypes.func.isRequired,
  fetchGeoJSONLayersBackend: PropTypes.func.isRequired,
  fetchPaginatedResults: PropTypes.func.isRequired,
  fetchByURI: PropTypes.func.isRequired,
  updatePage: PropTypes.func.isRequired,
  updateRowsPerPage: PropTypes.func.isRequired,
  sortResults: PropTypes.func.isRequired,
  routeProps: PropTypes.object.isRequired,
  updateFacetOption: PropTypes.func.isRequired,
  perspective: PropTypes.object.isRequired,
  animationValue: PropTypes.array.isRequired,
  animateMap: PropTypes.func.isRequired,
  screenSize: PropTypes.string.isRequired,
  rootUrl: PropTypes.string.isRequired,
  showError: PropTypes.func.isRequired
}

export default Hellerau
