const calculateExpression = (input) => {
  const operators = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  const applyOperation = (operator, a, b) => {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        return 0;
    }
  };

  const parseExpression = (input) => {
    const nums = [];
    const ops = [];
    let num = "";

    for (let i = 0; i < input.length; i++) {
      const ch = input[i];

      // Build the current number (including decimal support)
      if (!isNaN(ch) || ch === ".") {
        num += ch;
      } else if (ch in operators) {
        // If it's an operator
        if (num !== "") {
          nums.push(Number(num)); // Push the collected number to the nums stack
          num = ""; // Reset the number buffer
        }

        // While there are operators with higher or equal precedence on the ops stack, apply them
        while (ops.length && operators[ops[ops.length - 1]] >= operators[ch]) {
          const operator = ops.pop(); // Pop the operator
          const b = nums.pop(); // Second operand
          const a = nums.pop(); // First operand
          nums.push(applyOperation(operator, a, b));
        }

        ops.push(ch);
      }
    }

    if (num !== "") {
      nums.push(Number(num));
    }

    // Apply the remaining operations in the ops stack
    while (ops.length) {
      const operator = ops.pop();
      const b = nums.pop();
      const a = nums.pop();
      nums.push(applyOperation(operator, a, b));
    }

    return nums[0]; // The result is the last number in the nums stack
  };

  return parseExpression(input); // Parse and calculate the input expression
};

// Example usage
const input = "2+2-1"; // You can change this expression to test others
const result = calculateExpression(input);
console.log("Result:", result);
