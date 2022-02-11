// Goals
    // log input of first, last and domain name
        // firstlast
        // first.last
        // first
        // flast
    // remove any whitespace
    // change input to lower case
    // create different combos of first + last
        // no regex(?) needed
        // insert '.' between inputs
        // only keep first name input
        // use regex to match first character => add character to last name input
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
