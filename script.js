var question1 = document.getElementById("question-1")
var question2 = document.getElementById("question-2")
var question3 = document.getElementById("question-3")
var question4 = document.getElementById("question-4")
var question5 = document.getElementById("question-5")

var vidList = document.getElementById("vid-list")

var APIKey = "AIzaSyB2AVRTPsPVNyZ9x6SkKoF8qwA4NTcxRKM"

var score;

// Access different buttons by child index?
// Will eventually need at least two fetch requests using different APIs
// How will we recognize quiz 'score'?

var trtLocations = document.getElementById("treatment")
var mapShow = document.getElementById("showMap")

trtLocations.addEventListener('click', function() {
  if (mapShow.classList.contains('hide')) {
    mapShow.classList.remove('hide')
    trtLocations.classList.add('active')
  } else {
    mapShow.classList.add('hide')
    trtLocations.classList.remove('active')
  }
})

var strReliefVids = document.getElementById("stressVids")
var mediaList = document.getElementById("media-list-output")

strReliefVids.addEventListener('click', function() {
  if (mediaList.classList.contains('hide')) {
    $('#vid-list').empty()
    getVideosByKeyword()
    mediaList.classList.remove('hide')
    strReliefVids.classList.add('active')
  } else {
    mediaList.classList.add('hide')
    strReliefVids.classList.remove('active')
  }
})


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
      position: {lat:41.0799789688119, lng:-111.9645254730709},
      map: map,
    });
    new google.maps.Marker({
        position: {lat:40.75412999847983, lng:-111.84642245520773},
        map: map,
      });
      new google.maps.Marker({
        position: {lat:40.74996869807189, lng:-111.92058016409855},
        map: map,
      });
      new google.maps.Marker({
        position: {lat:40.71875064410805, lng:-111.97001863669244},
        map: map,
      });
      new google.maps.Marker({
        position: {lat:40.689600578890634, lng:-111.93431307315241},
        map: map,
      });
      new google.maps.Marker({
        position: {lat:40.689600578890634, lng:-111.93980623677395},
        map: map,
      });
      new google.maps.Marker({
        position: {lat:40.41203897892292,lng: -111.77501132812768},
        map: map,
      });
      new google.maps.Marker({
        position: {lat:40.3994902893059, lng:-111.74205234639842},
        map: map,
      });
      new google.maps.Marker({
        position: {lat:40.3576444289362, lng:-111.68986729199378},
        map: map,
      });
      new google.maps.Marker({
        position: {lat:40.3488965233879, lng:-111.70207251840117},
        map: map,
      });
      new google.maps.Marker({
        position: {lat:40.305767209862935, lng:-111.67978601049028},
        map: map,
      });

      new google.maps.Marker({
        position: {lat:40.299230061346606, lng:-111.6780716637279},
        map: map,
      });

      new google.maps.Marker({
        position: {lat:40.24653152066559, lng:-111.69063867495234},
        map: map,
      });

      new google.maps.Marker({
        position: {lat:40.14345218864863, lng:-111.72565518394136},
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
  var grabUrl = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=stress%20relief&type=video&videoDefinition=high&key=" + APIKey 
  // For the moment, 'calming%20exercises' is the placeholder search query

  // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=viewCount&q=stress%20relief&type=video&videoDefinition=high&key=AIzaSyB2AVRTPsPVNyZ9x6SkKoF8qwA4NTcxRKM
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

      $(vidList).append('<li><a target="_blank" href="https://www.youtube.com/watch?v=' + vidId + '">' + vidTitle + '</a></li><hr>')
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

// Commented out until I have a place to put the results.
// getVideosByKeyword();





// quiz JS



var button1 = document.getElementById('btn-1');
var button2 = document.getElementById('btn-2');
var button3 = document.getElementById('btn-3');
var button4 = document.getElementById('btn-4');
var button5 = document.getElementById('btn-5');
var questions = document.getElementById('questions')

var score = sessionStorage



// variables for test results 

var lowStress
var medStress
var highStress
var extremeStress


var button1 = document.getElementById('btn-1');
var button2 = document.getElementById('btn-2');
var button3 = document.getElementById('btn-3');
var button4 = document.getElementById('btn-4');
var button5 = document.getElementById('btn-5');


var button6 = document.getElementById('btn2-1');
var button7 = document.getElementById('btn2-2');
var button8 = document.getElementById('btn2-3');
var button9 = document.getElementById('btn2-4');
var button10 = document.getElementById('btn2-5');

var button11 = document.getElementById('btn3-1');
var button12 = document.getElementById('btn3-2');
var button13 = document.getElementById('btn3-3');
var button14 = document.getElementById('btn3-4');
var button15 = document.getElementById('btn3-5');

var button16 = document.getElementById('btn4-1');
var button17 = document.getElementById('btn4-2');
var button18 = document.getElementById('btn4-3');
var button19 = document.getElementById('btn4-4');
var button20 = document.getElementById('btn4-5');

var button21 = document.getElementById('btn5-1');
var button22 = document.getElementById('btn5-2');
var button23 = document.getElementById('btn5-3');
var button24 = document.getElementById('btn5-4');
var button25 = document.getElementById('btn5-5');


var result = document.getElementById("results");

document.getElementById("score").innerHTML = "Stress out of my mind!";


var score = sessionStorage



// variables for test results 

var lowStress
var medStress
var highStress
var extremeStress

//Question 1

button1.addEventListener('click', function() {
 
  score = 1

  question1Hide();

})


button2.addEventListener('click', function() {
 
  score = 2

  question1Hide();

})


button3.addEventListener('click', function() {
 
  score = 3

  question1Hide();

})


button4.addEventListener('click', function() {
 
  score = 4

  question1Hide();

})


button5.addEventListener('click', function() {
 
  score = 5

  question1Hide();

})


//-----------------------------------question 2


button6.addEventListener('click', function() {
 
  problems = 1

  question2Hide();

})

button7.addEventListener('click', function() {
 
  problems = 2

  question2Hide();

})

button8.addEventListener('click', function() {
 
  problems = 3

  question2Hide();

})

button9.addEventListener('click', function() {
 
  problems = 4

  question2Hide();

})

button10.addEventListener('click', function() {
 
  problems = 5

  question2Hide();

})


// question 3----------------------------------------


button11.addEventListener('click', function() {
 
  problems = 1

  question3Hide();

})

button12.addEventListener('click', function() {
 
  problems = 2

  question3Hide();

})

button13.addEventListener('click', function() {
 
  problems = 3

  question3Hide();

})

button14.addEventListener('click', function() {
 
  problems = 4

  question3Hide();

})

button15.addEventListener('click', function() {
 
  problems = 5

  question3Hide();

})


//question4---------------------------------------------------------


button16.addEventListener('click', function() {
 
  problems = 1

  question4Hide();

})

button17.addEventListener('click', function() {
 
  problems = 2

  question4Hide();

})

button18.addEventListener('click', function() {
 
  problems = 3

  question4Hide();

})

button19.addEventListener('click', function() {
 
  problems = 4

  question4Hide();

})

button20.addEventListener('click', function() {
 
  problems = 5

  question4Hide();

})


//question 5--------------------------------------------


button21.addEventListener('click', function() {
 
  problems = 1


  results()


})

button22.addEventListener('click', function() {
 
  problems = 2

  
  results()


})

button23.addEventListener('click', function() {
 
  problems = 3


  results()


})

button24.addEventListener('click', function() {
 
  problems = 4


  results()


})

button25.addEventListener('click', function() {
 
  problems = 5


  results()

})


function question1Hide() {
  question1.classList.add("hide")

  question2.classList.remove("hide")
}

function question2Hide() {
  question2.classList.add("hide")

  question3.classList.remove("hide")
}

function question3Hide() {
  question3.classList.add("hide")

  question4.classList.remove("hide")
}

function question4Hide() {
  question4.classList.add("hide")

  question5.classList.remove("hide")

  
}


function results() {

  question5.classList.add("hide")

  result.classList.remove('hide')


}

function addScore() {
  score = score
}

function showResults() {
  question5.classList.add("hide")

  results.classList.remove("hide")
}



// Access different buttons by child index?
// Will eventually need at least two fetch requests using different APIs
// How will we recognize quiz 'score'?

// PSUEDO CODE FOR TEST RESULTS 

/* If your score is betwen 1-7 = low stress
   If your score is betwwen 8-16 = medium stress
   If your score is between 17-24 = High Stress
   If your score is 25 = Extreme Stress */

   /* if you select button 5, + 5 points
      If you select button 4, + 4 points
      If you select button 3, + 3 points 
      If you select button 2,  +2 points
      If you select button 1,   +1 point */



