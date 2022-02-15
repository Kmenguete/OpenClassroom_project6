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
                    var dynamic_title = response.title;
                    var dynamic_genres = response.genres;
                    var dynamic_releaseDate = response.year;
                    var dynamic_rated = response.rated;
                    var dynamic_imdbScore = response.imdb_score;
                    var dynamic_filmDirector = response.directors;
                    var dynamic_listOfActors = response.actors;
                    var dynamic_duration = response.duration;
                    var dynamic_country = response.countries;
                    var dynamic_movieAbstract = response.description; 
                    

                    
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
		    
		    	        
                        
                        
		    	        buttonModal.className = "button_best_movies";
                        
		    	
		    			// Add the movie image to the li tag
		    	        var img = document.createElement('img');
		    		    img.src = response.image_url; 
		    		    buttonModal.appendChild(img);
		    		    document.getElementById('best_movies').appendChild(listItem);
		    		    buttonModal.href = '#' + 'modal_window_best_movies';

		    		    

		    		    var modal_windows = document.getElementById('modal_window_best_movies'); 

		    		    $(function(){
		    		    	$('.button_best_movies').click(function(){
		    		    		var myModal = $('#modal_window_best_movies');
		    		    		myModal.find('.title_best_movies').text("Movie: " + dynamic_title);
		    		    		myModal.find('.genres_best_movies').text("Genres: " + dynamic_genres);
		    		    		myModal.find('.release_date_best_movies').text("Release Date: " + dynamic_releaseDate);
		    		    		myModal.find('.rated_best_movies').text("Rated: " + dynamic_rated);
		    		    		myModal.find('.imdb_score_best_movies').text("Imdb score: " + dynamic_imdbScore);
		    		    		myModal.find('.film_director_best_movies').text("Movie director: " + dynamic_filmDirector);
		    		    		myModal.find('.actors_best_movies').text("List of Actors: " + dynamic_listOfActors);
		    		    		myModal.find('.duration_best_movies').text("Duration: " + dynamic_duration);
		    		    		myModal.find('.country_best_movies').text("Country: " + dynamic_country);
		    		    		myModal.find('.movie_abstract_best_movies').text("Movie abstract: " + dynamic_movieAbstract); 
		    		    		myModal.modal('show');
		    		    	});
		    		    })



		    			
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

// Now I will create a for loop to get the 5 best movies of Romance category in my website.

let romanceBestMovies = fetch('http://127.0.0.1:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Romance&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=');

romanceBestMovies.then(async (romance_responseData) =>{
	console.log(romance_responseData); 

	var romance_response = await romance_responseData.json();
	console.log(romance_response); 
	try {
		function MakeRomanceMoviesList() {
			// Establish the array that stores the responses from the API
			var romanceMovies = [romance_response.results[0].url, romance_response.results[1].url, romance_response.results[2].url, romance_response.results[3].url, romance_response.results[4].url], 
			// Make the list
		    listElement = document.createElement('ul'),
		    // Set up a loop that goes through the items in listItems one at a time
		    numberOfRomancetMovies = romanceMovies.length,
		    romanceMovie,
		    i; 
		    // for (let romanceMovieUrl of romanceMovies) 
		    for (var i = 0; i < numberOfRomancetMovies; ++i) {
		    	// Add the item content 

		    	var romanceMoviesData = fetch(romanceMovies[i]);
		    	romanceMoviesData.then(async (romance_responseData) => {
		    		console.log(romance_responseData);

		    		var romance_response = await romance_responseData.json();
                    var romance_title = romance_response.title;
                    var romance_genres = romance_response.genres;
                    var romance_releaseDate = romance_response.year;
                    var romance_rated = romance_response.rated;
                    var romance_imdbScore = romance_response.imdb_score;
                    var romance_filmDirector = romance_response.directors;
                    var romance_listOfActors = romance_response.actors;
                    var romance_duration = romance_response.duration;
                    var romance_country = romance_response.countries;
                    var romance_movieAbstract = romance_response.description; 

                    console.log(romance_response); 
                    try {
                    	var romance_movie_title = romance_response.title.replaceAll(' ', '_')		    		

		    			// create an item for each one 

		    	        listItem = document.createElement('li'); 
		    	        listItem.className = "modal_info";
		    	        listElement.appendChild(listItem);
		    	        var buttonModal = document.createElement('a');
		    	        buttonModal.setAttribute('id', romance_movie_title + '_buttonModal');
		    	        listItem.appendChild(buttonModal);
		    	        var myButton = document.getElementById(romance_movie_title + '_buttonModal'); 

		    	        buttonModal.className = "button_romance";
                        
		    	
		    			// Add the movie image to the li tag
		    	        var img = document.createElement('img');
		    		    img.src = romance_response.image_url; 
		    		    buttonModal.appendChild(img);
		    		    document.getElementById('Romance').appendChild(listItem);
		    		    buttonModal.href = '#' + 'modal_window_Romance'; 

		    		    $(function(){
		    		    	$('.button_romance').click(function(){
		    		    		var myRomanceModal = $('#modal_window_Romance');
		    		    		myRomanceModal.find('.title_Romance').text("Movie: " + romance_title);
		    		    		myRomanceModal.find('.genres_Romance').text("Genres: " + romance_genres);
		    		    		myRomanceModal.find('.release_date_Romance').text("Release Date: " + romance_releaseDate);
		    		    		myRomanceModal.find('.rated_Romance').text("Rated: " + romance_rated);
		    		    		myRomanceModal.find('.imdb_score_Romance').text("Imdb score: " + romance_imdbScore);
		    		    		myRomanceModal.find('.film_director_Romance').text("Movie director: " + romance_filmDirector);
		    		    		myRomanceModal.find('.actors_Romance').text("List of Actors: " + romance_listOfActors);
		    		    		myRomanceModal.find('.duration_Romance').text("Duration: " + romance_duration);
		    		    		myRomanceModal.find('.country_Romance').text("Country: " + romance_country);
		    		    		myRomanceModal.find('.movie_abstract_Romance').text("Movie abstract: " + romance_movieAbstract); 
		    		    		myRomanceModal.modal('show');
		    		    	});
		    		    })
                    } catch(error) {
                    	console.log(error);
                    }
		    	})
		    }
		} 
		// Use the function
		MakeRomanceMoviesList();

	} catch(error) {
    	console.log(error); 
    }
})


