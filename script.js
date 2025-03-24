document.addEventListener("DOMContentLoaded", function () {
    const track = document.getElementById("carouselTrack");
    const items = document.querySelectorAll(".carousel-item-custom");
    let index = 0;
    const totalItems = items.length;

    function moveCarousel() {
        index++;
        if (index >= totalItems) {
            index = 0;
        }
        track.style.transform = `translateX(-${index * 33.333}%)`;
    }
    setInterval(moveCarousel, 2000);
});