
var searchEntry = "";
var urbanAPI = {
	"async": true,
	"crossDomain": true,
	"url": "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=" + searchEntry,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
		"x-rapidapi-key": "7ac5693631msh1be654ee56cba4ap14b22cjsn1aef1fe207ca"
	}
}

$.ajax(urbanAPI).done(function (response) {

	console.log(response);

	for (var i = 0; i < searchEntry.length; i++) {

		var searchTest = $("<text>")
		searchTest.text("");
		searchTest.text(JSON.stringify(response.searchEntry[i]));
	}

});