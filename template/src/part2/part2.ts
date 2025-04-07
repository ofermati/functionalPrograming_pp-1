import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
const isVowels: (x: string) => boolean= (x:string) => vowels.includes(x.toLowerCase()); //toLowerCase() does not affect the value of the string str itself.
const process: (x: string) => number = R.pipe( 
    stringToArray,
    R.filter(isVowels),
    R.length //R.reduce((acc:number, s:string) => acc + 1, 0 ) אפשר גם ככה אבל פחות יעיל
)
export const countVowels: (x:string) => number = (x:string) :number => process(x);

/* Question 2 */
const isAlphaNumeric: (char: string) => boolean = (char) =>
    /[a-zA-Z0-9]/.test(char);

const normalizeString: (s: string) => string[] = R.pipe(
    stringToArray,
    R.filter(isAlphaNumeric),
    R.map(R.toLower),
)

const checkPalindrome = (arr: string[]): boolean =>
    arr.reduce((acc, char, i) => acc && (char === arr[arr.length - 1 - i]), true);

export const isPalindrome: (s:string) => boolean = (s:string) :boolean => checkPalindrome(normalizeString(s)); 
  
/* Question 3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence: (w: WordTree) => string = (w: WordTree): string =>
    w.children.length === 0
      ? w.root
      : [w.root, ...w.children.map(treeToSentence)].join(" ");