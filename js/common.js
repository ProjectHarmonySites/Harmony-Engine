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

const thanks = document.querySelector("#thanks");

function loadSponsors() {
	if(thanks != null) {
		let list = document.querySelector("#thanks .sponsors");
		let sponsorsArray = sponsorsList.split("\n");

		for(let i = 0; i < sponsorsArray.length; i++) {
			let item = sponsorsArray[i];
			if(item === "") continue;

			list.innerHTML += `<p>${item}</p>`;
		}
	}
}

this.loadSponsors();