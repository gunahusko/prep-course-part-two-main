/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the
 * second largest number.
 */

function secondLargest(array: number[]): number {
  return array.sort((num1, num2) => num2-num1)[1];
}

export { secondLargest };
