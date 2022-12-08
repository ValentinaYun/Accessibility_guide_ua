
var acc = document.getElementsByClassName("accordion_heading");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var accordion_content = this.nextElementSibling;
        if (accordion_content.style.display === "block") {
            accordion_content.style.display = "none";
            this.setAttribute("aria-expanded", "false");
        } else {
            accordion_content.style.display = "block";
            this.setAttribute("aria-expanded", "true");
        }
    });
}
