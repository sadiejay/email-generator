// Goals
    // log input of first, last and domain name
    // remove any whitespace
    // change input to lower case
    // create different combos of first + last
        // firstlast 
            // -- no regex(?) needed
        // first.last 
            // -- insert '.' between inputs
        // first
            // -- only keep first name input
        // flast
            // -- use regex to match first character => add character to last name input
    // append domain name to the end of the different combos
    // display all the different combos
    // copy option for each individual combo

// remove whitespace
const removeWhitespace = (str) => {
    let wsRegex = /\s/g;
    let noWhiteSpace = str.replace(wsRegex, "");
    return noWhiteSpace;
}
removeWhitespace(" Jo Ann ");
console.log(removeWhitespace("  Jo Ann  "));

// change to lowercase
const lowerCase = (str) => {
    let textLowerCase = str.toLowerCase();
    return textLowerCase;
}
console.log(lowerCase("JoAnn"))

// log input
const submitButton = document.querySelector('.submit-button');
const output = document.querySelector('.output');
const firstNameInput = document.querySelector('.first-name');
const lastNameInput = document.querySelector('.last-name');
const domainNameInput = document.querySelector('.domain-name');
let inputArray = [];

submitButton.addEventListener('click', function (e){
    e.preventDefault();
    // focus on inputs (maybe a do while or for each loop?)
    firstNameInput.focus();
    lastNameInput.focus();
    domainNameInput.focus();
    // create variable for each input value
    let firstNameValue = firstNameInput.value;   
    let lastNameValue = lastNameInput.value;   
    let domainNameValue = domainNameInput.value;   
    // validate input?
        // new function
    //  push values to array?
    inputArray.push(firstNameValue);
    inputArray.push(lastNameValue);
    inputArray.push(domainNameValue);
    // clear values
    //  firstNameValue = '';
    //  lastNameValue = '';   
    //  domainNameValue = '';

    return inputArray
});
console.log(inputArray);