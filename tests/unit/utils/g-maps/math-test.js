import { areCoordsEqual } from 'cog-google-maps/utils/cog-google-maps/math';
import { module, test } from 'qunit';

module('Unit | Utility | g maps/math');

test('areCoordsEqual should correctly compare 2 numbers within 12 digits', function(assert) {
  assert.ok(areCoordsEqual(4.234234232324, 4.2342342323235555));
});
