// Define constants and import classes from index.html
const hex = [0, 1, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const colour = document.querySelector('.colour');


// Changes the background colour when the button is clicked
btn.addEventListener('click', function() {
    let hexColour = '#'
    for (let i = 0; i < 6; i++) {
        hexColour += hex[getRandomNumber()];
    }
    colour.textContent = hexColour;
    document.body.style.backgroundColor = hexColour;
});


// Generates a random number up to the length of the colours array
getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
}
