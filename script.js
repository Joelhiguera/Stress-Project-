var question1 = document.getElementById("question-1")
var question2 = document.getElementById("question-2")
var question3 = document.getElementById("question-3")
var question4 = document.getElementById("question-4")
var question5 = document.getElementById("question-5")

var vidList = document.getElementById("vid-list")

var APIKey = "AIzaSyB2AVRTPsPVNyZ9x6SkKoF8qwA4NTcxRKM"

// Access different buttons by child index?
// Will eventually need at least two fetch requests using different APIs
// How will we recognize quiz 'score'?

function initMap() {
  // The location of Uluru
  const utah = {lat:40.433913164329596, lng:-111.87754869011466}
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: utah,
  });
  // The marker, positioned at 
  new google.maps.Marker({
    position: utah,
    map: map,
  });

  new google.maps.Marker({
      position: {lat:40.133, lng:-111.87754869011466},
      map: map,
    });
}



window.initMap = initMap;
      

// Want to fetch YouTube's API
// Refer to: https://developers.google.com/youtube/v3/docs/search/list,
// https://developers.google.com/youtube/v3/guides/implementation/search

// Something like:
// '????' What specifically are we searching for, and when?
// In particular, still need to nail down when we do any of this

// Keyword will variate based on the score of the completed quiz.
// if less than 5, between 5 - 15, etc.
// stress management techniques

// Based on the score, should I call different functions? Or change the search query?
// Leaning toward multiple functions.

function getVideosByKeyword(grabUrl) {
  var grabUrl = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=calming%20exercises&type=video&videoDefinition=high&key=" + APIKey 
  // For the moment, 'calming%20exercises' is the placeholder search query

  // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&order=viewCount&q=calming%20exercises&type=video&videoDefinition=high&key=AIzaSyB2AVRTPsPVNyZ9x6SkKoF8qwA4NTcxRKM
  // For testing. Works. Need to access the information, and then put the relevant information somewhere on the document.

  // Then fetch the variable.
  fetch(grabUrl)
  .then(function (response) {
    return response.json();
  })
  .then (function (data) {
    console.log(data)
    console.log(data.items[0].id.videoId)

    for (var i = 0; i < data.items.length; i++) {
      var vidId = data.items[i].id.videoId
      var vidTitle = data.items[i].snippet.title

      $(vidList).append('<li><a target="_blank" href="https://www.youtube.com/watch?v=' + vidId + '">' + vidTitle + '</a></li>')
    }
  })
}

  // ---- NOTES -------------------------------------------------------------------------------------------------------------------------
  // By default the API will return the first 5 results.
  // %20 designates spaces in this particular api
  // Find parameters based on the first refer link above.
  // Parameter notes: 
  // q= ; is the search query.
  // maxResults= ; can set a number for maximum results.
  // key= ; the API key.
  // part=snippet ; is a required parameter that specifies a comma-separated list of one or
  // more search resource properties the API response will include. Set value to snippet

getVideosByKeyword();
