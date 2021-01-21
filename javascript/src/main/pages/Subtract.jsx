/*import React from "react";
// 1
import { subtractRationalsFromUserInput } from "main/utils/RationalHelpers";
import Calculator from "main/components/Calculator";

const Subtract = () => {
  // 2
  const props = {
    // 3
    calculateFromUserInput: subtractRationalsFromUserInput,
    title: "Subtract",
    subtitle:
      "Fill in the numerator and denominator of two rational numbers (fractions) below, then click the Calculate button to see the result.",
    sign: "-",
  };
  // 4
  return <Calculator {...props} />;
};

export default Subtract;
*/

import React from "react";
import { subtractRationalsFromUserInput } from "main/utils/RationalHelpers";
import Calculator from "main/components/Calculator";

const Subtract = () => {
  const props = {
    calculateFromUserInput: subtractRationalsFromUserInput,
    title: "Subtract",
    subtitle:
      "Fill in the numerator and denominator of two rational numbers (fractions) below, then click \
the Calculate button to see the result.",
    sign: "-",
  };

  return <Calculator {...props} />;
};

export default Subtract;

