// navigation panle

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }




// slide show section 
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


/*------------------------- science slides */
var sIndex = 1;
showDivs(sIndex);

function plusDivs(n) {
  showDivs(sIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {sIndex = 1}
  if (n < 1) {sIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[sIndex-1].style.display = "block";  
}