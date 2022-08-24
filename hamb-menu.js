function hambmenu() {
  var x = document.getElementById("section");
  var y = document.querySelector(".container");
  var body = document.querySelector("body")

  if (x.className.includes("hidden-section")) {
    x.classList.remove('hidden-section');
    x.classList.add("slide-left");
    y.classList.add("disable-selection")

  } else {
    x.classList.add("slide-right");
    x.classList.remove('slide-left');
    setTimeout(function() {
      x.classList.add('hidden-section');
      x.classList.remove('slide-right');
    }, 300);
    y.classList.remove("disable-selection")
  }

  if (x.className.includes("slide-left")) {
    document.addEventListener('click', function handleClickOutsideBox(event) {

      if (event.target == body) {
        x.classList.add("slide-right");
        x.classList.remove('slide-left');
        setTimeout(function() {
          x.classList.add('hidden-section');
          x.classList.remove('slide-right');
        }, 300);
      }
    });

  }
}

function myFunction() {
  var x = document.getElementById("drop-content");
  var y = x.classList
  console.log(y);
  if (x.style.display === "none" || x.style.display === "inline") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
