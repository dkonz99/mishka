export function mobileMenu() {
let mobilePopupFull = document.querySelector(".mobile-menu-full");
let mobilePopupLite = document.querySelector(".mobile-menu-lite");
let mobileButtonOpen = document.querySelector(".mobile-menu-lite__button");
let mobileButtonClose = document.querySelector(".main-list__button");

if (mobilePopupFull) {
mobileButtonOpen.addEventListener("click", function(evt) {
	evt.preventDefault();
	mobilePopupFull.classList.add("js-open");
});
mobileButtonClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	mobilePopupFull.classList.remove("js-open");
});
}
}
