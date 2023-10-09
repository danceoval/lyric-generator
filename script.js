document.addEventListener("DOMContentLoaded", function() {
    const textInput = document.getElementById("textInput");
    const submitButton = document.getElementById("submitButton");
    const output = document.getElementById("output");

    submitButton.addEventListener("click", function() {
        const text = textInput.value.trim();

        if (text !== "") {
            const p = document.createElement("p");
            p.textContent = generateLyrics(text, 5);
            output.appendChild(p);
            textInput.value = ""; // Clear the textarea
        }
    });
});

function assembleVerse(){
    let verse = []
    for(var i = 0; i < 6; i++) {
        let len = Math.floor(Math.random() * 25) + 5;
        let line = writeLine(len)
        verse.push(line)
    }
    return verse
  }
  

function  parseText(text){
    return text
            .toLowerCase()
            .replace(/[^a-z\s]/ig, "")
            .split(' ');
  }

function generateWordpairs(corpus) {
    // Our object that has word pairs stored as an object
    let wordpairs = {};

    // Get all the words in our corpus, we lowercase it and replace non-word characters
    // To increase our chance of finding matching pairs
    let words = parseText(corpus);

    // For every word
    for (let i = 0; i < words.length - 1; i++) {
      let currentWord = words[i];
      let nextWord = words[i+1];

      if (wordpairs[currentWord]) {
        // We've seen this word before
        wordpairs[currentWord].push(nextWord);
      }
      else {
        wordpairs[currentWord] = [nextWord];
      }
    }

    return wordpairs;
}


function  randomlyChoose(line){
    return line[(Math.floor(Math.random() * line.length))]
  }

function writeLine(corpus, min_length) {
    let words = parseText(corpus);
    let wordpairs = generateWordpairs(corpus);
    let word = randomlyChoose(words);
    let phrase = [word]; // start the phrase

    while(wordpairs[word]) {
        let next_words = wordpairs[word];
        word = randomlyChoose(next_words);
        phrase.push(word);

        if(phrase.length > min_length) {
            break;
        }
    }

    return phrase.join(' ');
}

function generateLyrics(corpus, lines) {
    let lyrics = ''
    for(let i = 0; i < lines; i++) {
        let l = Math.floor(Math.random() * 10) + 1;
        lyrics += writeLine(corpus, l);
    }
    return lyrics
}