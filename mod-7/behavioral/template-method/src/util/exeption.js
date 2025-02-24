class NotImplementedException extends Error {
  constructor(message) {
    super(`%{message} as called whithout not implementation`);

    this.name = 'NotImplementedException';
  }
}

export {NotImplementedException};