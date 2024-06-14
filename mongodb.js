// create connections

const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');

const addressSchema = new mongoose.Schema({
  city: String,
  country: String,
  pincode: Number,
  cord: [Number, Number],
});

const schema = new mongoose.Schema({
  name: { type: String },
  age: { type: Number },
  address: addressSchema,
  friends: [{ name: String, class: Number, address: addressSchema }],
  subject: {
    name: String,
    score: Number,
  },
});

const userModel = mongoose.model('users', schema);

// get db connection

function getSubject() {
  const arrsubject = [
    'Math',
    'Social',
    'English',
    'History',
    'Health',
    'Hindi',
    'Nepali',
  ];
  return arrsubject[Math.random() * arrsubject.length ] || 'Science';
}

const randomNumber = function () {
  return Math.random() * 10 + 1;
};

const getAddress = function () {
  return {
    city: faker.location.city(),
    country: faker.location.country(),
    pincode: parseInt(faker.location.zipCode()),
    cord: [
      parseFloat(faker.location.latitude()),
      parseFloat(faker.location.longitude()),
    ],
  };
};

getFriends = function () {
  const number = randomNumber();
  let arr = [];
  for (i = 0; i < number; i++) {
    const obj = {
      name: faker.person.firstName(),
      class: faker.number.int({ max: 10, min: 1 }),
      address: getAddress(),
    };
    arr.push(obj);
  }
  return arr;
};

async function main() {
  // db connection
  await mongoose.connect(
    'mongodb+srv://nitesh:nitesh123@cluster0.0ihd3kb.mongodb.net?retryWrites=true&w=majority',
    { dbName: 'learnmongo' }
  );

  console.log('db connected');

//   const dataArray = [];

//   for (let i = 0; i < 10; i++) {
//     const obj = {
//       name: faker.person.fullName(),
//       age: faker.number.int({ max: 60, min: 12 }),
//       address: getAddress(),
//       friends: getFriends(),
//       subject: {
//         name: getSubject(),
//         score: faker.number.int({ min: 20, max: 100 }),
//       },
//     };
//     const newobj=new userModel(obj)
//     dataArray.push(newobj);
//   }
//   console.log('data to push',dataArray)

//   const info= await userModel.insertMany(dataArray);
//   console.log('info---',info)
//   const userData=await userModel.find();
//   console.log('user data',userData)

  // run auery

  

}

main();
