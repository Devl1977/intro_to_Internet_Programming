// YOU have to use a HOF.

// 1. Write a function that takes a string parameter, and it console "YES" if the string,
// contains 'y' other wise it console "NO".
// Example - 'Crazyy'

function checkForY(enterString) {
    if (enterString.includes('y')) {
        console.log('YES');
    } else {
        console.log('NO');
    }

}

checkForY("crazyy")

//-----------------------------------------------------------------------------------------


// 2. Write a function that finds a factorial of a number.
// Example - 5! = 120 (Use a normal loop for this one.)

// function getFactorial(num) {
// logic
// return the value;
// }


function getFactorial(num) {
    if (num < 0) {
        return 'We are not doing negative numbers today.. please try again.';
    } else if (num === 0 || num === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }
}

console.log(getFactorial(5))


//-----------------------------------------------------------------------------------------


//3. You have an array of students
// let studentList = [
//   { name: "Mike", marks: [80, 50, 60, 100] },
//   { name: "Daniel", marks: [40, 50, 100, 100] },
//   {
//     name: "Stacy",
//     marks: [20, 100, 50, 70],
//   },
// ];

// function getHighestAverageStudent() {
    // returns the student name with highest average marks
// }


// **** This one confused the hell out of me so i had to look it a few things on why my code wasn't working.
// ****Apparently i needed to set my value to a -1 so that it's lower than any potential average?  I don't understand why though.

let studentList = [
    { name: "Mike", marks: [80, 50, 60, 100] },
    { name: "Daniel", marks: [40, 51, 100, 100] },
    { name: "Stacy", marks: [20, 100, 50, 70] }
];


function findStudentWithHighestAverage(studentList) {
    let highestAverage = -1; // This right here.  If i left it at 0 it doesn't work.  
    let studentWithHighestAverage = '';

    for (const student of studentList) {
        const totalMarks = student.marks.reduce((sum, mark) => sum + mark, 0);
        const average = totalMarks / student.marks.length;

        if (average > highestAverage) {
            highestAverage = average;
            studentWithHighestAverage = student.name;
        }
    }

    return studentWithHighestAverage;
}

// since we're not trying to enter a name or a variable you're just wantint to find out from the list who has the highest
// average so I just created a const variable and set the function to it.  

const highestAverageStudent = findStudentWithHighestAverage(studentList);
console.log(`Student with the highest average marks: ${highestAverageStudent}`);



//-----------------------------------------------------------------------------------------

//4. HARD Question - You have to write a function that has the highest number of occurrences
// [ 20, 4, -10, 4, 11, 20, 4, 2]; // 4


//1- use the array given as an example and set a variable to it.
const occurenceArr = [20, 4, -10, 4, 11, 20, 4, 2];
// create the function that we're going to call later.
function mostOccurence(arr) {
    const frequent = arr.reduce((map, num) => {  //using one of the HOF that was requested i think reduce here helps and the arrow function?
        map.set(num, (map.get(num) || 0) + 1);   // Had to look up an example where this would work.  I need a bit more help understanding this
        return map;     // Had to look up an example where this would work.  I need a bit more help understanding this
    }, new Map());      // Had to look up an example where this would work.  I need a bit more help understanding this

//setting the counter to 0 and placing it in a variable where we're going to use in a loop.
    let maxOccurrences = 0;
    let mostOccurence;

//loop for both the number and the count
    for (const [num, count] of frequent) {
        if (count > maxOccurrences) {
            maxOccurrences = count;
            mostOccurence = num;
        }
    }
//return the number that has the most occurances here.
    return mostOccurence;
}
// setting the function to a variable to call it in a console log
const mostFrequent = mostOccurence(occurenceArr);
console.log(`The most frequent number is: ${mostFrequent}`);




//-----------------------------------------------------------------------------------------


//5. You have to write a function that has to find a number which is unique in the array (I.e Only occured once)
// [20, 20, 11, 4, 11, 20, 2, 4]


//creating the array and variable for it
const prabhsArr = [20, 20, 11, 4, 11, 20, 2, 4];
// creating the function that will help with finding the unique number.
function unique(arr) {
    const howManyTimes = arr.reduce((map, num) => {
        map.set(num, (map.get(num) || 0) + 1);  // similar to question 4 Had to look up an example where this would work.  I need a bit more help understanding this
        return map;    // similar to question 4 Had to look up an example where this would work.  I need a bit more help understanding this
    }, new Map());    // similar to question 4 Had to look up an example where this would work.  I need a bit more help understanding this

// like question 4 setting the loop to count the number and keep the count.
    for (const [num, count] of howManyTimes) {
        if (count === 1) {
            return num;
        } 
    }
    //but what if there's no unique number in the array?  setting a message to cover for that.
    return "No unique number found in the array.";
}

//just need to set the variable for the function and then call it in console.log
const uniqueNumber = unique(prabhsArr);
console.log(`The unique number is: ${uniqueNumber}`);




//-----------------------------------------------------------------------------------------

//6. You have an arryay of palindromes and not palindromes,  and you have to return only palindromes array

// ['abc', 'aba', 'ccc', 'dca', 'a']

// ['aba', 'ccc', 'a']

const inputArray = ['abc', 'ABA', 'cCc', 'dca', 'a', 'Abbabba','Level'];

function filterPalindromes(myArr) {
    return myArr.filter(word => isPalindrome(word));
}

function isPalindrome(word) {    
  // figured out after trial and error that we need to have a .tolower because of words like 
  // Level or Racecar..  Just because the first leter is capital doesn't mean it's not a palindrome.
    const toLowerWord = word.toLowerCase();
    const reversedWord = toLowerWord.split('').reverse().join('');
    return toLowerWord === reversedWord;
}

// now we just need to set a variable for the function and call it in a console.log

const palindromes = filterPalindromes(inputArray);
console.log("Palindromes:", palindromes);




