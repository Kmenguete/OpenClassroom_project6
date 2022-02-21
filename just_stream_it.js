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

// I am creating a function that load movies for each category and for top rated movies(any category) list

function loadMovies(
	url,
	className,
	id,
	href,
	categoryName,
    maxMoviesToFetch
) {
    let movies = fetch(url);

    movies.then(async (responseData) => {
        console.log(responseData);
        const response = await responseData.json();
        console.log(response);
        try {
            function makeMoviesList() {
                // Establish the array that stores the responses from the API
                const start = 0;
                const end = maxMoviesToFetch;

                let moviesArray = [];

                for (let index = start; index < end; index++) {
                    moviesArray.push(response.results[index].url)
                }

                // Make the list
                listElement = document.createElement('ul'),
                    // Set up a loop that goes through the items in listItems one at a time
                    numberOfMovies = moviesArray.length
                    // Movie,
                    let i = 0;
                // for (let MovieUrl of Movies)
                for (i = 0; i < numberOfMovies; ++i) {
                    // Add the item content

                    var moviesData = fetch(moviesArray[i]);
                    moviesData.then(async (responseData) => {
                        console.log(responseData);

                        const movie = await responseData.json();
                        const title = movie.title;
                        const genres = movie.genres;
                        const releaseDate = movie.year;
                        const rated = movie.rated;
                        const imdbScore = movie.imdb_score;
                        const filmDirector = movie.directors;
                        const listOfActors = movie.actors;
                        const duration = movie.duration;
                        const country = movie.countries;
                        const movieAbstract = movie.description;

                        console.log(movie);
                        try {
                            const movie_title = movie.title.replaceAll(' ', '_')

                            // create an item for each one

                            listItem = document.createElement('li');
                            listItem.className = "modal_info";
                            listElement.appendChild(listItem);
                            var buttonModal = document.createElement('a');
                            buttonModal.setAttribute('id', movie_title + '_buttonModal');
                            listItem.appendChild(buttonModal);
                            var myButton = document.getElementById(movie_title + '_buttonModal');

                            buttonModal.className = className;

                            // Add the movie image to the li tag
                            var img = document.createElement('img');
                            img.src = movie.image_url;
                            buttonModal.appendChild(img);
                            document.getElementById(id).appendChild(listItem);
                            buttonModal.href = '#' + href;

                            $(function () {
                                $('.'+className).click(function () {
                                    console.log("movie clicked")
                                    var modal = $('#'+href);
                                    modal.find('.title_' + categoryName).text("Movie: " + title);
                                    modal.find('.genres_' + categoryName).text("Genres: " + genres);
                                    modal.find('.release_' + categoryName).text("Release Date: " + releaseDate);
                                    modal.find('.rated_' + categoryName).text("Rated: " + rated);
                                    modal.find('.imdb_score_' + categoryName).text("Imdb score: " + imdbScore);
                                    modal.find('.film_director_' + categoryName).text("Movie director: " + filmDirector);
                                    modal.find('.actors_' + categoryName).text("List of Actors: " + listOfActors);
                                    modal.find('.duration_' + categoryName).text("Duration: " + duration);
                                    modal.find('.country_' + categoryName).text("Country: " + country);
                                    modal.find('.movie_abstract_' + categoryName).text("Movie abstract: " + movieAbstract);
                                    modal.modal('show');
                                });
                            })
                        } catch (error) {
                            console.log(error);
                        }
                    })
                }
            }

            // Use the function
            makeMoviesList();

        } catch (error) {
            console.log(error);
        }
    })
}



// Now I will create a for loop to get the first 4 best movies(any category) in my website.

let searchbestMovies = fetch('http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score');

searchbestMovies.then(async (responseData)=>{
	console.log(responseData);

	var response = await responseData.json();
	console.log(response);
	try {
		function makeBestMoviesList() {
			// Establish the array that stores the responses from the API
		    var bestMovies = [response.results[1].url, response.results[2].url, response.results[3].url, response.results[4].url],

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
		    	})

		    }
		}
// Use the function
makeBestMoviesList();

	} catch(error) {
    	console.log(error);
    }
})



// Now I will create a for loop to get the  3 remaining best movies(any category) in my website.

let searchRemainingbestMovies = fetch('http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=-imdb_score&title=&title_contains=&writer=&writer_contains=&year=');

searchRemainingbestMovies.then(async (responseData)=>{
	console.log(responseData);

	var response = await responseData.json();
	console.log(response);
	try {
		function makeRemainingBestMoviesList() {
			// Establish the array that stores the responses from the API
		    var bestMovies = [response.results[0].url, response.results[1].url, response.results[2].url],

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
		    	})

		    }
		}
// Use the function
makeRemainingBestMoviesList();

	} catch(error) {
    	console.log(error);
    }
})

// Now I will create a function that fetch best movies data for each category

function loadMoviesForCategory(url,
                               secondPageUrl,
                               className,
                               id,
                               href,
                               categoryName,) {
    const pageOneMaxNumber = 5
    const pageTwoMaxNumber = 2

    // Load page 1
    loadMovies(url, className, id, href, categoryName, pageOneMaxNumber)
    // Load page 2
    loadMovies(secondPageUrl, className, id, href, categoryName, pageTwoMaxNumber)
}

// Now I will call the function that fetch best movies data for each category
loadMoviesForCategory(
    'http://127.0.0.1:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Romance&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=',
    'http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=Romance&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=-imdb_score&title=&title_contains=&writer=&writer_contains=&year=',
    'button_romance',
    'Romance',
    'modal_window_Romance',
    'Romance'
)


loadMoviesForCategory(
    'http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Animation&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=',
    'http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=Animation&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=-imdb_score&title=&title_contains=&writer=&writer_contains=&year=',
    'button_animation',
    'Animation',
    'modal_window_Animation',
    'Animation'
)

loadMoviesForCategory(
    'http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=Crime&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&rating=&rating_contains=&sort_by=-imdb_score&title=&title_contains=&writer=&writer_contains=&year=',
    'http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=Crime&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=-imdb_score&title=&title_contains=&writer=&writer_contains=&year=',
    'button_crime',
    'Crime',
    'modal_window_Crime',
    'Crime'
)
