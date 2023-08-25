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