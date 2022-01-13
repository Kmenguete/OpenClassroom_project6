// Get the modal element
var modal = document.getElementById('modal_window');
// Get open modal button
var buttonBestMovieInfo = document.getElementById('the_best_movie_info');
// Get close button
var closeButton = document.getElementByClassName('close');

// Listen for click
buttonBestMovieInfo.addEventListener('click', openModal);

// Function to open modal
function openModal(){
	modal.style.display = 'block';
}