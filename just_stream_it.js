// API url for the movie with the highest imdb score

let bestMovie = 'http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&rating=&rating_contains=&sort_by=-imdb_score&title=&title_contains=&writer=&writer_contains=&year=';

// Defining async function
async function getApi(url) {
	// Storing response 
	const response = await fetch(url);
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getApi(bestMovie);

//Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
} 
// Function to define innerHTML for HTML tage
function showBestMovie(data) {
	let movieImage = '/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&rating=&rating_contains=&sort_by=-imdb_score&title=&title_contains=&writer=&writer_contains=&year=/image_url'
} 
// Setting innerHTML as movieImage variable
document.getElementById('best_movie').innerHTML = movieImage;