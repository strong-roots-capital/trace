const test = require("node:test");
const assert = require("node:assert/strict");

/**
 * Unit under test
 */

import { trace } from "../src/trace";

test("should return given value", () => {
  const value = 1;
  assert.equal(trace(console.log)(value), value);
});

test("should return given value when provided tag", () => {
  const value = 1;
  assert.equal(trace(console.log, "tag")(value), value);
});
