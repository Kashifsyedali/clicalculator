#!/usr/bin/env node
// import inquirer from "inquirer";
// const answer = await inquirer.prompt([
//   { message: "Enter First Number", type: "number", name: "firstNumber" },
//   { message: "Second First Number", type: "number", name: "secondNumber" },
//   {
//     message: "Select One Of The Operator To Perform Operation",
//     type: "list",
//     name: "operator",
//     choices: ["Addition", "Subtraction", "Multiplication", "division"],
//   },
// ]);
// if (answer.operator === "Addition") {
//   console.log(answer.firstNumber + answer.secondNumber);
// } else if (answer.operator === "Subtraction") {
//   console.log(answer.firstNumber - answer.secondNumber);
// } else if (answer.operator === "Multiplication") {
//   console.log(answer.firstNumber * answer.secondNumber);
// } else if (answer.operator === "Division") {
//   console.log(answer.firstNumber / answer.secondNumber);
// } else {
//   console.log("Please Select Valid Operator");
// }
// import inquirer from "inquirer";
// const answer = await inquirer.prompt([
//   { message: "Enter First Number", type: "number", name: "firstNumber" },
//   { message: "Enter Second Number", type: "number", name: "secondNumber" },
//   {
//     message: "Select One Of The Operator To Perform Operation",
//     type: "list",
//     name: "operator",
//     choices: ["Addition", "Subtraction", "Multiplication", "Division"],
//   },
// ]);
// if (answer.operator === "Addition") {
//   console.log(answer.firstNumber + answer.secondNumber);
// } else if (answer.operator === "Subtraction") {
//   console.log(answer.firstNumber - answer.secondNumber);
// } else if (answer.operator === "Multiplication") {
//   console.log(answer.firstNumber * answer.secondNumber);
// } else if (answer.operator === "Division") {
//   console.log(answer.firstNumber / answer.secondNumber);
// } else {
//   console.log("Please Select The Correct Operator");
// }
import inquirer from "inquirer";
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([
        { message: "Enter First Number", type: "number", name: "firstNumber" },
        { message: "Enter Second Number", type: "number", name: "secondNumber" },
        { message: "Select One Of The Operator To Perform Operation", type: "list", name: "operator", choices: [
                "Addition",
                "Subtraction",
                "Multiplication",
                "Division",
            ] },
    ]);
    const num1 = answer.firstNumber;
    const num2 = answer.secondNumber;
    const operator = answer.operator;
    console.log(num1, num2, operator);
    if (num1 && num2) {
        if (operator === "Addition") {
            console.log(`\n the answer of ${num1} + ${num2} = ${num1 + num2}`);
        }
        else if (operator === "Subtraction") {
            console.log(`\n the answer of ${num1} - ${num2} = ${num1 - num2}`);
        }
        else if (operator === "Multiplication") {
            console.log(`\n the answer of ${num1} * ${num2} = ${num1 * num2}`);
        }
        else if (operator === "Division") {
            console.log(`\n the answer of ${num1} / ${num2} = ${num1 / num2}`);
        }
        else {
            console.log("Please Select The Corerct Operator");
        }
    }
    else {
        console.log("Please Select The Valid Number");
    }
    const moreCalculate = await inquirer.prompt({ message: "Do You Want More Calculation",
        type: "confirm",
        name: "more",
        default: false
    });
    if (!moreCalculate.more) {
        loop = false;
        console.log("Thank You");
    }
}
