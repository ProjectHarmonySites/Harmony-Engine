const burger 		= document.querySelector("nav .burger");
const navContent 	= document.querySelector("nav .content");

function toggleNav() {
	if(navContent.classList.contains("translate-content")) {
		navContent.classList.remove("translate-content");
		burger.classList.remove("translate-burger");
	} else {
		navContent.classList.add("translate-content");
		burger.classList.add("translate-burger");
	}
}

function removeTranslate() {
	if(window.innerWidth < 862) { 
		if(navContent.classList.contains("translate-content")) {
			navContent.classList.remove("translate-content");
			burger.classList.remove("translate-burger");
		}
	}
}

window.onresize = removeTranslate;