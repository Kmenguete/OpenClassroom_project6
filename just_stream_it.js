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
 
// creating a function that open modal 

function openModal(modal, buttonModal) {
	buttonModal.addEventListener('mouseover', function() {
			buttonModal.style.transform = 'scale(1.25)';
			buttonModal.style.cursor = 'pointer';
		})
		buttonModal.onclick = function() {
			modal.style.display = 'block';
		} 
		window.onclick = function(event) {
			modal.style.display = 'none'
		}
	};

// creating modals for movies list

function createModal(movie_data) { 
	var movie_title = movie_data.title.replaceAll(' ', '_')
	var modal_window = document.createElement('div'); 
	modal_window.setAttribute('class', modal_window);
	modal_window.setAttribute('id', movie_title + '_' + 'modal_window');
    modal_window.style.position = 'fixed';
	modal_window.style.top = '0';
    modal_window.style.bottom = '0';
    modal_window.style.left = '0';
    modal_window.style.right = '0';
    modal_window.style.background = 'rgba(0, 0, 0, 0.7)';
    modal_window.style.transition = '500ms';
    modal_window.style.display = 'none';
    modal_window.style.opacity = '0';   

    var span = document.createElement('span');
    span.setAttribute('id', 'close_' + movie_title);
    span.setAttribute('class', 'close');
    span.setAttribute('href', '#'); 
    span.innerHTML = '&times;';
    span.style.float = 'right';
    span.style.fontSize = '20px';
    span.style.color = 'rgb(100,100,100)';
    span.addEventListener('mouseover', function() {
			span.style.color = 'black';
		    span.style.textDecoration = 'none';
		    span.style.cursor = 'pointer';
		})
		span.onclick = function() {
			modal.style.display = 'none';
		}
   

    var modal_content = document.createElement('div');
    modal_content.setAttribute('class', modal_content);
    modal_content.setAttribute('id', movie_title + '_' + 'modal_content');
    modal_content.style.position = 'relative';
    modal_content.style.transition = 'all 5s ease-in-out';
    modal_content.style.backgroundColor = 'rgb(200, 200, 200)';
    modal_content.style.margin = '15% auto'; /* 15% from the top and centered */
    modal_content.style.padding = '20px';
    modal_content.style.border = '1px solid #414141';
    modal_content.style.width = '80%'; /* Could be more or less, depending on screen size */
    modal_content.style.fontSize = '20px';
    modal_content.style.fontFamily = '"abel_regular", Arial, serif';
    modal_content.style.textAlign = 'left';
    modal_content.style.color = 'rgb(50,50,50)'; 

    var imageMovie = document.createElement('img');
    imageMovie.src = movie_data.image_url;
    imageMovie.alt = movie_title;



    var display_titles = document.createElement("p");
    var display_genres = document.createElement("p");
    var display_date_published = document.createElement("p");
    var display_rated = document.createElement("p");
    var display_imdbScores = document.createElement("p");
    var display_filmDirectors = document.createElement("p");
    var display_listsOfActors = document.createElement("p");
    var display_duration = document.createElement("p");
    var display_countries = document.createElement("p");
    var display_moviesAbstract = document.createElement("p"); 

    display_titles.innerHTML = "Movie: " + movie_title;
    display_genres.innerHTML = "Genres: " + movie_data.genres;
    display_date_published.innerHTML = "Release Date: " + movie_data.date_published;
    display_rated.innerHTML = "Rated: " + movie_data.rated;
    display_imdbScores.innerHTML = "Imdb score: " + movie_data.imdb_score;
    display_filmDirectors.innerHTML = "Movie director: " + movie_data.directors;
    display_listsOfActors.innerHTML = "List of Actors: " + movie_data.actors;
    display_duration.innerHTML = "Duration: " + movie_data.duration;
    display_countries.innerHTML = "Country: " + movie_data.countries;
    display_moviesAbstract.innerHTML = "Movie abstract: " + movie_data.description;  


    modal_content.appendChild(span)
    modal_content.appendChild(imageMovie)
    modal_content.appendChild(display_titles) 
    modal_content.appendChild(display_genres) 
    modal_content.appendChild(display_date_published)
    modal_content.appendChild(display_rated)
    modal_content.appendChild(display_imdbScores)
    modal_content.appendChild(display_filmDirectors)
    modal_content.appendChild(display_listsOfActors)
    modal_content.appendChild(display_duration)
    modal_content.appendChild(display_countries)
    modal_content.appendChild(display_moviesAbstract) 

    modal_window.appendChild(modal_content) 
    return modal_window;
 
}; 

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
                    
                    console.log(response); 
		    		try{ 
		    			var movie_title = response.title.replaceAll(' ', '_')

		    			var modal_container = document.querySelector(".modal_container") 
		    		
		    			var modal_window = createModal(response);
		    			modal_container.appendChild(modal_window);

		    			// create an item for each one 

		    	        listItem = document.createElement('li'); 
		    	        listItem.className = "modal_info";
		    	        listElement.appendChild(listItem);
		    	        var buttonModal = document.createElement('a');
		    	        buttonModal.setAttribute('id', movie_title + '_buttonModal')
                        
                        
		    	        buttonModal.className = "button";
                        
		    	
		    			// Add the movie image to the li tag
		    	        var img = document.createElement('img');
		    		    img.src = response.image_url; 
		    		    buttonModal.appendChild(img);
		    		    listItem.appendChild(buttonModal);
		    		    document.getElementById('best_movies').appendChild(listItem);

		    		    var new_modal_window = document.getElementById(movie_title + '_modal_window');
		    		    buttonModal.href = '#' + movie_title + '_modal_window';
		    			var new_buttonModal = document.getElementById(movie_title + '_buttonModal');
		    			
		    			openModal(new_modal_window, new_buttonModal);



		    			
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
