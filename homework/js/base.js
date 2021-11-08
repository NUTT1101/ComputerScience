document.getElementById("button").addEventListener("click", function(event) {
    onSubmit(event);
});

document.getElementById("input").addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        onSubmit(event);
    }
});

/**
 * Get the value of input column.
 * 
 * @param {string} idSelect element id of the input column. 
 * @returns value of input.
 */
function getIdValue(idSelect) {
    return document.getElementById(idSelect).value;
}

/**
 * When user on input colume press enter or click submit button to call this function.
 * 
 * @param {event} event 
 */
function onSubmit(event) {
    let input = getIdValue("input");
    let select = getIdValue("select");

    if (!isInteger(input)) {
        alert(input + " not a number!");
        return;
    }

    document.getElementById("output").innerText = decimalConvert(input, getConvertBase(select));
}

/**
 * Decimal convert to input base.
 * 
 * ***Only 2, 8, 16 base convert***
 * 
 * @param {number} decimal decimal integer
 * @param {number} base which {number} base that make decimal integer to convert
 * @returns the result of the conversion
 */
function decimalConvert(decimal, base) {
    let hexLib = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let output = Array(0);
    
    for (let i=0; i < 10000; i++) {
        if (Math.pow(base,i+1) > decimal) {
            for (let j=0; j < i + 1; j++) {
                let baseIndex = Math.floor(decimal / Math.pow(base,j)) % base;
                output[j] = base == 16 ? hexLib[baseIndex] : baseIndex;
            }
            return output.reverse().join("");
        }
    }
}

/**
 * Get user select choice and return corresponding base.
 *  
 * ***Only return 2, 8, 16.***
 * 
 * @param {string} select user select choice 
 * @returns which base
 */
function getConvertBase(select) {
    switch (select) {
        case "1":
            return 2;
        case "2":
            return 8;
        case "3":
            return 16;
        default:
            return null;
    }
}

/**
 * Is the result of parameter an integer.
 * 
 * @param {number} number a integer 
 * @returns if parameter is a integer
 */
function isInteger(number) {
    return Boolean((number + "").match("^([0-9])+$"));
}