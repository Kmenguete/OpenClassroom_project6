let searchbestMovie = fetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score');

searchbestMovie.then(async (responseData)=>{
	console.log(responseData);

	const response = await responseData.json();
	console.log(response); 

	try {
		const bestMovie = fetch(response.results[0].url);
		bestMovie.then(async (responseData)=>{
    console.log(responseData);

    const response = await responseData.json();
    console.log(response); 

    try{

    // Get best movie data from API

    
    const title = response.title;
    const gender = response.genres;
    const releaseDate = response.year;
    const rated = response.rated;
    const imdbScore = response.imdb_score;
    const filmDirector = response.directors;
    const listOfActors = response.actors;
    const duration = response.duration;
    const country = response.countries;
    const movieAbstract = response.description; 
    const movieImage = response.image_url;

    // Get data displayed

    const display_title = document.querySelector("#title_best_movie");
    const display_gender = document.querySelector("#gender_best_movie");
    const display_releaseDate = document.querySelector("#release_date_best_movie");
    const display_rated = document.querySelector("#rated_best_movie");
    const display_imdbScore = document.querySelector("#imdb_score_best_movie");
    const display_filmDirector = document.querySelector("#film_director_best_movie");
    const display_listOfActors = document.querySelector("#actors_best_movie");
    const display_duration = document.querySelector("#duration_best_movie");
    const display_country = document.querySelector("#country_best_movie");
    const display_movieAbstract = document.querySelector("#movie_abstract_best_movie"); 
    const bestMovieImage = `<img src="${movieImage}"/>`;
    const display_movieImage = document.querySelector("#best_movie_image"); 


    display_title.innerHTML = "Movie: " + title;
    display_gender.innerHTML = "Gender: " + gender;
    display_releaseDate.innerHTML = "Release Date: " + releaseDate;
    display_rated.innerHTML = "Rated: " + rated;
    display_imdbScore.innerHTML = "Imdb score: " + imdbScore;
    display_filmDirector.innerHTML = "Movie director: " + filmDirector;
    display_listOfActors.innerHTML = "List of Actors: " + listOfActors;
    display_duration.innerHTML = "Duration: " + duration;
    display_country.innerHTML = "Country: " + country;
    display_movieAbstract.innerHTML = "Movie abstract: " + movieAbstract;
    display_movieImage.insertAdjacentHTML("afterbegin", bestMovieImage);


    } catch(error) {
    	console.log(error);
    }
}) 

.catch((error) => {
	console.log(error);
});
	} catch(error) {
		console.log(error);
	}
}) 

.catch((error) => {
	console.log(error);
}); 

// Now I will create a for loop to get the 5 best movies(any category) in my website.

let searchbestMovies = fetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score');

searchbestMovies.then(async (responseData)=>{
	console.log(responseData);

	const response = await responseData.json();
	console.log(response); 
	try { 
		function makeBestMoviesList() { 
			// Establish the array that stores the responses from the API
		    const bestMovies = [response.results[0].url, response.results[1].url, response.results[2].url, response.results[3].url, response.results[4].url],
		    // Make a container element for the list
		    const listContainer = document.createElement('div');
		    // Make the list
		    const listElement = document.createElement('ul');
		    // Set up a loop that goes through the items in listItems one at a time
		    const nomberOfBestMovies = bestMovies.length;
		    let bestMovie;
		    let i; 
		    // Add it to the page
		    document.getElementsByTagName('body')[0].appendChild(listContainer);
		    listContainer.appendChild(istElement); 

		    for (i = 0; i < nomberOfBestMovies; ++i) { 

		    	// create an item for each one 

		    	const listItem = document.createElement('li');

		    	// Add the item content 

		    	const bestMoviesData = fetch(bestMovies[i]);
		    	bestMoviesData.then(async (responseData)=>{
		    		console.log(responseData);

		    		const response = await responseData.json();
		    		console.log(response); 
		    		try{  
		    			// Get best movies data from API 
		    			$('#modal_window_best_movies').on('show.bs.modal', function(event){
		    				var element = $(event.relatedTarget); // the li that triggered the modal to show 
		    				var dynamic_title = response.title;
                            var dynamic_gender = response.genres;
                            var dynamic_releaseDate = response.year;
                            var dynamic_rated = response.rated;
                            var dynamic_imdbScore = response.imdb_score;
                            var dynamic_filmDirector = response.directors;
                            var dynamic_listOfActors = response.actors;
                            var dynamic_duration = response.duration;
                            var dynamic_country = response.countries;
                            var dynamic_movieAbstract = response.description; 
		    			});
    
                    
                    var dynamic_movieImage = response.image_url;

		    		} catch(error) {
    	console.log(error);
    }

		    	});

		    	// Add the image to the li tag
		    	listItem.insertAdjacentHTML("afterbegin", dynamic_movieImage[i])

		    	// Add listItem to the listElement

		    	listItem.appendChild(listItem);
		    }
		}
		
	}
});