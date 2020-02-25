<div align="center">
    <img src="https://res.cloudinary.com/wrightway/image/upload/v1582575333/redistojson.png" alt="redistojson" width="300"/>
</div>
# Redis-to-JSON-converter
Converts Redis data to JSON representation

For those seeking a means to convert redis "string" data to JSON object for easy parsing.

Special Thanks to my friend, [Augustine Best](https://twitter.com/augustinebest_) and also [Jerry](https://twitter.com/lovinjerry004) for their amazing contributions.

### **How to use**
**step 1:** Install reformat-date
```bash
npm install redistojson --save
```
**step 2:** Require the package in your project
```bash
const redistojson = require('redistojson');
```
**step 3:** Pass in the redis data you wish to convert as an argument <br>
-for example <br>
**case 1: having a list of persons data**
```bash
const redisData = "Persons,[name,adegoke,address,gentlemen in ikorodu,age,90,sex,masculine,pet,Bethy,wife,Mai,school,],[name,Augustine Best,address,Enugu,age,32,sex,male,pet,Cowboy,wife,Juin,school,FUTO],[name,Femi,address,Surulere,age,45,sex,male,pet,Cat,wife,Queen,school,UNILAG],[name,Peter,address,Ikeja,age,23,sex,male,pet,Dog,wife,Angela,school,OAU],[name,Betty,address,Porharcourt,age,21,sex,female,pet,Elephant,wife,princess,school,UNIBEN],[name,Jessie,address,Toronto,age,49,sex,male,pet,Goat,wife,Stephanie,school,Harvard]";

console.log(redistojson(redisData));

// result 
{
  Persons: [
    {
      name: 'adegoke',
      address: 'gentlemen in ikorodu',
      age: '90',
      sex: 'masculine',
      pet: 'Bethy',
      wife: 'Mai',
      school: ''
    },
    {
      name: 'Augustine Best',
      address: 'Enugu',
      age: '32',
      sex: 'male',
      pet: 'Cowboy',
      wife: 'Juin',
      school: 'FUTO'
    },
    {
      name: 'Femi',
      address: 'Surulere',
      age: '45',
      sex: 'male',
      pet: 'Cat',
      wife: 'Queen',
      school: 'UNILAG'
    },
    {
      name: 'Peter',
      address: 'Ikeja',
      age: '23',
      sex: 'male',
      pet: 'Dog',
      wife: 'Angela',
      school: 'OAU'
    },
    {
      name: 'Betty',
      address: 'Porharcourt',
      age: '21',
      sex: 'female',
      pet: 'Elephant',
      wife: 'princess',
      school: 'UNIBEN'
    },
    {
      name: 'Jessie',
      address: 'Toronto',
      age: '49',
      sex: 'male',
      pet: 'Goat',
      wife: 'Stephanie',
      school: 'Harvard'
    }
  ]
}
```

**case 2: having an object of a data**<br>
```bash
const redisData = "Person,name,adegoke,address,gentlemen in ikorodu,age,90,sex,mascufeline,pet,Bethy,wife,Mai,school,";

console.log(redistojson(redisData)); 

// result
{
  Person: {
    name: 'adegoke',
    address: 'gentlemen in ikorodu',
    age: '90',
    sex: 'mascufeline',
    pet: 'Bethy',
    wife: 'Mai',
    school: ''
  }
}
```

All the best 