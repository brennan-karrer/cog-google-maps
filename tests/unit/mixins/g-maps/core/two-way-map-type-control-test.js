import Ember from 'ember';
import twoWayMapTypeControlMixin from 'cog-google-maps/mixins/cog-google-maps/core/two-way-map-type-control';
import { module, test } from 'qunit';

module('Unit | Mixin | g maps/core/two way map type control');

test('_bindMapTypeControlToMap should not update map if `isMapLoaded` = false', function(assert) {
  const twoWayMapTypeControlObject = Ember.Object.extend(twoWayMapTypeControlMixin);
  const subject = twoWayMapTypeControlObject.create();

  subject.setProperties({ showMapTypeControl: false, isMapLoaded: false });
  assert.equal(subject._bindMapTypeControlToMap(), false, 'should return false if cannot sync');
});

test('_bindMapTypeControlToMap observer should update map if `isMapLoaded` = true', function(assert) {
  assert.expect(1);

  const twoWayMapTypeControlObject = Ember.Object.extend(twoWayMapTypeControlMixin);
  const subject = twoWayMapTypeControlObject.create();

  subject.setProperties({
    showMapTypeControl: false,
    isMapLoaded: false,
    map: {
      map: {
        setOptions: function(option) {
          assert.equal(option.mapTypeControl, subject.get('showMapTypeControl'), 'should recieve `subject.showMapTypeControl`');
        }
      }
    }
  });

  subject.set('isMapLoaded', true);
});
