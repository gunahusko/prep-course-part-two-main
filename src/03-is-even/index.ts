/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */
const evenNumbers: string[] = ["0", "2", "4", "6", "8"]

function isEven(n: number): boolean {

 const removeAfterDot: number =  Math.trunc(n);
 const numberToString: string = removeAfterDot.toString().charAt(removeAfterDot.toString().length-1);
 return evenNumbers.indexOf(numberToString) > -1;
 
}

export { isEven };
