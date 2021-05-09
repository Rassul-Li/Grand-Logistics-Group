var hvCheckbox = document.getElementById("hvCheckbox");
var hvItem = document.getElementById("hvitems");
hvItem.setAttribute("disabled", "disabled");



hvCheckbox.addEventListener('change', () => {
  if(hvCheckbox.checked) {
    hvItem.removeAttribute("disabled");
  } else {
    hvItem.setAttribute("disabled", "disabled");
    hvItem.value = "";
  }
}); 

document.addEventListener("DOMContentLoaded", function(event) {
    document.addEventListener("scroll", function(event) {
        const animatedText = document.getElementsByClassName("animate");
        const windowOffsetTop = window.innerHeight + window.scrollY;

        Array.prototype.forEach.call(animatedText, (animatedText) => {
            const animatedTextOffsetTop = animatedText.offsetTop;

            if (windowOffsetTop >= animatedTextOffsetTop) {
                addClass(animatedText, "fadeIn");
            }
        });
    });
});

function addClass(element, className) {
    const arrayClasses = element.className.split(" ");
    if (arrayClasses.indexOf(className) === -1) {
        element.className += " " + className;
    }
}