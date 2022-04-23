/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

const vowelsChar: string[] = ["a", "e", "i", "o", "u"];

function vowels(s: string): number {

    let countVowels: number = 0;
    const chars: string[] = s.toLowerCase().split("");

    for(let i = 0; i < chars.length; i++) {
        for(let j = 0; j < vowelsChar.length; j++ )
            if(chars[i] == vowelsChar[j]) countVowels++;
    }
    
    return countVowels;
}

export { vowels };
