const menuItems = document.querySelectorAll(".nav__link");
const cards = document.querySelectorAll(".card__item");

function filterCards(event) {
    event.preventDefault();

    const selectedFilter = event.target.dataset.filter;

    menuItems.forEach((item) => {
        if (item.classList.contains("active")) {
            item.classList.remove("active");
        }
    });

    event.target.classList.add("active");

    cards.forEach((card) => {
        if (selectedFilter === "all") {
            card.style.display = "block";
        } else if (card.classList.contains(selectedFilter)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

menuItems.forEach((item) => {
    item.addEventListener("click", filterCards);
});
