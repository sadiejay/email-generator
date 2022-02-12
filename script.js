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

submitButton.addEventListener('click', function (e){
    e.preventDefualt();
    // focus on inputs (maybe a do while or for each loop?)
    // create variable for each input value

});