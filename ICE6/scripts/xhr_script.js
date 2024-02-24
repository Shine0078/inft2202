console.log("xhr_script.js loaded");
// Name: Samuel Abraham
// Student id: 100870571
// Program: Web development - CSS
// Date: 23/02/2024
//*********************** ICE - 6 Fetch ******************************* */

let btn_xhr = $('#xhrJoke');
// get the button for xhr
// create a url variable
let url_xhr = "https://icanhazdadjoke.com/";

$(btn_xhr).click(() => {
    
// create a click callback that handles the API call
    // instantiate an XMLHttpRequest object
    let xhr = new XMLHttpRequest;

    // confiture with open()
    xhr.open("GET", url_xhr);

    // set the necessary headers for icanhazdadjoke.com
    // create the callback to handle the onreadystatechange
    xhr.setRequestHeader("Accept", "application/json");
    
    xhr.onreadystatechange = function () {
        // only execute when done and status is 200
        if (xhr.readyState === 4 && xhr.status === 200) {
            // get the responseText
            // console log
            // set the output
            // JSON.parse the joke
            let joke = xhr.responseText;
            
            console.log(joke);
            
            let data = JSON.parse(joke);
            
            $("#output").text(data.joke);
        }
    }
    // send the request
    xhr.send();
});