/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  count(str: string): {[key: string]: number} {

    let result: {[key: string]: number} = {};
    
    const splitInWords: string[] = str
      .toLowerCase()
      .split(/[ \n\t]/g)
      .filter((word) => word);

    splitInWords.forEach((word) => {
      result[word] = +result[word] ? result[word] + 1 : 1;
    });

    return result;
  }
}

export { Words };
