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
    var releaseDate = response.date_published;
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

    var display_modal_best_movie_image = document.getElementById("modal_best_movie_image");
    display_modal_best_movie_image.src = movieImage;


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

// I am creating a function that load movies for each category list

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
                        const releaseDate = movie.date_published;
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
                                $('.'+ className).click(function () {
                                    console.log("You opened the modal of the following movie: " + title)
                                    var modal = $('#'+href);
                                    document.getElementById(categoryName + "_image").src = movie.image_url; 
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



// I am creating a function that load best movies(Any category) list

function loadBestMovies(
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
            function makeBestMoviesList() {
                // Establish the array that stores the responses from the API
                const start = 1;
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
                        const releaseDate = movie.date_published;
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
                                $('.'+ className).click(function () {
                                    console.log("You opened the modal of the following movie: " + title)
                                    var modal = $('#'+href); 
                                    document.getElementById("best_movies_image").src = movie.image_url; 
                                    modal.find('.title_' + categoryName).text("Movie: " + title);
                                    modal.find('.genres_' + categoryName).text("Genres: " + genres);
                                    modal.find('.release_date_' + categoryName).text("Release Date: " + releaseDate);
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
            makeBestMoviesList();

        } catch (error) {
            console.log(error);
        }
    })
}
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

// Now I will call the function that fetch best movies data for each category from API
loadMoviesForCategory(
    'http://127.0.0.1:8000/api/v1/titles/?genre=Romance&sort_by=-imdb_score',
    'http://localhost:8000/api/v1/titles/?genre=Romance&sort_by=-imdb_score&page=2',
    'button_romance',
    'Romance',
    'modal_window_Romance',
    'Romance'
)


loadMoviesForCategory(
    'http://localhost:8000/api/v1/titles/?genre=Animation&sort_by=-imdb_score',
    'http://localhost:8000/api/v1/titles/?genre=Animation&sort_by=-imdb_score&page=2',
    'button_animation',
    'Animation',
    'modal_window_Animation',
    'Animation'
)

loadMoviesForCategory(
    'http://localhost:8000/api/v1/titles/?genre=Crime&sort_by=-imdb_score',
    'http://localhost:8000/api/v1/titles/?genre=Crime&sort_by=-imdb_score&page=2',
    'button_crime',
    'Crime',
    'modal_window_Crime',
    'Crime'
)

// Now I will create a function that fetch best movies data for each category

function loadTopRatedMovies(url,
		                    secondPageUrl,
	                        className,
	                        id,
	                        href,
	                        categoryName,) {
    const pageOneMaxNumber = 5
    const pageTwoMaxNumber = 3

    // Load page 1
    loadBestMovies(url, className, id, href, categoryName, pageOneMaxNumber)
    // Load page 2
    loadMovies(secondPageUrl, className, id, href, categoryName, pageTwoMaxNumber)
}

// Now I will call the function that fetch best movies(Any Category) from API

loadTopRatedMovies(
	'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score',
	'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page=2',
	'button_best_movies',
	'best_movies',
	'modal_window_best_movies',
	'best_movies')

// Now I will make my carousel buttons work

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
	button.addEventListener("click", () => {
		const offset = button.dataset.carouselButton === "next" ? 1 : -1
		const slides = button
			.closest("carousel")
			.querySelector("category")
		const activeSlide = slides.querySelector("modal_info")
		let newIndex = [...slides.children].indexOf(activeSlide) + offset
		if (newIndex < 0) newIndex = slides.children.length -1
		if (newIndex >= slides.children.length) newIndex = 0

		slides.children[newIndex].dataset.active = true
	    
	    })
})