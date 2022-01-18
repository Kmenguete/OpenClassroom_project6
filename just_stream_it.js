// Get the modal element
var modal = document.getElementById('modal_window');
// Get open modal button
var buttonBestMovieInfo = document.getElementById('the_best_movie_info');
// Get close button
var closeBestMovieInfoButton = document.getElementById('close');

// Listen for open click best movie
buttonBestMovieInfo.addEventListener('click', openBestMovieModal);
// Listen for close click best movie
closeBestMovieInfoButton.addEventListener('click', closeBestMovieModal);

// Function to open modal best movie
function openBestMovieModal(){
	modal.style.display = 'block';
}

// Function to close modal best movie
function closeBestMovieModal(){
	modal.style.display = 'none';
} 

// Get open modal button for other movies
var buttonRatedMovies = document.getElementsByClassName('modal_info'); 

// Get close button
var closeOtherMovieInfoButton = document.getElementById('close');

// Listen for open click other movie
for (var i = 0; i < buttonRatedMovies.length; i++) {
	buttonRatedMovies[i].addEventListener('click', openRatedMovieModal);
}
// Listen for close click other movie
closeOtherMovieInfoButton.addEventListener('click', closeRatedMovieModal); 

// Function to open modal other movie
function openRatedMovieModal(){
	modal.style.display = 'block';
} 

// Function to close modal other movie
function closeRatedMovieModal(){
	modal.style.display = 'none';
} 

// API URL 

const apiUrl = 'http://localhost:8000/api/v1/titles/';

// Get movies information from API

async function getMoviesData(url){
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
