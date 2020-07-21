/********************* Global Methods *********************/

const sponsorsList = `

	First, Last
	Company Name
	Sample Company
	First, Last
	First, Last
	Sample Company
	Sample Company
	Company Name

`;

const thanks = document.querySelector(".thanks");

function scrollToTop() {
	document.body.scrollTop = 0; // Safari
	document.documentElement.scrollTop = 0; // Everything else
}

function loadSponsors() {
	if(thanks != null) {
		let list = document.querySelector(".thanks ul");
		let sponsorsArray = sponsorsList.split("\n");

		for(let i = 0; i < sponsorsArray.length; i++) {
			let item = sponsorsArray[i];
			if(item === "") continue;

			list.innerHTML += `<li>${item}</li>`;
		}
	}
}

this.loadSponsors();

/********************* Navbar *********************/

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
	if(window.innerWidth < 950) { 
		if(navContent.classList.contains("translate-content")) {
			navContent.classList.remove("translate-content");
			burger.classList.remove("translate-burger");
		}
	}
}

window.onresize = removeTranslate;

