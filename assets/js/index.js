function showCollapse() {
    document.querySelector(".header__menu-nav-item-icon").classList.toggle("rotate");
    document.querySelector(".header__menu-nav-item-collapse").classList.toggle("show");
}

function showNavMenu() {
    document.querySelector(".header__menu-nav-overlay").classList.add("show");
    document.querySelector(".header__menu-nav-container").classList.add("show");
}

window.addEventListener('click', e => {
    if (e.target == document.querySelector(".header__menu-nav-overlay")) {
        document.querySelector(".header__menu-nav-overlay").classList.remove("show");
        document.querySelector(".header__menu-nav-container").classList.remove("show");
    }
});

// Auto Slider
let index = 0;
const sliderNumber = document.querySelectorAll(".home__banner-item");
function sliderAuto() {
    index = index + 1;
    if (index > sliderNumber.length - 1) {
        index = 0;
    }
    document.querySelector(".home__banner-list").style.right = index * 100 + "%";
    for (let i = 0; i < sliderNumber.length; i++) {
        if (index == 0) {
            sliderNumber[0].querySelector(".home__banner-item-desc").classList.add("show");
            sliderNumber[1].querySelector(".home__banner-item-desc").classList.remove("show");
            sliderNumber[2].querySelector(".home__banner-item-desc").classList.remove("show");
            sliderNumber[3].querySelector(".home__banner-item-desc").classList.remove("show");
            sliderNumber[4].querySelector(".home__banner-item-desc").classList.remove("show");
            //document.querySelector(".home__banner").style.right = index * 100 + "%";
        } else if (index == 1) {
            sliderNumber[0].querySelector(".home__banner-item-desc").classList.remove("show");
            sliderNumber[1].querySelector(".home__banner-item-desc").classList.add("show");
            sliderNumber[2].querySelector(".home__banner-item-desc").classList.remove("show");
            sliderNumber[3].querySelector(".home__banner-item-desc").classList.remove("show");
            sliderNumber[4].querySelector(".home__banner-item-desc").classList.remove("show");
            //document.querySelector(".home__banner").style.right = index * 100 + "%";
        }else if (index == 2) {
            sliderNumber[0].querySelector(".home__banner-item-desc").classList.remove("show");
            sliderNumber[1].querySelector(".home__banner-item-desc").classList.remove("show");
            sliderNumber[2].querySelector(".home__banner-item-desc").classList.add("show");
            sliderNumber[3].querySelector(".home__banner-item-desc").classList.remove("show");
            sliderNumber[4].querySelector(".home__banner-item-desc").classList.remove("show");
        } else if (index == 3) {
            sliderNumber[0].querySelector(".home__banner-item-desc").classList.remove("show");
            sliderNumber[1].querySelector(".home__banner-item-desc").classList.remove("show");
            sliderNumber[2].querySelector(".home__banner-item-desc").classList.remove("show");
            sliderNumber[3].querySelector(".home__banner-item-desc").classList.add("show");
            sliderNumber[4].querySelector(".home__banner-item-desc").classList.remove("show");
        } else if (index == 4) {
            sliderNumber[0].querySelector(".home__banner-item-desc").classList.remove("show");
            sliderNumber[1].querySelector(".home__banner-item-desc").classList.remove("show");
            sliderNumber[2].querySelector(".home__banner-item-desc").classList.remove("show");
            sliderNumber[3].querySelector(".home__banner-item-desc").classList.remove("show");
            sliderNumber[4].querySelector(".home__banner-item-desc").classList.add("show");
        }
    }
}
setInterval(sliderAuto, 3000);