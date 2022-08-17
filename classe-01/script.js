const buttonMenu = document.querySelector(".menu-button-side-bar img");
const sideBar = document.querySelector(".side-bar");
const descriptionSidebarIcons = document.querySelectorAll(".button-side-bar h3");
const homeButtonSidebar = document.querySelector(".home-button-side-bar h3");

buttonMenu.addEventListener("click", function (event) {
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
})
