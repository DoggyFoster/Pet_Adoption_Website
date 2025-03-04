module.exports = {
  tabWidth: 2,
  useTabs: false, // Similar to `UseTab: ForIndentation` (Prettier doesn't support conditional tab usage)
  bracketSpacing: true, // Ensures spacing inside object literals like `{ key: value }`
  braceStyle: "stroustrup", // Similar to `BreakBeforeBraces: Custom` with some wrapping
  printWidth: 80, // Default, can adjust if needed
  semi: true, // Ensures consistency with Clang's formatting of statements
  singleQuote: false, // Matches C++ style (Prettier defaults to double quotes for JS)
  trailingComma: "none", // Similar to Clang-Format not enforcing trailing commas
  arrowParens: "always", // Explicit parenthesis for arrow functions, similar to structured formatting
};

