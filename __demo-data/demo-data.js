import demoUser from './demo-user';

const owners = [demoUser._id];
const creator = demoUser._id;

const products = [
  { _id: '58c7998258fdc1b748b8d3f8', quantity: 0, name: 'HP ProBook' },
  { _id: '58c799d15cc654cbdb854723', quantity: 7, name: 'Apple Macbook' },
  { _id: '58c799df7ffd9e658b2860bc', quantity: 0, name: 'Asus Gaming Laptop' },
  { _id: '58c799f309261c89abf7b25a', quantity: 0, name: 'HTC Hero' },
  { _id: '58c799f8ff9f1607173e99d6', quantity: 10, name: 'Samsung Galaxy' },
  { _id: '58c799fd1a62a48f03fe29d0', quantity: 0, name: 'Apple iPhone' },
  { _id: '58c79a02468ee42d78210dd5', quantity: 0, name: 'Sony Xperia' },
  { _id: '58c79a078c690e82dbc7140c', quantity: 0, name: 'JavaScript book' },
  { _id: '58c79a0b49eb53127025c339', quantity: 1, name: 'Design Patterns book' },
  { _id: '58c79a11bc9e99840881e328', quantity: 9, name: 'Scala book' },
  { _id: '58c79a168082e0f90168502f', quantity: 0, name: 'Clean Code book' },
];

const documents = [{
  _id: '58c7a4ade748491b9adb2d7e',
  act: 'inventory',
  content: [{ _id: products[0]._id, name: products[0].name, quantity: 1 }],
  lastEdit: { user: demoUser._id, date: new Date(2017, 0, 17, 9, 12) },
}, {
  _id: '58c7a4e5b0533722fb818ac1',
  act: 'arrival',
  content: [{ _id: products[0]._id, name: products[0].name, quantity: 3 }],
  lastEdit: { user: demoUser._id, date: new Date(2017, 0, 17, 9, 15) },
}, {
  _id: '58c7a4ec0db825e0b0c79100',
  act: 'dispatch',
  content: [{ _id: products[0]._id, name: products[0].name, quantity: 4 }],
  lastEdit: { user: demoUser._id, date: new Date(2017, 0, 17, 9, 17) },
}, {
  _id: '58c7a4f36eec4e8a4f64f2c2',
  act: 'inventory',
  content: [{ _id: products[9]._id, name: products[9].name, quantity: 10 }],
  lastEdit: { user: demoUser._id, date: new Date(2017, 0, 17, 10, 12) },
}, {
  _id: '58c7a4fd48d5b9426c01fb1b',
  act: 'arrival',
  content: [{ _id: products[9]._id, name: products[9].name, quantity: 1 }],
  lastEdit: { user: demoUser._id, date: new Date(2017, 0, 17, 10, 15) },
}, {
  _id: '58c7a503f3e73b5f1e9c8fc4',
  act: 'dispatch',
  content: [{ _id: products[9]._id, name: products[9].name, quantity: 2 }],
  lastEdit: { user: demoUser._id, date: new Date(2017, 0, 17, 10, 17) },
}, {
  _id: '58c7a508c50cf1cfbc394530',
  act: 'inventory',
  content: [{ _id: products[8]._id, name: products[8].name, quantity: 3 }],
  lastEdit: { user: demoUser._id, date: new Date(2017, 0, 17, 11, 12) },
}, {
  _id: '58c7a50de2f0d5bcacf528ea',
  act: 'arrival',
  content: [{ _id: products[8]._id, name: products[8].name, quantity: 2 }],
  lastEdit: { user: demoUser._id, date: new Date(2017, 0, 17, 11, 15) },
}, {
  _id: '58c7a5135b6e9ace537fe5d0',
  act: 'dispatch',
  content: [{ _id: products[8]._id, name: products[8].name, quantity: 4 }],
  lastEdit: { user: demoUser._id, date: new Date(2017, 0, 17, 11, 17) },
}, {
  _id: '58c7a518986006cf21cb2314',
  act: 'inventory',
  content: [{ _id: products[1]._id, name: products[1].name, quantity: 4 }],
  lastEdit: { user: demoUser._id, date: new Date(2017, 0, 17, 12, 12) },
}, {
  _id: '58c7a51dc7df727e8ea2c0a8',
  act: 'arrival',
  content: [{ _id: products[1]._id, name: products[1].name, quantity: 4 }],
  lastEdit: { user: demoUser._id, date: new Date(2017, 0, 17, 12, 15) },
}, {
  _id: '58c7a52361376e48e7f9a956',
  act: 'dispatch',
  content: [{ _id: products[1]._id, name: products[1].name, quantity: 1 }],
  lastEdit: { user: demoUser._id, date: new Date(2017, 0, 17, 12, 17) },
}, {
  _id: '58c7a529b7b2bcc39adc5709',
  act: 'inventory',
  content: [
    { _id: products[4]._id, name: products[4].name, quantity: 5 },
    { _id: products[6]._id, name: products[6].name, quantity: 3 },
  ],
  lastEdit: { user: demoUser._id, date: new Date(2017, 0, 17, 13, 12) },
}, {
  _id: '58c7a52e0b58429a64c1aac5',
  act: 'arrival',
  content: [
    { _id: products[0]._id, name: products[4].name, quantity: 7 },
    { _id: products[0]._id, name: products[6].name, quantity: 1 },
  ],
  lastEdit: { user: demoUser._id, date: new Date(2017, 0, 17, 13, 15) },
}, {
  _id: '58c7a5372d4e2868514bf109',
  act: 'dispatch',
  content: [
    { _id: products[0]._id, name: products[4].name, quantity: 2 },
    { _id: products[0]._id, name: products[6].name, quantity: 4 },
  ],
  lastEdit: { user: demoUser._id, date: new Date(2017, 0, 17, 13, 17) },
}];

const demoData = {
  creator,
  owners,
  products,
  documents,
  _id: '564a4a24f63d409f526659c4',
};

module.exports = demoData;
