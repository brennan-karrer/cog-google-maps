import Ember from 'ember';

// Core //
import coreMain from 'cog-google-maps/mixins/g-maps/core/main';
import twoWayLatLng from 'cog-google-maps/mixins/g-maps/core/two-way-lat-lng';
import twoWayZoom from 'cog-google-maps/mixins/g-maps/core/two-way-zoom';
import twoWayDraggable from 'cog-google-maps/mixins/g-maps/core/two-way-draggable';
import twoWayDisableDoubleClickZoom from 'cog-google-maps/mixins/g-maps/core/two-way-disable-double-click-zoom';
import twoWayScrollWheel from 'cog-google-maps/mixins/g-maps/core/two-way-scroll-wheel';
import twoWayZoomControl from 'cog-google-maps/mixins/g-maps/core/two-way-zoom-control';
import twoWayScaleControl from 'cog-google-maps/mixins/g-maps/core/two-way-scale-control';
import twoWayMapType from 'cog-google-maps/mixins/g-maps/core/two-way-map-type';
import twoWayMapTypeControl from 'cog-google-maps/mixins/g-maps/core/two-way-map-type-control';
import twoWayStyles from 'cog-google-maps/mixins/g-maps/core/two-way-styles';

// Map Childs //
import gMapCircles from 'cog-google-maps/mixins/g-maps/circles';
import gMapMarkers from 'cog-google-maps/mixins/g-maps/markers';
import gMapPolygons from 'cog-google-maps/mixins/g-maps/polygons';
import gMapOverlays from 'cog-google-maps/mixins/g-maps/overlays';
import gMapPolylines from 'cog-google-maps/mixins/g-maps/polylines';
import gMapRectangles from 'cog-google-maps/mixins/g-maps/rectangles';

// Extensions //
import gMapHeatmap from 'cog-google-maps/mixins/g-maps/heatmap';
import gMapSelections from 'cog-google-maps/mixins/g-maps/selections';

export default Ember.Component.extend(
  gMapCircles,
  gMapMarkers,
  gMapPolygons,
  gMapOverlays,
  gMapPolylines,
  gMapRectangles,
  gMapSelections,
  gMapHeatmap,
  twoWayLatLng,
  twoWayZoom,
  twoWayDraggable,
  twoWayDisableDoubleClickZoom,
  twoWayScrollWheel,
  twoWayZoomControl,
  twoWayScaleControl,
  twoWayMapType,
  twoWayMapTypeControl,
  twoWayStyles,
  coreMain
);
