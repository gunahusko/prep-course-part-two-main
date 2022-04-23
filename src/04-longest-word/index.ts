/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sen: string): string {

    let longestW: string = "";
    const splitSen: string[] = sen.replace(/[^\w\s]/g, "").split(" ");

    for(let i = 0; i < splitSen.length; i++) {
        if (longestW.length < splitSen[i].length) {
           longestW = splitSen[i];
        }
    }
    
    return longestW;
}

export { longestWord };
