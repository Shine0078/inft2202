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
function validateUsername(username) {
 
    var usernameRegex = /^[a-z0-9_-]{3,15}$/;
    //Refernces on cite Regex ="https://ihateregex.io/expr/username/"
    return !!username && typeof username === 'string'
        && username.match(usernameRegex);
}



/** 
 * Validate the form when submitted
 * @returns {boolean} - Indicates if the form is valid
 */
function validateForm() {
    // Clear any previous errors and highlighting
    clearErrors();

    // Validate email
    const emailInput = document.getElementById("email");
    if (!validateEmailAddressRegex(emailInput.value)) {
        updateErrorMessage("Invalid email address.");
        highlightError();
        return false;
    }

    // Validate username
    const usernameInput = document.getElementById("username");
    if (!validateUsername(usernameInput.value)) {
        updateErrorMessage("Invalid username.");
        highlightError();
        return false;
    }

    return true;
}


function clearErrors() {
    const generalError = document.getElementById("generalError");
    generalError.innerText = "";
    generalError.classList.remove("highlight-error");
}

/**
 * Update the #generalError <p></p> with an error message
 * @param {string} message - The error message to display
 */
function updateErrorMessage(message) {
    const generalError = document.getElementById("generalError");
    generalError.innerText = message;
}

/**
 * Highlight the #generalError with a red background
 */
function highlightError() {
    const generalError = document.getElementById("generalError");
    generalError.classList.add("highlight-error");
}