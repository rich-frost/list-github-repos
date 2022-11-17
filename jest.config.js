module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'tsx', 'json'],
  testEnvironment: 'jsdom',
  moduleNameMapper: { '^.+\\.(css|scss)$': 'babel-jest' },
  coverageDirectory: 'reports',
};
