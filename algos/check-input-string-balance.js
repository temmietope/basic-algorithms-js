// Check if given expression is balanced expression or not

// Given a string containing opening and closing braces, check if it represents a balanced expression or not.

// For example,

// {[{}{}]}[()], {{}{}}, []{}() are balanced expressions.

// {()}[), {(}) are not balanced

const openTypes = ["(", "{", "["];
const complement = [")", "}", "]"];

const checkBalance = (input) => {
  console.log(input);
  let stack = [];
  for (i = 0; i < input.length; i++) {
    let currentValue = input[i];
    if (stack.length === 0 && complement.includes(currentValue)) {
      return false;
    } else if (openTypes.includes(currentValue)) {
      stack.push(currentValue);
    } else {
      let peek = stack[stack.length - 1];
      if (openTypes.indexOf(peek) === complement.indexOf(currentValue)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length) {
    return false;
  } else {
    return true;
  }
};

checkBalance("{[{}{}]}[()]");

// EXPECTED RESULT: true
