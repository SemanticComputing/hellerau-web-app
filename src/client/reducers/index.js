import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
// general reducers:
import error from './general/error'
import options from './general/options'
import animation from './general/animation'
import leafletMap from './general/leafletMap'
// portal spefic reducers:
import fullTextSearch from './sampo/fullTextSearch'
import clientSideFacetedSearch from './sampo/clientSideFacetedSearch'
import hellerau from './hellerau/hellerau'
import hellerauFacets from './hellerau/hellerauFacets'
import hellerauFacetsConstrainSelf from './hellerau/hellerauFacetsConstrainSelf'
import places from './hellerau/places'

const reducer = combineReducers({
  hellerau,
  hellerauFacets,
  hellerauFacetsConstrainSelf,
  places,
  leafletMap,
  animation,
  options,
  error,
  clientSideFacetedSearch,
  fullTextSearch,
  toastr: toastrReducer
})

export default reducer
