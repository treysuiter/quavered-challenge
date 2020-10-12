// As an example of your coding approach, I'd like you to write me a function that parses the Preamble to the US Constitution (you can hard-code it as a string) and returns a count of how many words begin with 't', how many end with 'e', and how many begin with 't' and end with 'e'. JavaScript, C#, or Dart would be the preferred languages to accomplish this. I'll leave it to you to determine the best way to submit your work (on a webpage, as an executable, etc). I need to be able to execute what you send me, and see your code generate its answer(s).  And what would be extremely helpful is if you document the problems you ran into along the way and describe how you solved them.

//Hard coded preamble
const us_constitution_preamble = "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America."

//Define function that will return object containing word totals that begin with 't', end with 'e', and begin with 't' and end with 'e'.
function preambleParser(preamble) {

    //Initialize variable for counts
    let begins_with_t = 0
    let ends_with_e = 0
    let begins_t_and_ends_e = 0

    //A little regex to clean the string so I only have letters and spaces remaining
    preamble = preamble.replace(/[^A-Za-z\s]/g, '')

    //Convert string to lower case so I don't have a separate test condition for capitals
    preamble = preamble.toLowerCase()

    //Split string on space into array
    preamble = preamble.split(' ')

    //Loop through array and update counts as matches are found
    preamble.forEach(word => {
        if (word[0] === 't' && word[word.length - 1] === 'e') {
            begins_t_and_ends_e++
            begins_with_t++
            ends_with_e++
        } else if (word[0] === 't') {
            begins_with_t++
        } else if (word[word.length - 1] === 'e') {
            ends_with_e++
        }
    });

    //Returns key value pairs for count totals so values have some context
    return { 'begins_t_and_ends_e': begins_t_and_ends_e, 'begins_with_t': begins_with_t, 'ends_with_e': ends_with_e }
}

//Very Fancy HTML Stuff

document.getElementById('hello-container').innerHTML = `
<h1>Welcome to Trey Suiter's Amazing US Constitution Preamble Word Parser!<h1>

<h2>For those not familiar, the following is the preamble to United States Constitution:</h2>
<p>${us_constitution_preamble}<p>
<p>Would you like to parse it to find out how many words begin with "t", end with "e", as well as begin with "t" and end in "e"?</p>

`

//Button to print parse results to DOM
const parseButton = document.getElementById('button-container')
parseButton.textContent = "Let's Parse!"
//Add event listener to button to display parse results
parseButton.addEventListener("click", () => {
    //Set a reference to object returned by preambleParser()
    let results = preambleParser(us_constitution_preamble)
    document.getElementById("results-container").innerHTML = `     
<div class="results">
    <p>Total words that begin with "t": <b>${results['begins_with_t']}</b></p>
    <p>Total words that end with "e": <b>${results['ends_with_e']}</b></p>
    <p>Total words that begin with "t" and end with "e": <b>${results['begins_t_and_ends_e']}</b></p>
</div>
`
})