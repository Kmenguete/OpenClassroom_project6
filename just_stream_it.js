let bestMovie = fetch('http://localhost:8000/api/v1/titles/1508669');

bestMovie.then(async (responseData)=>{
    console.loge(responseData);

    const response = await responseData.json();
    console.log(response); 

    try{

    // Get best movie data from API

    
    const title = response.title;
    const gender = response.genres;
    const releaseDate = response.year;
    const rated = response.rated;


    } catch(error) {
    	console.log(error);
    }
}) 

.catch((error) => {
	console.log(error);
});