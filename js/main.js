const tabNavBtns = document.querySelectorAll(".tabs-deals__btn");
const tabItems = document.querySelectorAll(".tabs-deals__item");


document.addEventListener("click", function (e) {
    const targetElement = e.target;

    if (targetElement.closest(".tabs-deals__btn")) {
        let currentIndexActive = null;
        let newIndexActive = null;

        tabNavBtns.forEach((itemBtn, indexBtn) => {
            if (itemBtn == targetElement && itemBtn.classList.contains("active")) {
                return;
            }

            if (itemBtn.classList.contains("active")) {
                currentIndexActive = indexBtn;
                itemBtn.classList.remove("active");
            }
            if (itemBtn === targetElement) {
                newIndexActive = indexBtn;
                itemBtn.classList.add("active");
            }
        });

        tabItems[currentIndexActive].classList.remove("active");
        tabItems[newIndexActive].classList.add("active");
    }
});