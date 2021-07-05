// jest.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults } = require('jest-config');
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'ts', 'tsx'],
  setupFilesAfterEnv: ['./enzyme.js'],
  coverageReporters: ['text', 'html'],
  coveragePathIgnorePatterns: ['node_modules', '.next']
};
