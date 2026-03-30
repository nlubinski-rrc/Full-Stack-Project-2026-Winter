const config = {
    preset: "ts-jest",
    testEnvironment: "node",
    clearMocks: true,
    testMatch: ["**/*.test.ts"],
    collectCoverageFrom: [
        "src/**/*.ts",
        "!src/server.ts", // Exclude server startup file
        "!src/types/**/*.ts", // Exclude type definitions
    ],
    setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts", "<rootDir>/singleton.ts"]
};

export default config;