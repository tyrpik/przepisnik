
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const main = document.querySelector("main");

    function adjustMainPadding() {
        main.style.paddingTop = (header.offsetHeight + 20) + "px";
    }

    // Adjust the padding-top on load
    adjustMainPadding();

    // Adjust the padding-top on window resize
    window.addEventListener("resize", adjustMainPadding);
});
