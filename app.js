const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/home', (request, response) => {
    
    console.log(__dirname);
    console.log('/views/home-page.html');
    console.log(__dirname + '/views/home-page.html');
    response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about-page.html')
});
app.get('/work', (request, response) => {
   
   response.sendFile(__dirname + '/views/work.html');
});
app.listen(3000, () => {
    console.log('My app is listening on port 3000');
});
