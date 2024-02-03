console.log('animations.js loaded successfully');

$('#jqueryHeader').toggle(function() {
  $(this).toggleClass("minus");
  $(this).next().slideDown(1000, "easeOutBounce") 
}, function() {
  $(this).toggleClass("minus");
  $(this).next().slideUp(1000, "easeInBounce")
  
  })

// TODO: function fadeInOutTo()
// add following fade in out to the appropriate boxes
// fade out - display none 3000 ms (red-box)
// fade in- display to 1500 ms (red-box)
// fade to 2000 ms with 30% opacity (green-box)
// fade to 1000 ms with 50% opacity (blue-box)
// toggle the display (blue-box)

// TODO: function hideElement()
// for the green box, toggle the display with hide, 1000 ms timeout
// for the green box, toggle the display with show, 1000 ms timeout
// for the green box, slide up 1000 ms timeout
// for the green box, slide down 1000 ms timeout
// for the green box, toggle slide state 1000 ms timeout
// for the green box, toggle slide state 1000 ms timeout

// TODO: function chainAnimations()
// for the blue box, fade to 50% opacity with 1000 ms timeout
// for the green box, delay by 1000ms, then fade to 50% opacity with 1000 ms timeout (use chaining)
// for the red box, delay by 1000ms, then fade to 50% opacity with 1000 ms timeout, delay by 1000ms, fade to 100% opacity with 1000ms timeout, delay  1000ms, then fade out (use chaining)

// Function to fade in and out the appropriate boxes
// Function to fade in and out the appropriate boxes

function fadeInOutTo() {

  // Fade out - display none 3000 ms (red-box)
  $('.red-box').fadeOut(3000);

  // Fade in - display to 1500 ms (red-box) 
  $('.red-box').fadeIn(1500);

  // Fade to 2000 ms with 30% opacity (green-box)
  $('.green-box').fadeTo(2000, 0.3);

  // Fade to 1000 ms with 50% opacity (blue-box)
  $('.blue-box').fadeTo(1000, 0.5);

  // Toggle the display (blue-box)
  $('.blue-box').toggle();
}
function hideElement() {
  // Toggle display with hide, 1000 ms timeout
  $('.green-box').hide(1000);

  // Toggle display with show, 1000 ms timeout
  $('.green-box').show(1000);

  // Slide up, 1000 ms timeout
  $('.green-box').slideUp(1000);

  // Slide down, 1000 ms timeout
  $('.green-box').slideDown(1000);

  // Toggle slide state, 1000 ms timeout
  $('.green-box').slideToggle(1000);

  // Toggle slide state, 1000 ms timeout
  $('.green-box').slideToggle(1000);
}


function chainAnimations() {
  // Fade to 50% opacity, 1000 ms timeout for blue-box
  $('.blue-box').fadeTo(1000, 0.5);

  // Delay by 1000 ms, then fade to 50% opacity, 1000 ms timeout for green-box (chaining)
  $('.green-box').delay(1000).fadeTo(1000, 0.5).delay(1000);

  // Delay by 1000 ms, then fade to 50% opacity, 1000 ms timeout for red-box (chaining)
  $('.red-box').delay(1000).fadeTo(1000, 0.5).delay(1000).fadeTo(1000, 1).delay(1000).fadeOut(1000);
}


fadeInOutTo()
hideElement()
chainAnimations()