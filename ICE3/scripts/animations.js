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
