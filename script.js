//GLOBAL VAR

$("#find-music").on("click", function (event) {
    event.preventDefault();
    $(".forecast1").empty();

    var i = 0
    var artistName = $("#music-input").val();

    //This is DEEZER api call
    var deezerApi = {
        "async": true,
        "crossDomain": true,
        "url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artistName,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "d8bb7331d7mshcb58195d90da480p15ca06jsn0559dad38ac9"
        }
    }

    $.ajax(deezerApi).done(function (response) {
        console.log(response.data[0].title);

        $("#button1").on("click", function (event) {
            $(".workP").empty();
            $(".forecast1").empty();
            i++
            var work = $("<div>");
            var workP = $("<p>");
            workP.text(JSON.stringify(response.data[i]));
            var songName = (response.data[i].title);
            console.log(songName);

            workP.attr("Class", "workP");
            work.attr('class', 'work');
            //($(".work")).append(workP);
            ($(".forecast1")).append(workP);


            $.ajax(geniusApi).done(function (response) {
                console.log(response);
            });

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat",
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
                    "x-rapidapi-key": "7ac5693631msh1be654ee56cba4ap14b22cjsn1aef1fe207ca"
                }
            }

            $.ajax(settings).done(function (response) {
                console.log(response);
            });

            var searchEntry = "Apple";
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

                var searchTest = $("<text>")
                searchTest.text("");
                searchTest.text(JSON.stringify(response.data[i]));

            });
            var lyricsApi = {
                "async": true,
                "crossDomain": true,
                "url": "https://canarado-lyrics.p.rapidapi.com/lyrics/" + songName + artistName,
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "canarado-lyrics.p.rapidapi.com",
                    "x-rapidapi-key": "d8bb7331d7mshcb58195d90da480p15ca06jsn0559dad38ac9"
                }
            }

            $.ajax(lyricsApi).done(function (response) {
                console.log(response);

                function displayArtistInfo() {
                    var displayArtistName = response.content[0].artist;
                    var displaySongTitle = response.content[0].title;
                    $("#artistName").text(displayArtistName);
                    $("#artistSongName").text(displaySongTitle);
                }
                displayArtistInfo();

                function displaySongLyrics() {
                    var songLyrics = response.content[0].lyrics;
                    $("#lyricsP").text(songLyrics);
                }
                displaySongLyrics();



            });

        });


    });
});
