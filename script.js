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
const firstOnlyOutput = document.querySelector('.first-only');
const firstDotLastOutput = document.querySelector('.first-dot-last');
const firstLastoutput = document.querySelector('.first-last');
const fLastOutput = document.querySelector('.flast');
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

// output combos
// first@domain
const firstNameOnly = (firstNameValue, domainNameValue) => {
    let firstNameOnlyOutput = `${firstNameValue}@${domainNameValue}`;
    firstOnlyOutput.innerText = `${firstNameOnlyOutput}`;
    return firstNameOnly;
}

console.log(firstNameOnly('JoAnn', 'apple.com'));
// first.last@domain
const firstDotLastName = (firstNameValue, lastNameValue, domainNameValue) => {
    let firstDotLastNameOutput = `${firstNameValue}.${lastNameValue}@${domainNameValue}`;
    firstDotLastOutput.innerText = `${firstDotLastNameOutput}`;
    return firstDotLastName;
}

console.log(firstDotLastName('Jo', 'Ann', 'apple.com'));

// firstlast@domain
const firstLastName = (firstNameValue, lastNameValue, domainNameValue) => {
    let firstLastNameOutput = `${firstNameValue}${lastNameValue}@${domainNameValue}`;
    firstLastoutput.innerText = `${firstLastNameOutput}`;
    return firstLastName;
}

console.log(firstLastName('Jo', 'Ann', 'apple.com'));

// flast@domain
const fLastName = (firstNameValue, lastNameValue, domainNameValue) => {
    let firstNameFirstLetter = firstNameValue.slice(0); // should remove all but first character
    let fLastNameOutput = `${firstNameFirstLetter}${lastNameValue}@${domainNameValue}`;
    fLastOutput.innerText = `${fLastNameOutput}`;
    return fLastName;
}

console.log(fLastName('Jo', 'Ann', 'apple.com'));