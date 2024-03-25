/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@repo/eslint/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
