module.exports = {
  "modulePathIgnorePatterns": [
    // Will work because it's pointing to an *npm module*.
    "<rootDir>/example",
    // Will not work because this is just another js file.
    "woot",
  ],
  "testEnvironment": "node",
  "testRegex": "/__tests__/.*-test\\.js$",
  "timers": "fake",
};
