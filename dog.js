var express = require('express');
const dogs = express();
//const cors = require('cors');

//dogs.use(cors());


dogs.get('/dog', function (req, res) {
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
   res.json(imagesDogs[selected].url);
});

module.exports = dogs;
