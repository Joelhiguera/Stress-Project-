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
function getVideosByKeyword(grabUrl) {
  var grabUrl = "https://www.googleapis.com/youtube/v3/search" // Variables for search queries in the parameter.
  
  // Find parameters based on the first refer link above.
  // Parameter notes: q= ; is the search query.
  // maxResults= ; can set a number for maximum results.
  // key= ; the API key.
  // part=snippet ; is a required parameter that specifies a comma-separated list of one or
  // more search resource properties the API response will include. Set value to snippet
  // My understanding is that Snippet basically makes a small iframe for the search criteria

  // Then fetch the variable.
}