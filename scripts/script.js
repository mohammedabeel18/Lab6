/****************** YOUR NAME: Asma Akbar

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE
// Select the elements by their IDs and store them in variables
const modelText = document.getElementById('model-text');
const durationText = document.getElementById('duration-text');

// Initialize variables to hold the values for modelName and duration
let modelName = modelText.innerText; // Using innerText to automatically trim whitespace
let duration = parseInt(durationText.innerText); // Parse the duration text to an integer

// Output the initial values to the console
console.log("Initial modelName:", modelName);
console.log("Initial duration:", duration);




/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE
function recalculate() {
    // Create a variable to represent the calculated-cost span element
    let costLabel = document.getElementById("calculated-cost");

    // Check the value of the modelName variable and calculate the new total cost
    let totalCost;
    if (modelName === "Model XYZ") {
        totalCost = duration * 100;
    }
    else if (modelName === "Model CPRG") {
        totalCost = duration * 213;
    }
    else {
        // Handle unknown modelName
        costLabel.innerHTML = "N/A"; // Set to a default value if modelName is unknown
        return;
    }

    // Set the value of the calculated-cost element's innerHTML to the new total cost
    costLabel.textContent = totalCost.toString(); // Convert to string
}





/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */


// INSERT YOUR CODE HERE


// Define the function to change the model
function changeModel() {
    // Get the model-text span element
    const modelText = document.getElementById("model-text");

    // Check the current modelName and update accordingly
    if (modelName === "Model XYZ") {
        modelName = "Model CPRG";
        modelText.innerHTML = "Model CPRG";
    } else if (modelName === "Model CPRG") {
        modelName = "Model XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    // Recalculate the total cost
    recalculate();
}

const modelButton = document.getElementById("model-button");

modelButton.addEventListener("click", changeModel);




/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE


// Define the function to change the duration
function changeDuration() {
    // Get the duration-text span element
    const durationText = document.getElementById("duration-text");

    // Prompt the user for a new duration
    let newDuration = prompt("Enter new duration:");

    // Parse the input to ensure it's a valid number
    newDuration = parseInt(newDuration);

    // Check if the input is a valid number
    if (!isNaN(newDuration) && newDuration >= 0) {
        // Update the duration variable
        duration = newDuration;

        // Update the innerHTML of the duration-text span element
        durationText.innerHTML = duration;

        // Recalculate the total cost
        recalculate();
    }
    else {
        // If the input is not a valid number or negative, inform the user
        alert("Please enter a valid positive number for the duration.");
    }
}

// Attach the changeDuration function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked
const durationButton = document.getElementById("duration-button");
durationButton.addEventListener("click", changeDuration);


