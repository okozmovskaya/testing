/* to test if two arrays contain the same entries
  you need to check each and every entry separately!
  JavaScript does not have a native way to do this

  this process is called deep comparing
*/

const expected = [4, 100, null, 'hi!'];

const firstArr = [4, 100, null, 'hi!'];
const secondArr = [4, 'null', 'good bye'];

// you can do it manually, but that's a very bad idea
//  way too many ways to make a mistake
//  and it's not practical for large arrays
const manualCheckFirst = firstArr[0] === expected[0]
  && firstArr[1] === expected[1]
  && firstArr[2] === expected[2]
  && firstArr[3] === expected[3];
console.assert(manualCheckFirst, 'Compare first (manual)');

const manualCheckSecond = secondArr[0] === expected[0]
  && secondArr[1] === expected[1]
  && secondArr[2] === expected[2]
  && secondArr[3] === expected[3];
console.assert(manualCheckSecond, 'Compare second (manual)');

/* more commonly you will use a function that does this for you
  the function below will compare each item in an array
    returns true if the arrays are deeply equal
    returns false if they are not
  don't worry about understanding this function, just use it for now
    it's written for (relatively) easy studying in debugger & js tutor
    HINT: use breakpoints to skip past lines that call deepCompareArrays
  soon you'll learn to deep compare with a professional assertion library (chai)
*/
const deepCompareArrays = (actual, expect) => actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompareArrays(actual[index], expect)));

const deepCompareFirst = deepCompareArrays(firstArr, expected);
console.assert(deepCompareFirst, 'Compare first (with function)'); // break point here

const deepCompareSecond = deepCompareArrays(secondArr, expected);
console.assert(deepCompareSecond, 'Compare second (with function)'); // break point here
