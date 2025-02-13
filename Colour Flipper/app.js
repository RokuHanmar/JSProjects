// Define constants and import classes from index.html
const colours = ["green", "red", "rgba(133,122,200)", "#F15025"];
const btn = document.getElementById('btn');
const colour = document.querySelector('.colour');

// Changes the background colour when the button is clicked
btn.addEventListener('click', function(){
    // TODO: Generate random number between 0 and 3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colours[randomNumber];
    colour.textContent = colours[randomNumber];
})

// Generates a random number up to the length of the colours array
getRandomNumber = () => {
    return Math.floor(Math.random() * colours.length);
}
