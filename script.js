// =========================================================================
// Part 1: Learning the basics
// =========================================================================

// this is a variable for my age
let age = 25;

// this is a constant that doesn't change
const legalDrivingAge = 16;

// I'm using an if statement to check if I can drive
if (age >= legalDrivingAge) {
    // if my age is 16 or more, this code runs
    console.log(`Part 1: You are ${age} years old, which is old enough to drive.`);
} else {
    // if my age is less than 16, this code runs
    console.log(`Part 1: You are ${age} years old, which is not old enough to drive.`);
}


// =========================================================================
// Part 2: Functions
// =========================================================================

// this function adds two numbers together
function calculateSum(a, b) {
    return a + b;
}

// this function asks me for my age and tells me if I can drive
function checkUserAge() {
    // prompt shows a box where I can type something
    const userAge = prompt("Please enter your age:");
    const ageAsNumber = parseInt(userAge);

    // here I check the age again
    if (ageAsNumber >= legalDrivingAge) {
        alert(`You are ${ageAsNumber} years old. You are old enough to drive!`);
    } else if (ageAsNumber > 0) {
        alert(`You are ${ageAsNumber} years old. You are not old enough to drive yet.`);
    } else {
        // this is for when I type something that isn't a number
        alert("Invalid age entered. Please try again.");
    }
}

// I'm calling the function here to get the total
const total = calculateSum(10, 5);
console.log(`Part 2: The sum of 10 and 5 is ${total}.`);


// =========================================================================
// Part 3: Loops
// =========================================================================

// this is a list of movies
const movies = ["The Matrix", "Inception", "Arrival", "Interstellar"];
// I'm getting the list container from the HTML
const listContainer = document.getElementById('list-container');
const movieList = document.createElement('ul');

// this is a for loop that goes through my list of movies
for (let i = 0; i < movies.length; i++) {
    const listItem = document.createElement('li');
    // setting the text of the list item
    listItem.textContent = movies[i];
    // adding the new item to the list
    movieList.appendChild(listItem);
}
// putting the whole movie list into the page
listContainer.appendChild(movieList);

// this is a while loop for counting down
let countdown = 3;
console.log("Part 3: Starting countdown...");
// the code inside this loop runs as long as countdown is bigger than 0
while (countdown > 0) {
    console.log(countdown);
    countdown--; // this makes the number go down by one
}
console.log("Countdown finished!");


// =========================================================================
// Part 4: Working with the webpage (the DOM)
// =========================================================================

// I'm getting a button and a text element from the HTML
const changeTextBtn = document.getElementById('changeTextBtn');
const domText = document.getElementById('domText');

// this makes something happen when I click the button
changeTextBtn.addEventListener('click', () => {
    // this changes the text of the element
    domText.textContent = 'This text has been changed by JavaScript!';
});


// I'm getting another button and a box
const toggleClassBtn = document.getElementById('toggleClassBtn');
const contentBox = document.querySelector('.content-box');

// this makes it so when I click, it toggles a class
toggleClassBtn.addEventListener('click', () => {
    // this line adds or removes the 'highlight' class
    contentBox.classList.toggle('highlight');
});


// I'm getting the button to add a list item and the list itself
const addListItemBtn = document.getElementById('addListItemBtn');
const dynamicList = document.getElementById('dynamicList');

// this makes something happen when I click the add item button
addListItemBtn.addEventListener('click', () => {
    // creating a new list item
    const newItem = document.createElement('li');
    // giving the new item text
    newItem.textContent = `New Item #${dynamicList.children.length + 1}`;
    // adding the new item to the end of the list
    dynamicList.appendChild(newItem);
});


// this is the button that runs the age check function from Part 2
const checkAgeBtn = document.getElementById('checkAgeBtn');
checkAgeBtn.addEventListener('click', checkUserAge);
