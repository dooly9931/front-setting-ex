const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  collectCoverageFrom: ["**/*.{ts,tsx}", "!next-env.d.ts", "!src/pages/_app.tsx"],
  coverageReporters: ["json", "lcov", "text", "text-summary"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  setupFilesAfterEnv: ["<rootDir>/setUpTests.js"],
  snapshotSerializers: ["<rootDir>/node_modules/enzyme-to-json/serializer"],
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
