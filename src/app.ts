import { extractNumbers } from "./parser.js";
import { add } from "./math.js";
import { validateNumber, validateStringNotEmpty } from "./util/validation.js";
import { transformToNumber } from "./util/numbers.js";

const form = document.querySelector("form")!;
const output = document.getElementById("result")!;

function formSubmitHandler(event: any) {
  event.preventDefault();

  const formData: FormData = new FormData(form);
  const numberInputs = extractNumbers(formData);

  let result = "";

  try {
    const numbers = [];
    for (const numberInput of numberInputs) {
      validateStringNotEmpty(numberInput);
      const number = transformToNumber(numberInput);
      validateNumber(number);
      numbers.push(number);
    }
    result = add(numbers).toString();
  } catch (error: any) {
    result = error.message;
  }

  let resultText = "";

  if (result === "invalid") {
    resultText = "Invalid input. You must enter valid numbers.";
  } else if (result !== "no-calc") {
    resultText = "Result: " + result;
  }

  output.textContent = resultText;
}

form.addEventListener("submit", formSubmitHandler);
