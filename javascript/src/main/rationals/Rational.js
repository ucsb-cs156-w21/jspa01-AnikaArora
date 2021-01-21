import { gcd, lcm } from "./Helpers";

export default class Rational {
  constructor(numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
      throw new Error(
        `Incorrect types passed to Rational constructor; got ${typeof numerator} and ${typeof denominator}`
      );
    }

    this.numerator = Math.trunc(numerator);
    this.denominator = Math.trunc(denominator);
    if (this.denominator === 0) {
	throw new Error("error message goes here");
    }
    if (this.numerator < 0 && this.denominator < 0) {
	this.numerator *= -1;
	this.denominator *= -1;
    }
    if (this.numerator > 0 && this.denominator < 0) {
        this.numerator *= -1;
        this.denominator *= -1;
    }
    if (this.numerator !== 0) {
      const greatestCommonDivisor = gcd(this.numerator, this.denominator);
      this.numerator /= greatestCommonDivisor;
      this.denominator /= greatestCommonDivisor;
    }
  }

    toString() {
    const numerator = this.numerator;
    const denominator = this.denominator; 
    var num = numerator.toString();
    var den = denominator.toString();
	var result = num + '/' + den; 
	return result; 
    }

  plus(other) {
    Rational.verifyIsRational(other);
    if (this.numerator === 0)
      return new Rational(other.numerator, other.denominator);
    if (other.numerator === 0)
      return new Rational(this.numerator, this.denominator);

    const numGCD = gcd(this.numerator, other.numerator);
    const denomGCD = gcd(this.denominator, other.denominator);

    const numerator =
      (this.numerator / numGCD) * (other.denominator / denomGCD) +
      (other.numerator / numGCD) * (this.denominator / denomGCD);
    const denominator = lcm(this.denominator, other.denominator);

    return new Rational(numerator, denominator);
  }

  static sum(first, second) {
    Rational.verifyIsRational(first);
    Rational.verifyIsRational(second);

    return first.plus(second);
  }

  times(other) {
      if (this.numerator === 0 || other.numerator === 0 || this.denominator === 0 || other.denominator === 0) {
	  return new Rational(0,1); 
      }
      const numerator = (this.numerator * other.numerator);
      const denominator = (this.denominator * other.denominator);
      
      return new Rational(numerator,denominator); 
  }

  static multiply(first, second) {
      //if (first === 0 || second === 0) {
         //return new Rational(0,1); 
      //}
      Rational.verifyIsRational(first);
      Rational.verifyIsRational(second);
      return first.times(second); 
  }

  minus(other) {
      if (this.denominator === other.denominator) {
	  const numerator = (this.numerator - other.numerator);
	  return new Rational(numerator,this.denominator); 
      }
      else if (this.denominator > other.denominator) {
	  const denominator = this.denominator;
	  const numerator = (this.numerator-(other.numerator*this.denominator));
	  return new Rational(numerator,denominator); 
      }
      else {
	  const denominator = other.denominator;
	  const numerator = ((this.numerator*other.denominator)-other.numerator);
	  return new Rational(numerator,denominator); 
      }
  }

  static subtract(first, second) {
      Rational.verifyIsRational(first);
      Rational.verifyIsRational(second);
      return first.minus(second); 
  }

  reciprocal() {
      if (this === 0) {
	  throw new Error("error message");
      }
      else {
	  return new Rational(this.denominator,this.numerator); 
      }
  }

  dividedBy(other) {
      const numerator = this.numerator*other.denominator;
      const denominator = this.denominator*other.numerator;
      return new Rational(numerator,denominator); 
  }

  static quotient(first, second) {
      Rational.verifyIsRational(first);
      Rational.verifyIsRational(second);
      return first.dividedBy(second);
  }

  static verifyIsRational(object) {
    if (!(object instanceof Rational)) {
      throw new Error(`Not a Rational object; instead was ${object.__proto__}`);
    }
    return true;
  }
}
