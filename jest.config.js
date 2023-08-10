module.exports = {
  preset: 'jest-next',
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};