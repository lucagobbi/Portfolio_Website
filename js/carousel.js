var itemIndex = 1;
showSlides(itemIndex);

function plusSlides(n) {
    showSlides(itemIndex += n);
}

function currentSlide(n) {
    showSlides(itemIndex = n);
}

function showSlides(n) {
    var i;
    var items = document.getElementsByClassName("skills__carousel-item");
    if (n > items.length) { itemIndex = 1 }
    if (n < 1) { itemIndex = items.length }
    for (i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }
    items[itemIndex - 1].style.display = "block";
}