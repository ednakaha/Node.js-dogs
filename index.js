// const app = require('express')();
const express = require('express');
const cors = require('cors');
const dog = require('./dog')
const PORT = 8888;
const app = express();
app.use(cors());

app.post('/', function (req, res) {
    res.send('post home');
});



app.listen(PORT, function() {
    console.log('server started at port ' + PORT)
});

app.use('/dog',dog);

// const app = require('express')();
/*const express = require('express');
const cors = require('cors');
const PORT = 8888;
const app = express();
app.use(cors());
app.get('/dog', function (req, res) {
    const imagesDogs = [
        {
            id: 1,
            url: 'https://images.dog.ceo/breeds/affenpinscher/n02110627_10859.jpg'
        },
        {
            id: 2,
            url: 'https://images.dog.ceo/breeds/airedale/n02096051_5389.jpg'
        },
         {
            id: 3,
            url: 'https://images.dog.ceo/breeds/borzoi/n02090622_3615.jpg'
        },
        {
            id: 4,
            url: 'https://images.dog.ceo/breeds/cattledog-australian/IMG_2432.jpg'
        },
        {
            id:5,
            url:'https://images.dog.ceo/breeds/deerhound-scottish/n02092002_7160.jpg'
        }
    ]
   // res.json(JSON.stringify(students));
   selected= Math.floor(Math.random() * 5) + 1; 
   res.json((imagesDogs[selected].url));
});

app.post('/', function (req, res) {
    res.send('post home');
});



app.listen(PORT, function() {
    console.log('server started at port ' + PORT)
});*/