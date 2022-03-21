# Email Generator

A email generator to make prospecting less typeout emails then check and more copy and paste then check.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Input name and company domain name
- View mulitple email combinations for input on screen

### Screenshot


### Links

- Repo URL: [https://github.com/sadiejay/email-generator](https://github.com/sadiejay/email-generator)
- Live Site URL: [https://sadiejay.github.io/email-generator/](https://sadiejay.github.io/email-generator/)

## My process
- Built out basic HTML structure
- Added rough logic with vanilla js
  - JS logic is becoming a little easier for me. However, I can see where some for loops could be useful.
    - my first iteration I'm creating p tags in HTML for each output variation, when I would like to let js add different nodes within a div tag by intaking the 3 possible parameters then running through all of the outputs and displaying within the screen.
    - but I want to get it to work first then I'll go back and clean it up.
    - Second interation I used `createElement` which reduces the amount of hard coding needed!
- Next steps:
  - Combine all of the functions in a big one?
  - Figure out the reload situation
    - react? 👀
  - Add some design elements
### Built with

- Semantic HTML5 markup
- JS


### What I learned


- `createElement()` and `appendChild`
- It's ok to iterate!!
  - hard coding the p tags first then using js to dynamically render the inputs allowed me to continue progressing on the project as opposed to getting overwhelmed and giving up.

  #### code snippets


### Continued development

- I think this could be a nice simple project for react or svelte as well.
  - I would like a panel that shows the last 10 outputs
    - That could use the
  - A form that would allow bulk inputs.
    - That sounds like the inputs would directly populate an array. Then for each through the array and map (maybe) the outputs and display them.

- I'd love to figure out how to validate the emails before leaving this page.
  - I'm thinking it's some sort of API?

- Needs some design attention
### Useful resources

- [Regexr](https://regexr.com/) - Regex testing
- [JS .toLowerCase](https://www.w3schools.com/jsref/jsref_tolowercase.asp)
- [Temporarily Ignoring Files](https://gitready.com/intermediate/2009/02/18/temporarily-ignoring-files.html) - Super handy for keeping files (looking at you README) untracked while making changes continuously using `git update-index --assume-unchanged <file>` and `git update-index --no-assume-unchanged <file>` to start tracking again.
- [Halloween Word Guess](https://github.com/sadiejay/halloween-word-guess) - Helpful to see how to handle inputs
- [How To Remove Character From String In JavaScript](https://appdividend.com/2022/02/14/javascript-remove-character-from-string/) - For the fLast output. Struggling to understand how to remove all but the first character with slice.
- [How to replace/delete all BUT the first character in a string](https://stackoverflow.com/questions/34214644/how-to-replace-delete-all-but-the-first-character-in-a-string) - I can't believe how simple this is and that I struggled for a while to figure it out.
- [Document.createElement() MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) - I know it's possible to create a node and then append which I think I could do with some logic.

## Author

- Github - [@sadiejay](https://github.com/sadiejay)
- Frontend Mentor - [@sadiejay](https://www.frontendmentor.io/profile/sadiejay)

## Acknowledgments

- 
