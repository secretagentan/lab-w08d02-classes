console.log('🐱');

class Kitten {
  constructor(cat) {
    this._attributes = cat;
  }
  meow() {
    console.log(this._attributes.name + ' says meow');
  }
  get(attr) {
    console.log(this._attributes[attr]);
  }
  set(attr, value) {
    this._attributes[attr] = value;
  }
  save() {
    $.ajax({
      method: 'PUT',
      url: '/kittens/' + this._attributes._id,
      data: {kitten: this._attributes}
    })
    .then(response => {
      console.log(response);
    })
  };
  remove() {
    $.ajax({
      method: 'DELETE',
      url: '/kittens/' + this._attributes._id
    })
    .then(response => {
      console.log(response);
    })
  };
  static create(kitten) {
    $.ajax({
      method: 'POST',
      url: '/kittens',
      data: {kitten: kitten}
    })
    .then(response => {
      console.log(response);
    })
  };
  static fetch() {
    $.ajax({
      method: 'GET',
      url: '/kittens',
    })
    .then(response => {
      console.log(response);
      Kitten.allKittens = [];
      response.forEach(function(kitten) {
        var cat = new Kitten(kitten);
        Kitten.allKittens.push(cat);
      })
    })
  };
  static all() {
    if (Kitten.allKittens) {
      return Kitten.allKittens;
    } else {
      return Kitten.allKittens = [];
    }
  }
  static first() {
    return Kitten.allKittens[0];
  }
  static last() {
    return Kitten.allKittens[Kitten.allKittens.length - 1];
  }
  static meow() {
    Kitten.allKittens.forEach(function(kitten) {
      kitten.meow();
    })
  }
}

const kitten = new Kitten({name: 'tiny', _id: '58910f68c73acbce710bc758'});

// console.log(kitten._attributes);
// console.log(kitten);
// kitten.meow();
// kitten.get('name');

