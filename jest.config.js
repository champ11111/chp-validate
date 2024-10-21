module.exports = {
  preset: "ts-jest", // Tells Jest to use ts-jest for TypeScript
  testEnvironment: "node", // Specifies the test environment (Node.js)
  moduleFileExtensions: ["ts", "js"], // Recognize both TypeScript and JavaScript files
  transform: {
    "^.+\\.ts?$": "ts-jest", // Use ts-jest to transform .ts files
  },
  testMatch: ["**/tests/**/*.test.ts"], // Specifies where your test files are located
};
