/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string): string {

    let findMaxChar: string = "";
    
    str.split("").forEach((char) => {

        if (str.split(char).length > 0) {
            findMaxChar = char;
        } 

    });

    return findMaxChar;
}

export { maxChar };
