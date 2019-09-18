
// CAMBIO DE BACKGROUND
var $target = $('.wrapper');
inView('.sectiones').on('enter', function(el){
  var color = $(el).attr('data-background-color');
  $target.css('background-color', color );
});


// ICON MENU

(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();

/* Menu Overlay open and close */
(function() {
  var menu = document.querySelector(".menu-collapsed")

    document.querySelector(".switch").addEventListener( "click", function(e) {
      e.preventDefault();
      menu.classList.toggle('menu-expanded');
      });
  
  /* Closes the Menu Overlay when link is clicked
  Aid with this code from Adrianengine - Adrian Quevedo
  https://codepen.io/anon/pen/GmxQpa */
  [].forEach.call(document.querySelectorAll('.menuLinks'), function(el) {
	el.addEventListener('click', function (e) {
		menu.classList.remove('menu-expanded');
		menu.classList.add('menu-collapsed');
		});
	});

})();