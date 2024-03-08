// @ts-check

/**
 * Contains properties for multiplication, division, addition, and subtraction.
 */
export default class Operators {
  static multiply = '×';
  static divide = '÷';
  static add = '+';
  static subtract = '-';
  /**
    * Array with order of operations. 0 is the highest priority, 3 is the lowest priority.
    * @type {Array<string>}
    */
  static order = [
    Operators.multiply,
    Operators.divide,
    Operators.add,
    Operators.subtract
  ];
  /**
   * Check if the given string is an operator.
   * @param {String} string
   */
  static includes(string) {
    return Operators.order.includes(string);
  }
}
