


function openNav() {

    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  
  
  var acc = document.getElementsByClassName("accordion");
  var i;
    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  /*
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML= dots [slideIndex-1].alt;

  }
*/
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";

// /*
//     function closeNav() {
//         document.getElementById("mySidenav").style.width = "0";
//         document.getElementById("main").style.marginLeft = "0";
// }*/

// /*
// var acc = document.getElementsByClassName("accordion");
// var i;
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
// let slideIndex = 1;
// showSlides(slideIndex);
// */
// /*
// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }


// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
// */

// // function showSlides(n) {
// //   let i;
// //   let slides = document.getElementsByClassName("mySlides");
// //   let dots = document.getElementsByClassName("dot");
// //   if (n > slides.length) {slideIndex = 1}
// //   if (n < 1) {slideIndex = slides.length}
// //   for (i = 0; i < slides.length; i++) {
// //     slides[i].style.display = "none";
// //   }
// //   for (i = 0; i < dots.length; i++) {
// //     dots[i].className = dots[i].className.replace(" active", "");
// //   }
// //   slides[slideIndex-1].style.display = "block";
// //   dots[slideIndex-1].className += " active"