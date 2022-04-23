/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name
 * like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string): string {
  const acronym: string = input
    .replace("-", " ")
    .replace(/[_']/g, "")
    .split(" ").map(a => a[0])
    .join("").toUpperCase();
  return acronym;
}

export { parse };
