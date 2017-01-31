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
