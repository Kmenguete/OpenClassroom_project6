let searchbestMovie = fetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score');

searchbestMovie.then(async (responseData)=>{
	console.log(responseData);

	var response = await responseData.json();
	console.log(response); 

	try {
		var bestMovie = fetch(response.results[0].url);
		bestMovie.then(async (responseData)=>{
    console.log(responseData);

    var response = await responseData.json();
    console.log(response); 

    try{

    // Get best movie data from API

    
    var title = response.title;
    var gender = response.genres;
    var releaseDate = response.year;
    var rated = response.rated;
    var imdbScore = response.imdb_score;
    var filmDirector = response.directors;
    var listOfActors = response.actors;
    var duration = response.duration;
    var country = response.countries;
    var movieAbstract = response.description; 
    var movieImage = response.image_url;

    // Get data displayed

    var display_title = document.querySelector("#title_best_movie");
    var display_gender = document.querySelector("#gender_best_movie");
    var display_releaseDate = document.querySelector("#release_date_best_movie");
    var display_rated = document.querySelector("#rated_best_movie");
    var display_imdbScore = document.querySelector("#imdb_score_best_movie");
    var display_filmDirector = document.querySelector("#film_director_best_movie");
    var display_listOfActors = document.querySelector("#actors_best_movie");
    var display_duration = document.querySelector("#duration_best_movie");
    var display_country = document.querySelector("#country_best_movie");
    var display_movieAbstract = document.querySelector("#movie_abstract_best_movie"); 
    var bestMovieImage = `<img src="${movieImage}"/>`;
    var display_movieImage = document.querySelector("#best_movie_image"); 


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

	var response = await responseData.json();
	console.log(response); 
	try { 
		function makeBestMoviesList() { 
			// Establish the array that stores the responses from the API
		    var bestMovies = [response.results[0].url, response.results[1].url, response.results[2].url, response.results[3].url, response.results[4].url],
		   
		    // Make the list
		    listElement = document.createElement('ul'),
		    // Set up a loop that goes through the items in listItems one at a time
		    numberOfBestMovies = bestMovies.length,
		    bestMovie,
		    i; 
		    

		    for (var i = 0; i < numberOfBestMovies; ++i) { 


		    	// Add the item content 

		    	var bestMoviesData = fetch(bestMovies[i]);
		    	bestMoviesData.then(async (responseData)=>{
		    		console.log(responseData);

		    		var response = await responseData.json();
		    		console.log(response); 
		    		try{  
		    			
		    			// Get best movies data from API  
		    			
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
		    			var dynamic_movieImage = response.image_url; 

		    			// Get data displayed

		    			var display_titles = document.querySelector(".title_best_movies");
					    var display_genders = document.querySelector(".gender_best_movies");
					    var display_releaseDates = document.querySelector(".release_date_best_movies");
					    var display_rateds = document.querySelector(".rated_best_movies");
					    var display_imdbScores = document.querySelector(".imdb_score_best_movies");
					    var display_filmDirectors = document.querySelector(".film_director_best_movies");
					    var display_listsOfActors = document.querySelector(".actors_best_movies");
					    var display_durations = document.querySelector(".duration_best_movies");
					    var display_countries = document.querySelector(".country_best_movies");
					    var display_moviesAbstract = document.querySelector(".movie_abstract_best_movies"); 

					    display_titles.innerHTML = "Movie: " + dynamic_title;
					    display_genders.innerHTML = "Gender: " + dynamic_gender;
					    display_releaseDates.innerHTML = "Release Date: " + dynamic_releaseDate;
					    display_rateds.innerHTML = "Rated: " + dynamic_rated;
					    display_imdbScores.innerHTML = "Imdb score: " + dynamic_imdbScore;
					    display_filmDirectors.innerHTML = "Movie director: " + dynamic_filmDirector;
					    display_listsOfActors.innerHTML = "List of Actors: " + dynamic_listOfActors;
					    display_durations.innerHTML = "Duration: " + dynamic_duration;
					    display_countries.innerHTML = "Country: " + dynamic_country;
					    display_moviesAbstract.innerHTML = "Movie abstract: " + dynamic_movieAbstract; 

		    			
		    			// create an item for each one 

		    	        listItem = document.createElement('li'); 
		    	        listItem.className = "modal_info";
		    	        listElement.appendChild(listItem);
		    	        buttonModal = document.createElement('a');
		    	        buttonModal.className = "button";
		    	        buttonModal.href = "#modal_window_best_movies"; 
		
		    			// Add the movie image to the li tag
		    	        
		    	        var img = document.createElement('img');
		    		    img.src = dynamic_movieImage; 
		    		    buttonModal.appendChild(img);
		    		    listItem.appendChild(buttonModal);
		    		    document.getElementById('best_movies').appendChild(listItem);
		    		    listItem.addEventListener("click", function() {console.log(dynamic_movieImage)}); 


		    		} catch(error) {
    	console.log(error); 
    }

		    	});

		    }
		}
// Use the function
makeBestMoviesList();
		
	} catch(error) {
    	console.log(error);
    }
}); 

