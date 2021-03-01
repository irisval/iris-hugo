document.addEventListener('DOMContentLoaded', () => {

  const h = document.getElementsByTagName("html")[0];
  const colorToggle = document.getElementById("colorToggle");
  colorToggle.addEventListener('click', () => {
    if (h.dataset.theme === "dark") {
      h.dataset.theme = "light";
      colorToggle.innerText = "🌃";
    } else {
      h.dataset.theme = "dark";
      colorToggle.innerText = "🌅";
    }
  });


  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});