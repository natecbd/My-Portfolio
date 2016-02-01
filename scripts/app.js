$(document).ready(function () {
 

var waypointJams = new Waypoint({
    element: $('.i-am-a-web-dev'),
    handler: function(direction) {
    if(direction === "down") {
        $('.nav-color').css("animation-name","fade-in")
        $('.nav-color').css("background-color","rgb(58,23,63)")
    } else if(direction === "up") {
        $('.nav-color').css("animation-name","fade-out")
    }
  },
    offset: '250px'
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
    offset: '275px'
})

var waypointWebDev = new Waypoint({
    element: $('.divider'),
    handler: function(direction) {
    if(direction === "down") {
        $('.i-am-a-web-dev').css("animation-name","fade-in, fade-up-super")
    } else if(direction === "up") {
        $('.i-am-a-web-dev').css("animation-name","fade-out, fade-down-super")
    }
  }
})

$('.nav-bar a').smoothScroll();
$('.nav-bar .navb').smoothScroll({offset: 350});

});