const {
  isLetter,
  isWhitespace,
  isNumber,
  isParenthesis,
  isQuote,
} = require('./identity')

const tokenize = input => {
  const tokens = []
  let cursor

  while (cursor < input.length) {
    cursor++
  }

  return tokens
}

module.exports = {tokenize}
