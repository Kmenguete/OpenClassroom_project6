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

  
  setModalValues(
      title, 
      gender,
      releaseDate,
      rated,
      imdbScore,
      filmDirector,
      listOfActors,
      duration,
      country,
      movieAbstract
      )
      var bestMovieImage = `<img src="${movieImage}"/>`;
      var display_movieImage = document.querySelector("#best_movie_image"); 


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

function setModalValues(
    title,
    gender,
    releaseDate ,
    rated,
    imdbScore,
    filmDirector,
    listOfActors,
    duration,
    country,
    movieAbstract,
) {
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
}
 


// Now I will create a for loop to get the 5 best movies(any category) in my website.

let searchbestMovies = fetch('http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score');

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
		    // for (let bestMovieUrl of bestMovies)

		    for (var i = 0; i < numberOfBestMovies; ++i) { 
		    	// Add the item content 

		    	var bestMoviesData = fetch(bestMovies[i]);
		    	bestMoviesData.then(async (responseData)=>{
		    		console.log(responseData);

		    		var response = await responseData.json();
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

                    var display_title = document.querySelector("#title_best_movies");
				    var display_gender = document.querySelector("#gender_best_movies");
				    var display_releaseDate = document.querySelector("#release_date_best_movies");
				    var display_rated = document.querySelector("#rated_best_movies");
				    var display_imdbScore = document.querySelector("#imdb_score_best_movies");
				    var display_filmDirector = document.querySelector("#film_director_best_movies");
				    var display_listOfActors = document.querySelector("#actors_best_movies");
				    var display_duration = document.querySelector("#duration_best_movies");
				    var display_country = document.querySelector("#country_best_movies");
				    var display_movieAbstract = document.querySelector("#movie_abstract_best_movies"); 

                    
                    console.log(response); 
		    		try{ 
		    			var movie_title = response.title.replaceAll(' ', '_')

		    			var modal_container = document.querySelector(".modal_container") 
		    		

		    			// create an item for each one 

		    	        listItem = document.createElement('li'); 
		    	        listItem.className = "modal_info";
		    	        listElement.appendChild(listItem);
		    	        var buttonModal = document.createElement('a');
		    	        buttonModal.setAttribute('id', movie_title + '_buttonModal');
		    	        listItem.appendChild(buttonModal);
		    	        var myButton = document.getElementById(movie_title + '_buttonModal');
		    	        buttonModal.setAttribute('onclick', 'openModal()');
		    	        
                        
                        
		    	        buttonModal.className = "button";
                        
		    	
		    			// Add the movie image to the li tag
		    	        var img = document.createElement('img');
		    		    img.src = response.image_url; 
		    		    buttonModal.appendChild(img);
		    		    document.getElementById('best_movies').appendChild(listItem);
		    		    buttonModal.href = '#' + 'modal_window_best_movies';

		    		    

		    		    var modal_windows = document.getElementById('modal_window_best_movies'); 

		    		    function openModal() {
		    		    myButton.addEventListener('mouseover', function() {
						myButton.style.transform = 'scale(1.25)';
					})
					myButton.onclick = function() {
						modal_windows.style.display = "block";
					} 
					window.onclick = function(event) {
						modal_windows.style.display = "none";
					}
		    		    }; 
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
