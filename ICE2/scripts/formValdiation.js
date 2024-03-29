console.log("formValidation.js loaded");

/**
 * Validate the email address
 * @param {string} email    the email address to validate
 * @returns {boolean}        to indicate if the email is valid
 */
function validateEmailAddressSimple(emailString) {
    console.log('in ValidateEmailAddress');

    // check for @ sign
    let atSymbol = emailString.indexOf('@');
    if(atSymbol < 1) return false;

    let dot = emailString.indexOf('.');
    if(dot <= atSymbol + 2) return false;

    // check that the dot is not at the end
    if (dot === emailString.length - 1) return false;

    return true;
}

/*
 * Validate the email address
* @param {string} emailString
* @returns {boolean}    validation result
*/
function validateEmailAddressRegex(emailString) {
    //the regular expression to validate the email address for string+string|number bewten 2-20 characters
    // note the / and / at the beginning and end of the expression
    var emailRegex = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;

    //return true if the email address is valid - how to use regex
	return !!emailString && typeof emailString === 'string'
		&& emailString.match(emailRegex);
}
/*
 * Validate the username using a regular expression
 * @param {string} username   ------> the username to validate
 * @returns {boolean}         ------> if the username is valid
 */




//TODO:
// Make all fields required (HTML)
// Add a pattern attribute in the telephone element (HTML)
// Ensure the password is redacted into dots on screen when typed in (HTML)
// Create a function that knows if the username is valid (feel free to grab some RegEx from the Interwebs - cite source and test it!)
// If it is not valid, be sure to update the #generalError <p></p> with a good error message and some highlighting (red background, maybe?)
// Validate the username when the form is submitted
// Clear any additional error message and highlighting when the form is reset
// COMMENT EVERYTHING :D
/*
 * Validate the username using a regular expression
 * @param {string} username   ------> the username to validate
 * @returns {boolean}         ------> if the username is valid
 */
function validateUsername(username) {
    // Regular expression for a valid username
    // Note: This is just an example. You might need to adjust it based on your specific requirements.
    var usernameRegex = /^[a-z0-9_-]{3,15}$/;

    // Get the #generalError element
    var generalError = document.getElementById('generalError');

    
    clearError(generalError);

    
    if (!!username && typeof username === 'string' && username.match(usernameRegex)) {
        return true;
    } else {
        // Update the error message and apply highlighting
        generalError.innerHTML = "Invalid username. Please use only lowercase letters, numbers, hyphens, and underscores (3-15 characters).";
        generalError.style.backgroundColor = 'red';
        return false;
    }
    
}

// Function to clear error message and highlighting
function clearError(element) {
    element.innerHTML = '';
    element.style.backgroundColor = '';
}
