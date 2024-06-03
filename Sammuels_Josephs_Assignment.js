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


// I couldn't figure this question out.  I know you could possible use map but looking things up online they are suggesting we use things i // do not believe we've gone over yet?  Max occurrences and most frequent element????  
// Yeah i didn't even know where to begin with this one.  I think we could start the function off like:

function findMostFrequentElement(arr) {
    const frequencyNum = new Map();
}

// but then where to go from here?  create a loop of some sort for an array of items that you can intake?  I was so lost.




//-----------------------------------------------------------------------------------------


//5. You have to write a function that has to find a number which is unique in the array (I.e Only occured once)
// [20, 20, 11, 4, 11, 20, 2, 4]


// Same for question 5.  It would be similar to the question 4.  Unfortunately i saw the answer after i attempted it and i only got as far // as question 4 before looking it up.  I did not understand the solution so i will not be adding it as an answer.  

function findUniqueNumber(arr) {
    const uniqueNum = new Map();
}



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




