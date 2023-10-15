document.addEventListener("DOMContentLoaded", function() {
    const textInput = document.getElementById("textInput");
    const submitButton = document.getElementById("submitButton");
    const output = document.getElementById("output");

    submitButton.addEventListener("click", function() {
        const text = textInput.value.trim();

        if (text !== "") {
            const div = document.createElement("div");
            div.innerHTML = text;
            output.appendChild(div);
            textInput.value = ""; // Clear the textarea
        }
    });
});

/*
Turns a single line of text into an array of lower-case strings,
with special characters removed
*/
function  parseText(text){ 
    return text
            .toLowerCase()
            .replace(/[^a-z\s]/ig, "")
            .split(' ');
}

// Your code below

/*
 Creates an "Markov Chain" representation of a song's lyrics.
 This consists of an object, with a key for each individual lyric in the song.
 Values for each key is a list of strings for each lyric that follows the key
 
 Example
 lyrics = 'It was the best of times, it was the worst of times'

 output = {
  'it' : ['was'],
  'was' : ['the'],
  'the' : ['best'] ,
  'best' : ['of' ],
  'of' : ['best', 'worst'],
  'times' : ['it'],
  'worst' : ['of']
 }
*/
function generateWordpairs(lyrics) {
    return; 
}

/*
 Given the object returned from generateWordPairs,
 Write a line of generated lyrics, of length len
*/
function writeLine(wordpairs, len) {
    return;
}

/*
Given a long string representing lyrics to a song,
generate a mock verse `len` lines long using individual words in the lyrics
*/
function generateLyrics(lyrics, len) {
    return;
}