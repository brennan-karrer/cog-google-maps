import Ember from 'ember';
import loadGoogleMaps from '../../../../cog-google-maps/utils/load-google-maps';

const { $, assert } = Ember;
const EMBER_CLI_GMAPS_SELECTOR = '.cog-google-map';

export default function(app, selector = EMBER_CLI_GMAPS_SELECTOR) {
  return new Ember.Test.promise(function(resolve, reject) {
    Ember.Test.adapter.asyncStart();

    loadGoogleMaps()
    .then(() => {
      Ember.run.scheduleOnce('afterRender', () => {
        const $map = $(selector);
        assert(`No cog-google-maps component found at selector: ${selector}`, !$map.length || !$map.eq(0).hasClass(EMBER_CLI_GMAPS_SELECTOR));

        google.maps.event.addListenerOnce($map.get(0).__GOOGLE_MAP__, 'tilesloaded', () => {
          Ember.run(resolve);
          Ember.Test.adapter.asyncEnd();
        });
      });
    })
    .catch(() => {
      reject();
      Ember.Test.adapter.asyncEnd();
    });
  });
}
