function getUrbanDef(artistNameSearch) {
    var urbanApi = {
        "async": true,
        "crossDomain": true,
        "url": "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=" + artistNameSearch,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
            "x-rapidapi-key": "7ac5693631msh1be654ee56cba4ap14b22cjsn1aef1fe207ca"
        }
    }
    $.ajax(urbanApi).done(function (response) {
        console.log(response);

        i++;
        var artistSearch = (response.list[0].definition);
        $("#urbanDefinition").text(artistSearch);

        //Calling songlyrics function
        getSongLyrics(artistSearch);
    });



}