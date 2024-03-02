/**
 * @param {Array.<(number|string)>} formula - Formula to evaluate.
 * @returns {number}
 */
export default function simplify(formula) {

  const calculatorOperations = [
    '*',
    '/',
    '+',
    '-'
  ];

  if (formula.length == 1 && !isNaN(formula[0])) {
    let [output] = formula;
    return output;
  };

  let lhsIndex, rhsIndex;
  /**
   * @type {number}
   */
  let operatorIndex;
  for (const operator of calculatorOperations) {
    operatorIndex = formula.findIndex(element => element == operator);
    if (operatorIndex != -1) {
      lhsIndex = operatorIndex - 1;
      rhsIndex = operatorIndex + 1;
      break;
    }
  }

  const operator = formula[operatorIndex];
  const lhs = formula[lhsIndex];
  const rhs = formula[rhsIndex];

  const result = evaluate(operator, lhs, rhs);

  let newLHS = formula.slice(0, lhsIndex);
  let newRHS = formula.slice(rhsIndex + 1);
  let newFormula = newLHS.concat(result).concat(newRHS);

  return simplify(newFormula);

}
/**
  * @param {string} op - Operator expressed as a symbol. Expects *, /, +, -
  * @param {number} lhs - Left hand side of expression
  * @param {number} rhs - Right hand side of expression
  */
function evaluate(op, lhs, rhs) {
  switch (op) {
    case '*':
      return lhs * rhs;
    case '/':
      return lhs / rhs;
    case '+':
      return lhs + rhs;
    case '-':
      return lhs - rhs;
    default:
      break;
  }
}

// simplify([1, "+", 2])
// simplify([1, 2])
// simplify([1, 2, "+", "+"])
// simplify([10, "*", 5, "+", 2])
// simplify([5, "+", 11, '*', 100]);
// console.log(simplify([10, "*", "5", "*", 5]))
