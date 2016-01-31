$(document).ready(function () {
 

var waypointJams = new Waypoint({
    element: $('.ups'),
    handler: function(direction) {
    if(direction === "down") {
        $('.nav-color').css("animation-name","fade-in")
        $('.nav-color').css("background-color","rgb(58,23,63)")
    } else if(direction === "up") {
        $('.nav-color').css("animation-name","fade-out")
    }
  },
    offset: '200px'
})

var waypointBand = new Waypoint({
    element: $('.cascade'),
    handler: function(direction) {
    if(direction === "down") {
        $('.nav-color').css("animation-name","purple-to-crimson")
    } else if(direction === "up") {
        $('.nav-color').css("animation-name","crimson-to-purple")
    }
  },
    offset: '200px'
})

$('nav.nav-bar a').smoothScroll();
   
});