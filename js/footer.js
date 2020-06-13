const sponsors = `
First, Last
Company Name
Company Name
Sample Company
Sample Company
First, Last
First, Last
First, Last
First, Last
First, Last
First, Last
First, Last
Company Name
First, Last
First, Last
`;

$(document).ready(function() {
	var footer = $("footer .sponsors .names");
	var sponsorsArray = sponsors.split("\n");

	for(var i = 0; i < sponsorsArray.length; i++) {
		const item = sponsorsArray[i];

		if(item === "") continue;

		footer.append(`<p>${item}</p>`);
	}
});