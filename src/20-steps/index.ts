/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n: number): void {
    if(n > 0) {
      let draw: string = "";

        for (let i = 1; i <= n; i++) {
            for (let j = 0; j < i; j++) {
                draw += "#";
            }
            draw += " ".repeat(n-i);
            draw += "\n"
        }

      console.log(draw);
    }
}

export { steps };
