import faker from 'faker';

export default [{
    name: 'Thieving Harry`s',
    cuisine: 'Burgers, Soups & Grilled Cheese',
    icon: 'sandwich',
    color: 'blue',
    url: 'https://www.thievingharrys.co.uk',
    votes: faker.random.number({
      min: 0,
      max: 30
    }),
  },
  {
    name: 'Dope Burger',
    cuisine: 'Burgers & Fries',
    icon: 'burger',
    color: 'red',
    url: 'https://www.facebook.com/dopeburger/',
    votes: faker.random.number({
      min: 0,
      max: 30
    }),
  },
  {
    name: 'Ambiente',
    cuisine: 'Spanish Tapas',
    icon: 'meat',
    color: 'yellow',
    url: 'https://www.ambiente-tapas.co.uk/hull',
    votes: faker.random.number({
      min: 0,
      max: 30
    }),
  },
  {
    name: 'Butler Whites',
    cuisine: 'Modern British Classics',
    icon: 'dish',
    color: 'green',
    url: 'http://butlerwhites.com/',
    votes: faker.random.number({
      min: 0,
      max: 30
    }),
  },
  {
    name: 'Bert`s Pizza',
    cuisine: 'Wood Fired Pizza',
    icon: 'pizza',
    color: 'pink',
    url: 'https://bertspizzeria.co.uk/hull-restaurant/',
    votes: faker.random.number({
      min: 0,
      max: 30
    }),
  },
  {
    name: 'Shoot the Bull',
    cuisine: 'Gourmet Street Food',
    icon: 'hot-dog',
    color: 'indigo',
    url: 'https://www.shootthebull.co.uk/trinity-market',
    votes: faker.random.number({
      min: 0,
      max: 30
    }),
  },
  {
    name: 'Tapasya',
    cuisine: 'Indian Fusion Street Food',
    icon: 'rice',
    color: 'green',
    url: 'https://www.tapasyakitchen.co.uk/',
    votes: faker.random.number({
      min: 0,
      max: 30
    }),
  },
  {
    name: 'Greko',
    cuisine: 'Classic Greek Gyros',
    icon: 'roasted-meat',
    color: 'blue',
    url: 'https://www.facebook.com/grekotrinity/',
    votes: faker.random.number({
      min: 0,
      max: 30
    }),
  },
  {
    name: 'Cheng & Chen',
    cuisine: 'East Asian Cuisine',
    icon: 'noodle',
    color: 'red',
    url: 'https://www.facebook.com/ChengandChen/',
    votes: faker.random.number({
      min: 0,
      max: 30
    }),
  },
  {
    name: 'Boss Burrito',
    cuisine: 'Mexican Street Food',
    icon: 'burrito',
    color: 'yellow',
    url: 'https://www.bossburrito.co.uk/',
    votes: faker.random.number({
      min: 0,
      max: 30
    }),
  }
];