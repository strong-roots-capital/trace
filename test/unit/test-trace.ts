import test from 'ava'

/**
 * Unit under test
 */

import { trace } from '../../src/trace'

test('should return given value', (t) => {
  const value = 1
  t.is(trace(console.log)(value), value)
})

test('should return given value when provided tag', (t) => {
  const value = 1
  t.is(trace(console.log, 'tag')(value), value)
})
