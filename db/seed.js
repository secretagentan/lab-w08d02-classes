const mongoose = require('./config');
const Kitten = require('../models/kitten');

Kitten
.remove({})
.then( () => {
  return Kitten.create([
    {name: 'Denzel', img: 'http://placekitten.com/g/200/300'},
    {name: 'Feliz', img: 'http://placekitten.com/g/200/300'}
  ]);
})
.then( () => {
  return Kitten.find({})
})
.then( (kittens) => {
  console.log(`Seeded ${kittens.length} kittens`);
})
.then( () => {
  process.exit() // exit the script
});

// [
  // {
    // "_id": "58910f68c73acbce710bc758",
    // "name": "Denzel",
    // "img": "http://placekitten.com/g/200/300",
    // "__v": 0,
    // "createdAt": "2017-01-31T22:27:52.178Z"
  // },
  // {
    // "_id": "58910f68c73acbce710bc759",
    // "name": "Feliz",
    // "img": "http://placekitten.com/g/200/300",
    // "__v": 0,
    // "createdAt": "2017-01-31T22:27:52.184Z"
  // }
// ]
