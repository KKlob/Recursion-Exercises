/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1;

  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0) {
  if (i === words.length) return 0;

  return (words[i].length > longest(words, i + 1)) ? words[i].length : longest(words, i + 1);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  if (i >= str.length) return "";

  let newStr = str[i] + everyOther(str, i + 2);
  return newStr;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0, j = (str.length - 1)) {
  if (i === str.length) return false;
  // two comparisons are on the same letter, is palindrome
  if (i === j || j < i) return true;

  return (str[i] === str[j]) ? isPalindrome(str, i + 1, j - 1) : false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i === arr.length) return -1;

  return (arr[i] === val) ? i : findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = (str.length - 1)) {
  if (i === -1) return "";

  let newStr = str[i] + revString(str, i - 1);
  return newStr;
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, i = 0) {
  const keys = Object.keys(obj);
  let array = [];
  for (let key of keys) {
    if (typeof (obj[key]) === 'string') {
      array.push(obj[key]);
    } else if (typeof (obj[key]) === 'object') {
      array = array.concat(gatherStrings(obj[key]));
    }
  }
  return array;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, i = 0, j = (arr.length - 1)) {
  if (arr.length === 0) return -1;
  if (val < arr[0]) return -1;
  if (val > arr[arr.length - 1]) return -1;

  let midInd = Math.floor((i + j) / 2);
  if (arr[midInd] === val) return midInd;
  if (arr[i] === val) return i;
  if (arr[j] === val) return j;
  if (j < i) return -1;

  if (val > arr[midInd]) return binarySearch(arr, val, midInd + 1, j);
  if (val < arr[midInd]) return binarySearch(arr, val, i, midInd - 1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
