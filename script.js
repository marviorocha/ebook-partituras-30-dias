
  $("document").ready(function(){
var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image);
  });
/* navigation menu */

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});


/* FAQ Start */


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/* Scrool pages */

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}


$("#link1").click(function() { scrollToAnchor('link1') }); 
$("#link2").click(function() { scrollToAnchor('link2') }); 
$("#link3").click(function() { scrollToAnchor('link3') }); 
$("#link4").click(function() { scrollToAnchor('link4') }); 
$("#link5").click(function() { scrollToAnchor('link5') }); 
$("#link6").click(function() { scrollToAnchor('link6') }); 


$(function() {
  $("#login").on("click", function(e) {
    e.preventDefault();
    var authenticator = new netlify.default ({});
    authenticator.authenticate({provider:"github", scope: "user"}, function(err, data) {
      if (err) {
        return $("#output").text("Error Authenticating with GitHub: " + err);
      }
      $("#output").text("Authenticated with GitHub. Access Token: " + data.token);
    });
  });
});
