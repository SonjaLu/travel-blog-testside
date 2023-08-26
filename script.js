function myFunc (el) {

    let tooltip = document.getElementById('myTooltip');
    tooltip.style.display = 'block';
    tooltip.innerHTML = el.getAttribute('data-tooltip');
    el.style.cursor = 'pointer';
 }
  
  function myFuncHide(el) {
    let tooltip = document.getElementById('myTooltip');
    tooltip.style.display = 'none';
   tooltip.innerHTML = '';
   el.style.cursor = 'default';
  }
  
  document.addEventListener('mousemove', function(e){

      document.getElementById('myTooltip').style.left = (e.pageX+5)+"px";
        document.getElementById('myTooltip').style.top = (e.pageY+5)+"px";
   
  });

  document.addEventListener('DOMContentLoaded', function() {
    let navLinks = document.querySelectorAll('.nav a');
    let currentPath = window.location.pathname.split('/').pop();
  

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active-link');
        }
    });
});

$(document).ready(function() {
    $('#moonpic, #sunpic').click(function() {
        $('#moonpic, #sunpic').toggle();
        if ($('#sunpic').is(':visible')) {
        $('body').css({
            'background-color': 'black',
            'color': 'white'
        });
    } else {
        $('body').css({
            'background-color': 'white',
            'color': 'black'
        });
    }
});
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}