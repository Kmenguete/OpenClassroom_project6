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

    // Get data displayed

    const display_title = document.querySelector("#title");
    const display_gender = document.querySelector("#gender");
    const display_releaseDate = document.querySelector("#release_date");
    const display_rated = document.querySelector("#rated");
    const display_imdbScore = document.querySelector("#imdb_score");
    const display_filmDirector = document.querySelector("#film_director");

    display_title.innerHTML = "Movie: " + title;
    display_gender.innerHTML = "Gender: " + gender;
    display_releaseDate.innerHTML = "Release Date: " + releaseDate;
    display_rated.innerHTML = "Rated: " + rated;
    display_imdbScore.innerHTML = "Imdb score: " + imdbScore;
    display_filmDirector.innerHTML = "Movie director: " + filmDirector;


    } catch(error) {
    	console.log(error);
    }
}) 

.catch((error) => {
	console.log(error);
});