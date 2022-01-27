let bestMovie = fetch('http://localhost:8000/api/v1/titles/1508669');

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