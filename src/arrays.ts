import { isNumericLiteral } from "typescript";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should be
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const clonedNumbers = [...numbers];
    //Works
    if (clonedNumbers.length === 1) {
        clonedNumbers.push(clonedNumbers[0]);
        return clonedNumbers;
    }
    //Works
    if (clonedNumbers.length === 0) {
        return [];
        // eslint-disable-next-line brace-style
    } //doesn't work
    else {
        return clonedNumbers.filter(
            (item: number): boolean =>
                clonedNumbers[0] === item ||
                clonedNumbers[clonedNumbers.length - 1] === item
        );
    }
    return clonedNumbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((number: number): number => number * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const toInt = numbers.map((item: string): number =>
        Number.isInteger(parseInt(item))
            ? parseInt(item)
            : parseInt((item = "0"))
    );
    return toInt;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removeSign = amounts.map((item: string): string =>
        item[0] === "$" ? item.substring(1) : item
    );
    const toInt = removeSign.map((item: string): number =>
        Number.isInteger(parseInt(item))
            ? parseInt(item)
            : parseInt((item = "0"))
    );
    return toInt;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const removeQuestion = messages.filter(
        (item: string): boolean => item[item.length - 1] !== "?"
    );
    const exclaim = removeQuestion.map((item: string): string =>
        item[item.length - 1] === "!" ? item.toUpperCase() : item
    );
    return exclaim;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.reduce(
        (total: number, word: string) =>
            word.length < 4 ? (total += 1) : (total += 0),
        0
    );
    return shortWords;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    return colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (total: number, num: number) => (total += num),
        0
    );
    return sum.toString() + "=" + addends.join("+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let newArr: number[] = [];
    let sum = 0;
    const negative = values.findIndex((val: number): boolean => val < 0);
    if (negative === -1) {
        if (values.length === 0) {
            return [0];
        }
        sum = values.reduce((current: number, val: number) => current + val);

        newArr = [...values, sum];
    } else {
        if (negative !== 0) {
            const sliced = values.slice(0, negative);

            sum = sliced.reduce(
                (current: number, val: number) => current + val
            );
        }

        newArr = [...values];

        newArr.splice(negative + 1, 0, sum);
    }
    return newArr;
}
