# Building a client side ORM

This app exposes a RESTFUL kittens resource

Check out 'http://localhost:3000/kittens' to see the kittens as JSON.
Take note of the object IDs!

The goal of this lab is to build out a Kitten class to interact with our
data from the client side similar to how we can use Mongoose on the server.

Construct a kitten class that does the following:

## Constructor 

The kitten constructor takes an object literal as input.

```js
const kitten = new Kitten({name: 'tiny', _id: '3141'})
```

It should save those properties to `_attributes`

```js
kitten._attributes // {name: 'tiny', _id: '3141'}
```

## Instance Methods

It should have a `meow` method

```js
kitten.meow() // "Tiny says 'meow'"
```

It should have a `get` method to return any value from `_attributes`

```js
kitten.get('name') // 'Toby'
kitten.get('_id') // '3141'
```

It should have a `set` method to change any value in `_attributes`

```js
kitten.set('name', 'Doug');
kitten.get('name') // 'Doug'
```

It should have a `save` method to persist the changes to the database

```js
kitten.save() // PUT => '/kittens/3141'
```

It should have a `remove` method to remove that kitten from the database

```js
kitten.remove() // DELETE => '/kittens/3141'
```

## Static Methods

It should have a `create` static method to insert a new kitten in the database

```js
Kitten.create({name: 'Gertrude'}); // POST => '/kittens'
```

It should have a `fetch` method to retrieve all the kittens from the database

```js
Kitten.fetch() // GET => '/kittens'
```

It should have an `all` method to return an array of all kittens, created
or fetched from the database.

```js
Kitten.all() // => [Kitten, Kitten]
```

It should have `first` and `last` methods to return the first and last kittens
from `all()`

```
Kitten.first() 
Kitten.last()
```

It should have a static 'meow' method that invokes each instances 'meow'

```
Kitten.meow() // 'Tiny says meow'; 'Dave says meow'; 'Toby says meow' etc
```
