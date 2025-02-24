export default {
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    coverageReporters: [
      "json", 
      "text",
      "lcov",
      "clover"
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    },
    maxWorkers: "50%",
    testEnvironment: "node",
    watchPathIgnorePatterns: [
        "node_modules"
    ]
}