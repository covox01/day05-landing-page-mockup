// Once the DOM Content loads make sure the image count matches imgloads, if true, run the animation
window.addEventListener("DOMContentLoaded", function () {init();}, false);

// Global Variabless
var horizontalLine = document.getElementById("horizontalLine");
var verticalLine = document.getElementById("verticalLine");
var horizontalBar1 = document.getElementById("horizontalBar1")
var horizontalBar2 = document.getElementById("horizontalBar2");
var horizontalBar3 = document.getElementById("horizontalBar3");
var verticalBar1 = document.getElementById("verticalBar1");
var verticalBar2 = document.getElementById("verticalBar2");
var verticalBar3 = document.getElementById("verticalBar3");
var buildingSegment1 = document.getElementById("buildingSegment1")
var buildingSegment2 = document.getElementById("buildingSegment2");
var buildingSegment3 = document.getElementById("buildingSegment3");
var tagline = document.querySelector("#tagline")
var nav = document.querySelector(".nav")
var navBar = document.querySelector("#navBar")
var navArrow = document.querySelector("#navArrow")

// // Media Querie Variable - courtesy of W3 Schools
var media = window.matchMedia("(max-width: 444px)")
checkMediaQuery(media) // Calls listener function at run time
media.addListener(checkMediaQuery) // Attaches listener function on state changes


// Sets landing page elements before it gets animated, there is a delayed call before triggering the landing animation function
function init(){
   gsap.set([nav, horizontalLine, verticalLine, horizontalBar1, horizontalBar2, horizontalBar3, buildingSegment1, buildingSegment2, buildingSegment3], {force3D: false})
   gsap.set(nav, {opacity: 0,x: -50})
   gsap.set(horizontalLine, {x: "100%", opacity: 1})
   gsap.set(verticalLine, {y: "100%"})
   gsap.set([horizontalBar1, horizontalBar2, horizontalBar3], {x: "-100%"})
   gsap.set([verticalBar1, verticalBar2, verticalBar3], {y: "100%"})
   gsap.set([buildingSegment1, buildingSegment2, buildingSegment3], {y: 100, opacity: 0})
   gsap.set("#detail", { opacity: 0, y: 50 });
   gsap.set("#detail2", {opacity: 0, x: 25})
   gsap.set("#logo", {opacity: 0, x: -50})
   gsap.set(tagline, {opacity: 0, x: -50})
   gsap.set(navArrow, {force3D: false, rotation: 0.01})
   gsap.delayedCall(1, landingAnimation())
}

// Landing Animation Sequence 
function landingAnimation(){
   var navTL = new TimelineMax()
   navTL.to(horizontalLine, {duration: 1, opacity: 1, x: "0%", ease: Power2.easeOut}, "sync")
      .to(verticalLine, {duration: 1, opacity: 1, y: "0%", ease: Power2.easeOut}, "sync")
      .to(nav, {duration: 1, opacity: 1, x: 0, ease: Power3.easeOut}, "sync2-=.6")
      .to("#detail", {duration: 1, opacity: 1, y: 0, ease: Power2.easeOut}, "sync2-=.6")
      .to("#detail2", {duration: 1.5, opacity: 1, x: 0, ease:Power2.easeOut}, .6)

   var headerTL = new TimelineMax({delay: .5})
   headerTL.to("#logo", {duration: 1.5, opacity: 1, x: 0, ease:Power2.easeOut})
      .to(tagline, {duration:1.5, opacity:1, x: 0, ease: Power2.easeOut}, .2)

   var barsTL = new TimelineMax()
   barsTL.staggerTo(".bar", 1, {x: "0%", ease: Power2.easeOut}, .2)
      .staggerTo(".bar2", 1, {y: "0%", ease: Power2.easeOut}, .1, .5)

   var buildingTL = new TimelineMax()
   buildingTL.staggerTo(".bg", 1, {opacity: 1, y:0, ease: Power2.easeOut}, .2)
}

// Checks to see if the window matches the media query and will either add or remove event listeners depending on the window size
function checkMediaQuery(media) {
   if (media.matches) {
      gsap.set(nav, { yPercent: -100, background: "#464646" })
      addListeners()
   } else {
      gsap.set(nav, { yPercent: 0, zIndex: 20, background: "white" })
      gsap.set(".nav ul li", { opacity: 1 })
      removeListeners()
   }
}

// Adds event listeners when window matches media query
function addListeners() {
   navBar.addEventListener("mouseover", onHover);
   nav.addEventListener("mouseleave", leaveHover);
}

// Removes event listeners when window does not match media query
function removeListeners() {
   navBar.removeEventListener("mouseover", onHover, false);
   nav.removeEventListener("mouseleave", leaveHover, false);
}

// When the media query is true, hovering over the navigation bar will reveal the menu options
function onHover(){
   gsap.to(nav, {duration: .3, opacity: 1, yPercent: 0, ease: Power2.easeOut})
   gsap.fromTo(".nav ul li", .3, {opacity: 0}, {opacity: 1, ease: Power2.easeOut })
   gsap.set(nav, { zIndex: 50})
}

// When the user leaves the nav option menu the menu will scroll up and disappear
function leaveHover(){
   gsap.to(nav, { duration: .3, yPercent: -100, ease: Linear.easeIn})
   gsap.to(".nav ul li", .3, { opacity: 0, ease: Power2.easeOut })
}






 






