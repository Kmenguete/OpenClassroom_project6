// Get the modal

var modal = document.getElementById("modal_window");

var bestMovieInfo = document.getElementById("the_best_movie_info");

// Get the button that opens the modal

var button = document.getElementByClassName("modal_info");

// Get the <span> element that closes the modal

var span = document.getElementByClassName("close")[0];

// When the user clicks on the button, open the modal

button.onclick = function click() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal

span.onclick = function close() {
	modal.style.display = "none";
} 

// When the user clicks anywhere outside of the modal, close it

window.onclick = function event() {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}