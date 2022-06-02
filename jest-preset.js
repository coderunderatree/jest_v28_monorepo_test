const path = require('path');

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
    testEnvironment: 'jsdom',

    // booleans
    clearMocks: true,
    resetMocks: true,

    /**
     * TODO: understand why setting resetModules: true doesn't generate any
     * 'v8' coverage for packages
     */
    resetModules: true,

    // file extensions and test paths
    testMatch: ['**/*.test.[jt]s?(x)'],

    // transform paths and module name mapper
    transform: {
        '^.+\\.jsx?$': ['babel-jest', { rootMode: 'upward' }],
    },

    // coverage
    collectCoverage: true,
    collectCoverageFrom: ['**/*.{js,ts,tsx,jsx}'],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/coverage/',
        'jest.config.js',
        'jest-preset.js',
        'babel.config.js',
    ],
    coverageProvider: 'v8',
    coverageReporters: ['json', 'html', 'text', 'lcov']
};
