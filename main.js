/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play



const URL = "https://itunes.apple.com/search?term=";
var input = document.querySelector("#input");
var submit = document.querySelector("#submit");
let resultsDisplay = document.querySelector(".mainContent");
var audio = document.querySelector("audio");

// searchInput.addEventListener("keypress", function (e) {
//   if (e.keyCode === 13) {
submit.addEventListener("click", function (e) {
  e.preventDefault();
  let userInput = input.value;
  axios.get(url)
    .then(function (response) {
      let results = response.data.results;
      populateHTML(results)
    });
});

resultsDisplay.addEventListener("click", function (e) {

  audio.setAttribute("src", e.target.value);
})

function populateHTML(res) {
  resultsDisplay.innerHTML = " ";

  for (i = 0; i < results.length; i++) {
    let data = results[i];
    let artistName = results[i].artistName;
    let albumArtwork = results[i].artworkUrl100;
    let trackName = results[i].trackName;
    let preview = results[i].previewUrl;

    resultsDisplay.innerHTML += `
          
      <div class ="container-results">
        <div class ="image-parent">
          <img src ="${albumArtwork}">
      </div>
            
      <div class="content-parent">
        <p>${artistName}</p>
        <p>${trackName}</p>
        <button type="button" value =${preview}>Play</button>
      </div>
    </div>
    `
  }
}




