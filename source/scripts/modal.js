export function modalBasket() {
let modalPopup = document.querySelector(".modal-basket");
let modalWrapper = document.querySelector(".modal-wrapper");
let modalOpenIndex = document.querySelector(".product-week__button");
let modalOpenCatalog = document.querySelectorAll(".js-basket");
let modalClose = document.querySelector(".modal-basket__button");
let mobilePopupFull = document.querySelector(".mobile-menu-full");

if (modalPopup) {

for  ( let i = 0; i < modalOpenCatalog.length; i++) {
	modalOpenCatalog[i].addEventListener("click", function(evt) {
	evt.preventDefault();
	modalPopup.classList.add("js-open");
	modalWrapper.classList.add("js-open");
	// if(mobilePopupFull.classList.contains("js-open")) {
	// 	mobilePopupFull.classList.remove("js-open");
	// }
});
modalClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalPopup.classList.remove("js-open");
	modalWrapper.classList.remove("js-open");
});
window.addEventListener ("keydown", function(evt) {
	if (evt.keyCode === 27){
		evt.preventDefault();
		modalPopup.classList.remove("js-open");
	    modalWrapper.classList.remove("js-open");
	}
})
};
if (modalOpenIndex) {
modalOpenIndex.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalPopup.classList.add("js-open");
	modalWrapper.classList.add("js-open");
	// if(mobilePopupFull.classList.contains("js-open")) {
	// 	mobilePopupFull.classList.remove("js-open");
	// }
});
}
modalClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalPopup.classList.remove("js-open");
	modalWrapper.classList.remove("js-open");
});
window.addEventListener ("keydown", function(evt) {
	if (evt.keyCode === 27){
		evt.preventDefault();
		modalPopup.classList.remove("js-open");
	    modalWrapper.classList.remove("js-open");
	}
})
}
}