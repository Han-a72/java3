// Leap Year Checker
function checkLeapYear() {
    let year = document.getElementById('yearInput').value;
    let result = checkYear(year);
    document.getElementById('leapYearResult').textContent = result;
}

function checkYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return 'This is a leap year';
    } else {
        return 'This is not a leap year';
    }
}

// part2
function findSundays() {
    let result = '';
    for (let year = 2014; year <= 2050; year++) {
        let date = new Date(year, 0, 1);
        
        if (date.getDay() === 0) {
            result += `It's January 1st Sunday in ${year}<br>`;
        }
    }
    document.getElementById('sundayResult').innerHTML = result;
}

// part3
function evenOdd() {
    let result = '';
    for (let i = 0; i <= 10; i++) {
        if (i % 2 == 0) {
            result += `<li>${i} is even</li>`;
        } else {
            result += `<li>${i} is odd</li>`;
        }
    }
    document.getElementById('evenOddResult').innerHTML = result;
}

// Part4
function checkPalindrome() {
    let inputStr = document.getElementById('palindromeInput').value;
    let result = isPalindrome(inputStr) ? `${inputStr} is a palindrome` : `${inputStr} is not a palindrome`;
    document.getElementById('palindromeResult').textContent = result;
}

function isPalindrome(str) {
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
