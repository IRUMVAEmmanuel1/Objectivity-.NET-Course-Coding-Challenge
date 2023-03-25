const originalUrls = [];
const shortUrls = [];


function validateUrl(value) {
	var urlPattern = new RegExp(
		"^(https?:\\/\\/)?" + "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|)"
	);

	return !!urlPattern.test(value);
}

