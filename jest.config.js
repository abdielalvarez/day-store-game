module.exports = {
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
      '^.+\\.scss$': 'jest-transform-scss',
    },
    collectCoverageFrom: [
      'src/**/*.js',
    ],
    coveragePathIgnorePatterns: [
      '/node_modules/',
      'src/reportWebVitals.js',
      'src/setupTests.js',
      'src/tests/',
      '\\.jpg$',
      '\\.png$',
      '\\.svg$',
      '\\.scss$',
    ],
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|svg|scss)$': '<rootDir>/src/utils/file.js',
    },
    testEnvironment: 'jsdom',
    coverageThreshold: {
      global: {
        statements: 60,
        branches: 60,
        functions: 60,
        lines: 60,
      },
    }
  }