import Rational from "main/rationals/Rational";

const parseRationalsFromUserInput = (userInput) => {
    const rationals = userInput.map((value) => {
    const numerator = parseInt(value.numerator);
    const denominator = parseInt(value.denominator);
	//return new Rational(numerator, denominator);
	if (isNaN(numerator) || isNaN(denominator)) {
	    throw "error message";
	}
	return new Rational(numerator,denominator); 
    }); 
  return rationals;
};

const addRationalsFromUserInput = (userInput) => {
  const [firstRational, secondRational] = parseRationalsFromUserInput(
    userInput
  );

  const result = Rational.sum(firstRational, secondRational);

  return result;
};

const subtractRationalsFromUserInput = (userInput) => {
    const [firstRational, secondRational] = parseRationalsFromUserInput(
    userInput
  );

  const result = Rational.subtract(firstRational, secondRational);

  return result;
};

const multiplyRationalsFromUserInput = (userInput) => {
    const [firstRational, secondRational] = parseRationalsFromUserInput(userInput);
    const result = Rational.multiply(firstRational,secondRational); 
    console.log(result.toString());
    return result; 
};

const divideRationalsFromUserInput = (userInput) => {
  const [firstRational, secondRational] = parseRationalsFromUserInput(userInput);
    const result = Rational.quotient(firstRational,secondRational);

    if (secondRational.numerator === 0) {
	throw "error message"; 
    }
    return result; 
};

export {
  addRationalsFromUserInput,
  subtractRationalsFromUserInput,
  multiplyRationalsFromUserInput,
  divideRationalsFromUserInput,
  parseRationalsFromUserInput,
};
