/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

function reverse(str: string): string {

    let reverseString: string = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
    
    return reverseString;
}

export { reverse };
