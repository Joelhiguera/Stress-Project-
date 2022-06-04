var question1 = document.getElementById("question-1")
var question2 = document.getElementById("question-2")
var question3 = document.getElementById("question-3")
var question4 = document.getElementById("question-4")
var question5 = document.getElementById("question-5")

var APIKey = "AIzaSyB2AVRTPsPVNyZ9x6SkKoF8qwA4NTcxRKM"

// Access different buttons by child index?
// Will eventually need at least two fetch requests using different APIs
// How will we recognize quiz 'score'?


// Want to fetch YouTube's API
// Refer to: https://developers.google.com/youtube/v3/docs/search/list,
// https://developers.google.com/youtube/v3/guides/implementation/search

// Something like:
// '????' What specifically are we searching for, and when?
// In particular, still need to nail down when we do any of this
function getVideosByKeyword(grabUrl) {
  var grabUrl = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=calming%20exercises&type=video&videoDefinition=high&key=" + APIKey 

  // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&order=viewCount&q=calming%20exercises&type=video&videoDefinition=high&key=AIzaSyB2AVRTPsPVNyZ9x6SkKoF8qwA4NTcxRKM
  // For testing. Works. Need to access the information, and then put the relevant information somewhere on the document.

  // Then fetch the variable.
  fetch(grabCurrentUrl)
  .then(function (response) {
    return response.json();
  })
  .then (function (data) {
    console.log(data)

  })

}

  // ---- NOTES -------------------------------------------------------------------------------------------------------------------------
  // %20 designates spaces in this particular api
  // Find parameters based on the first refer link above.
  // Parameter notes: 
  // q= ; is the search query.
  // maxResults= ; can set a number for maximum results.
  // key= ; the API key.
  // part=snippet ; is a required parameter that specifies a comma-separated list of one or
  // more search resource properties the API response will include. Set value to snippet
