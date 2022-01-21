
// API URL 

const apiUrl = 'http://localhost:8000/api/v1/titles/';

fetch(apiUrl)
  .then(res => res.json())
  .then(data => console.log(data))