it("should block for require('example')", () => {
  expect(() => require('example')).toThrow();
});

it("should NOT block for require('../woot')", () => {
  expect(() => require('../woot/woot')).not.toThrow();
});
