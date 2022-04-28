module.exports = {
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  testEnvironment: "node",
  moduleNameMapper: {
    "^@src(.*)$": "<rootDir>/src$1",
    "^@helpers(.*)$": "<rootDir>/src/helpers$1",
  },
}
