
function menuButtonClicked() {
    var header = document.querySelector("header");
    header.classList.toggle("fullscreen");

}

function scrollToTop() {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
}

