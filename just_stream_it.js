// Get the modal element
var modal = document.getElementById('modal_window');
// Get open modal button
var buttonBestMovieInfo = document.getElementById('the_best_movie_info');
// Get close button
var closeBestMovieInfoButton = document.getElementById('close');

// Listen for open click
buttonBestMovieInfo.addEventListener('click', openBestMovieModal);
// Listen for close click
closeBestMovieInfoButton.addEventListener('click', closeBestMovieModal);

// Function to open modal
function openBestMovieModal(){
	modal.style.display = 'block';
}

// Function to close modal
function closeBestMovieModal(){
	modal.style.display = 'none';
}