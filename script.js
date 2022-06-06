var question1 = document.getElementById("question-1")
var question2 = document.getElementById("question-2")
var question3 = document.getElementById("question-3")
var question4 = document.getElementById("question-4")
var question5 = document.getElementById("question-5")

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
      


