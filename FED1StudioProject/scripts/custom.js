var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/* Opens accordion section when clicking on respective card */
var cards = document.getElementsByClassName("classLink");
for (i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
        var id = this.getAttribute("href");
        //Line below trims the # off of the href attribute
        id = id.replace('#', '');
        var table = document.getElementById(id);
        table.nextElementSibling.style.display = "block";
        console.log(id);
    })
}