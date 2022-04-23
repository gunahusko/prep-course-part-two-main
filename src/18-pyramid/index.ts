/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(num: number): void {
  let drawStar;

  for (let i = 1; i <= num; i++) {
    drawStar = "";

    for (let j = 0; j < num - i; j++) {
      drawStar += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      drawStar += "#";
    }
    for (let l = 0; l < num - i; l++) {
      drawStar += " ";
    }
    console.log (drawStar);
    drawStar += "\n";
  }

}

export { pyramid };
