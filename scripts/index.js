const menu = document.querySelector(".header__menu-hamburguer");
const headerBack = document.querySelector(".header__page-background");
const headerMobile = document.querySelector(".header__page-menu-mobile");
const menuOpen = document.querySelector(".header__page-menu");
const headerPageCompany = document.querySelector(".header__page-list-company");
const headerPageFeatures = document.querySelector(
  ".header__page-list-features"
);
const company = document.querySelector(".header__company");
const features = document.querySelector(".header__features");
const arrowImgCompany = document.querySelector(".icon-company");
const arrowImgFeatures = document.querySelector(".icon-features");

function handleOpenListCompany() {
  headerPageCompany.classList.toggle("header__page-list-company-open");

  headerPageCompany.classList ==
  "header__page-list-company header__page-list-company-open"
    ? arrowImgCompany.setAttribute("src", "../assets/icon-arrow-up.svg")
    : arrowImgCompany.setAttribute("src", "../assets/icon-arrow-down.svg");
}

function handleOpenListFeatures() {
  headerPageFeatures.classList.toggle("header__page-list-features-open");

  headerPageFeatures.classList ==
  "header__page-list-features header__page-list-features-open"
    ? arrowImgFeatures.setAttribute("src", "../assets/icon-arrow-up.svg")
    : arrowImgFeatures.setAttribute("src", "../assets/icon-arrow-down.svg");
}

function handleOpenPageMenu() {
  menuOpen.classList.toggle("header__page-menu-open");
}
function handleOpenMenuHamburguer() {
  headerBack.classList.toggle("header__page-background-open");
  handleOpenPageMenu();
}

function handleClickMenuOpen() {
  menu.classList.toggle("header__menu-hamburguer-open");

  menu.classList == "header__menu-hamburguer header__menu-hamburguer-open"
    ? menu.setAttribute("src", "../assets/icon-close-menu.svg")
    : menu.setAttribute("src", "../assets/icon-menu.svg");

  handleOpenMenuHamburguer();
}

menu.addEventListener("click", handleClickMenuOpen);
company.addEventListener("click", handleOpenListCompany);
features.addEventListener("click", handleOpenListFeatures);
