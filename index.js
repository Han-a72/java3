function checkYear (year){
    if(
year%4 ===0 && year %100 !==0 || year%400===0)
{
    return('this is leap year')
}

else {
    return('this is not leap year')
}
 
 

}
console.log(checkYear(2024))

//part 2

for (let year=2014; year<=2050; year++){
    let date = new Date (year,0,1);
    if (date.getDay()===0){
        console.log(`its january 1st sunday in  ${year}`);
    }
}
// part3

for (let i =0; i<=15; i++){
    if (i%2==0)
        console.log( i  +  'is even')
    else {
        console.log( i   +  'is odd')
    }
}
//part4
function isPalindrome(str) {
    
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    
    let reversedStr = cleanedStr.split('').reverse().join('');

    return cleanedStr === reversedStr;
}


console.log(isPalindrome("level")); 
console.log(isPalindrome("mom")); 
console.log(isPalindrome("hello")); 
console.log(isPalindrome("people")); 