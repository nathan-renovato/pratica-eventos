const buttonMenu = document.querySelector(".menu-button-side-bar img");
const sideBar = document.querySelector(".side-bar");
const descriptionSidebarIcons = document.querySelectorAll(".button-side-bar h3");
const homeButtonSidebar = document.querySelector(".home-button-side-bar h3");

const expandSidebar = () => {
    if (homeButtonSidebar.style.color !== "rgb(255, 255, 255)") {
        sideBar.classList.add("button-clicked-menu");
        buttonMenu.src = "./assets/open-menu.svg";
        descriptionSidebarIcons.forEach(description => {
            description.style.display = "block";
        });
        homeButtonSidebar.style.color = "#FFFFFF";
    } else {
        sideBar.classList.remove("button-clicked-menu");
        buttonMenu.src = "./assets/closed-menu.svg";
        descriptionSidebarIcons.forEach(description => {
            description.style.display = "none";
        });
        homeButtonSidebar.style.color = "#888888";
    }
}

buttonMenu.addEventListener("click", expandSidebar);


const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal-image");
const galleryImages = document.querySelectorAll(".photo-gallery img");
const buttonCloseModal = document.querySelector(".button-close-modal");
const previousButton = document.querySelector(".back-button-carousel");
const nextButton = document.querySelector(".next-carousel-button");

let currentIndex;

const checkIndex = (event) => {
    const clickedImage = event.target;

    for (let i = 0; i < galleryImages.length; i++) {
        if (galleryImages[i].src === clickedImage.src) {
            currentIndex = i;
        }
    }
};

const enableCarouselButtons = (index) => {
    previousButton.style.display = "block";
    nextButton.style.display = "block";

    if (index === 0) {
        previousButton.style.display = "none";
    }
    if (index === galleryImages.length - 1) {
        nextButton.style.display = "none";
    }
};

const currentImage = (index) => {
    modalImage.src = galleryImages[index].src;
};

const openModal = (event) => {
    checkIndex(event);
    enableCarouselButtons(currentIndex);
    currentImage(currentIndex);
    modal.style.display = "flex";
};

galleryImages.forEach(image => {
    image.addEventListener("click", openModal)
});

const rewindCarousel = () => {
    if (currentIndex > 0) {
        currentImage(currentIndex -= 1);
        enableCarouselButtons(currentIndex);
    }
}

const advanceCarousel = () => {
    if (currentIndex < galleryImages.length - 1) {
        currentImage(currentIndex += 1);
        enableCarouselButtons(currentIndex);
    }
}

previousButton.addEventListener("click", rewindCarousel);

nextButton.addEventListener("click", advanceCarousel);

const closeModal = () => {
    modal.style.display = "none";
};

buttonCloseModal.addEventListener("click", closeModal);


