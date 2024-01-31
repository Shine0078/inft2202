

console.log("selectors.js loaded")
$(function() {
    console.log("The DOM is ready");
})

/**
 * 
 * @param {*} element 
 */
function highlights(element) {
    element.css('bakcground-color', "#fcf30040");
}

function cssSelectors() {
    // updating by tag (<p></p>)
    $('p').css('background-color', "#2a9d8f");
    // updating by class (class="red-box")
    $('p.red-box').css('background-color', "#2a9d8f");
    // updating by id (id="list")
    $('#list').css('font-size', '40px');

    $('li:odd').css('background-color', "#fcf30040");
}

function traversingTheDOM() {
    // $('#list').prev().css('background-color', "#2a9d8f");
    // $('#list').next().css('background-color', "#2a9d8f");
    // $('#list').next().css('background-color', "#2a9d8f"); // this just updates the list

    $('#list').find('li').css('background-color', "#2a9d8f");
    // traverse up 1 level
    $('#list').parent('div').css('font-size', '24px');
    // traverse all the way up, throught all paretns, grandparents, etc; to the body
    $('#list').parents('body').css('font-size', '24px');
}

function filtering() {
    $('#list').find('li').filter(':even').css('background-color', "#2a9d8f");

    // long function of the shortcut .filter(':even')
    $('#list').find('li').filter(function (i) {
        return i % 2 === 0;
    }).css('background-color', "red");
}

function addReplaceRemove() {
    $('ul#list li:first').append($("<ul><li>I'm going to be the last item of the first sub-list</li></ul>"));
    // add to top
    $('ul#list').prepend($("<li>Prepended</li>"));

    // use after to added elemetns after another
    $('.red-box').after("<div class=\"red-box new-box\">New red box<d/iv>");

    let newText = 'Last night, Darth Vader came down from the planet Vulcan.';
    $('p.grumpy').replaceWith(`<p>${newText}</p>`);
}

//cssSelectors();
//traversingTheDOM();
//filtering();
addReplaceRemove();