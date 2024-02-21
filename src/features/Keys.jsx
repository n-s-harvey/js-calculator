// @ts-check

export default class Keys {
  static symbols = new Map([
    ["divide", "/"],
    ["multiply", "*"],
    ['add', '+'],
    ['subtract', '-'],
    ['decimal', '.']
  ]);
  /**
   * Check if a given symbol is a valid calculator operation.
   * @param {String} key - Value to compare to calculator symbols.
   * @returns {Boolean}
   */
  static check(key) {
    for (const iterator of Keys.symbols) {
      if (key == iterator[1]) return true;
    }
    return false;
  }
}
