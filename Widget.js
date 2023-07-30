

var rating
var reviewdisplay = []
function fetchOverallRating(placeID, apiKey) {
  // Construct the API request URL
  var url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=rating&key=${apiKey}`;

  // Make the API request}
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Extract the rating from the API response
      rating = data.result.rating;
      console.log('Overall Rating:', rating);
    })
    .catch(error => {
      console.log("fetch failed")
      
      console.log('Error:', error);
    });
}

// Function to fetch reviews with authors' profile pictures from Google Places API
function fetchReviewsWithProfilePictures(placeID, apiKey) {
  // Construct the API request URL
  var url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=reviews&key=${apiKey}`;

  // Make the API request
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Extract the reviews from the API response
      var reviews = data.result.reviews;
      for(var i = 0; i<review.length; i++){
        const temp = {profile_photo_url : review[i].profile_photo_url, author_name : review[i].author_name, rating : review[i].rating, text : review[i].text}
        reviewdisplay.push(temp)
      }
      console.log(reviewdisplay)
      // Iterate over each review
      reviews.forEach(review => {
        var profile = review.author_name;
        var text = review.text;
        var profilePictureUrl = review.profile_photo_url;

        // Do something with the profile, review text, and profile picture URL
        console.log('Profile:', profile);
        console.log('Review Text:', text);
        console.log('Profile Picture URL:', profilePictureUrl);
      });
    })
    .catch(error => {
      console.log('Error:', error);
    });
}



window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    // Example usage
    var placeID = urlParams.get('param1');
    var apiKey = urlParams.get('param2');

    fetchOverallRating(placeID, apiKey);
    fetchReviewsWithProfilePictures(placeID, apiKey);
    console.log(placeID)
    //Collapsible()
}
