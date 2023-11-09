const quoteContainer = document.querySelector("#typing-passage");
const textInput = document.querySelector("#type-input")
const philosopherQuotes = [
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "He who is not a good servant will not be a good master. - Plato",
    "It is the power of the mind to be unconquerable. - Seneca",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Confucius",
    "Knowing yourself is the beginning of all wisdom. - Aristotle",
    "I think, therefore I am. - René Descartes",
    "The unexamined life is not worth living. - Socrates",
    "The function of education is to teach one to think intensively and to think critically. - Martin Luther King Jr.",
    "To live a pure unselfish life, one must count nothing as one's own in the midst of abundance. - Buddha",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt"
];

// Get a random quote
const quote = philosopherQuotes[Math.floor(Math.random() * philosopherQuotes.length)];
const wordList = quote.split(" ");
let currentWord = 0;
let currentletter = 0;
let typedLetter = 0;
textInput.value = ""
//console.log(wordList)
for (let i in wordList) {
    for (let letter in wordList[i]) {
        createDivElement(wordList[i][letter])
    }
    createWhitespace()

}

function createDivElement(letter) {
    const letterDiv = document.createElement('div');
    letterDiv.textContent = letter;
    quoteContainer.appendChild(letterDiv);
}
function createWhitespace() {
    const whitespaceDiv = document.createElement('div');
    whitespaceDiv.innerHTML = "&nbsp;";
    quoteContainer.appendChild(whitespaceDiv);
}

textInput.addEventListener("input", (i) => {
    const currVal = i.data;

    console.log(currVal + "----- " + wordList[currentWord][currentletter])
    if (wordList[currentWord][currentletter] === undefined && isWhitespace(currVal)) {
        currentWord++;
        currentletter = 0;
        typedLetter++;
        handleInputColors(true)
        return;
    }
    if (wordList[currentWord][currentletter] === currVal) {
        currentletter++;
        typedLetter++;
        handleInputColors(true)
    } else {
        currentletter++;
        typedLetter++;
        handleInputColors(false)
        console.log("incorrect")
    }

})
function handleInputColors(flag) {
    const inputDiv = document.querySelectorAll("#typing-passage div");
    inputDiv.forEach((d, index) => {
        if (index === typedLetter - 1) {
            d.classList.remove("is-active")
            flag ? d.classList.add("is-correct") : d.classList.add("is-incorrect");
        }
        if (index === typedLetter) {
            d.classList.add("is-active")
        }
    })

}

function isWhitespace(word) {
    return /^\s*$/.test(word);
}
