"use strict";

require("./utils/inaccurate-clock")("process.hrtime");

const { clockIsAccurate } = require("../");

beforeAll(() => {
  expect(clockIsAccurate).toBe(false);
});

require("./primitives/global-monotonic-clock")();
require("./primitives/performance-common")();
require("./primitives/performance-integers")();
