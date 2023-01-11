const typeError = (message) => {
  throw new TypeError(message);
}

const refError = (message) => {
  throw new ReferenceError(message);
}

const syntaxError = (message) => {
  throw new SyntaxError(message);
}