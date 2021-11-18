/* Bachelor-GIF */

bachelor.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      bachelor.style.left = timePassed / 5 + 'px';
      if (timePassed > 2000) clearInterval(timer);

  }, 20);
  }

/* Like button */

var i = 0;
var txt = 'Thank you for rating!';
var speed = 50;
function typeWriter() {
if (i < txt.length) {
    document.getElementById("like").innerHTML += txt.charAt(i); i++;
        setTimeout(typeWriter, speed);
    }
}

/* Favicon */

var list = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
list.forEach(function(element) {
	element.setAttribute('href', 'favicon/favicon.png');
});


/* Scroll Indicator */

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}