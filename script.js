function myFunc(el) {
  let tooltip = document.getElementById("myTooltip");
  tooltip.style.display = "block";
  tooltip.innerHTML = el.getAttribute("data-tooltip");
  el.style.cursor = "pointer";
}

document.addEventListener("DOMContentLoaded", function() {
function myFuncHide(el) {
  let tooltip = document.getElementById("myTooltip");
  tooltip.style.display = "none";
  tooltip.innerHTML = "";
  el.style.cursor = "default";
}
} );

document.addEventListener("mousemove", function (e) {
  let tooltip = document.getElementById("myTooltip");
  if (tooltip) {
      tooltip.style.left = e.pageX + 5 + "px";
      tooltip.style.top = e.pageY + 5 + "px";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let navLinks = document.querySelectorAll(".nav a");
  let currentPath = window.location.pathname.split("/").pop();

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active-link");
    }
  });
});

$(document).ready(function () {
  $("#moonpic, #sunpic").click(function () {
    $("#moonpic, #sunpic").toggle();
    if ($("#sunpic").is(":visible")) {
      $("body").css({
        "background-color": "black",
        color: "white",
      });
    } else {
      $("body").css({
        "background-color": "white",
        color: "black",
      });
    }
  });
});

//minigame
let score = 0;
let mealsArr = ["/img/kimchi.jpg", "/img/bulgogi.jpg", "/img/tteokbokki.jpg", "/img/hotteok.jpg"];
let namesArr = ["Kimchi", "Bulgogi", "Tteokbokki", "Hotteok"];
$(document).ready(function () {
  shuffle(mealsArr);
  $.each(mealsArr, function (index, value) {
    let meal =value.slice(5, -4);
    $("<div><img src=" + value + "></div>")
    .appendTo("#meals")
    .draggable({revert:true, scope: meal});
});
shuffle(namesArr);
$.each(namesArr, function (index, value) {
  $("<div>" + value + "</div>")
  .appendTo("#droparea")
  .droppable({scope:value.toLowerCase(),
  drop:function(event, ui){
    $(ui.draggable).append($(this).text());
    score++;
$(this).hide("puff", "fast");

if(score == namesArr.length){
$("<div><p>Super!!!<br>Nochmal?</p></div>")
.dialog({modal:true,
buttons:[{text:"Ja",
click:function(){
  window.location.reload();
}},
{text:"Nein",
click:function(){
  $(this).dialog("close");
}}]
});
  }
}});
});
});

function shuffle(arr){
  return arr.sort(function(){
    return .5 - Math.random()
});
}



//slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display="block";
  dots[slideIndex-1].className += " active";
}