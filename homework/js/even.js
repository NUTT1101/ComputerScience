/**
 * Get value of id of select element.
 * 
 * @param {string} id id of select element
 * @returns value of id of select element
 */
function getIdSelectorValue(id) {
    return String(document.getElementById(id).value);
}

/**
 * Determine whether input is even.
 * 
 * @param {number} number 
 * @returns is even
 */
function isEven(number) {
    return number % 2 == 0;
}

/**
 * Determine whether input is an integer.
 * 
 * @param {string} input input string
 * @returns is Integer
 */
function isInteger(input) {
    return Boolean(input.match("^([0-9])+$")); 
}

/**
 * 
 * On input column submit.
 *  
 */
function onSubmit() {
    let input = getIdSelectorValue("input");

    if (!isInteger(input)) {
        alert("Please enter a integer!");
        return;
    }

    document.getElementById("output").innerText = input + (isEven(input) ? " is even" : " is not even") + "."; 
}

// Add event listener to element.
document.getElementById("button").addEventListener("click", onSubmit);

