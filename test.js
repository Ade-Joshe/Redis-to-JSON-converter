const redis2json = require('./index');

const data = "Persons,[name,adegoke,address,gentlemen in ikorodu,age,90,sex,mascufeline,pet,Bethy,wife,Mai,school,],[name,Femi,address,Solomade,age,9,sex,hermaphrodite,pet,Cowboy,wife,Juin,school,FUTO],[name,Best,address,Surulere,age,45,sex,male,pet,Cowboy,wife,Juin,school,FUTO],[name,Best,address,Surulere,age,45,sex,male,pet,Cowboy,wife,Juin,school,FUTO],[name,Best,address,Surulere,age,45,sex,male,pet,Cowboy,wife,Juin,school,FUTO],[name,Best,address,Surulere,age,45,sex,male,pet,Cowboy,wife,Juin,school,FUTO],[name,Best,address,Surulere,age,45,sex,male,pet,Cowboy,wife,Juin,school,FUTO],[name,Best,address,Surulere,age,45,sex,male,pet,Cowboy,wife,Juin,school,FUTO],[name,Best,address,Surulere,age,45,sex,male,pet,Cowboy,wife,Juin,school,FUTO],[name,Best,address,Surulere,age,45,sex,male,pet,Cowboy,wife,Juin,school,FUTO],[name,Best,address,Surulere,age,45,sex,male,pet,Cowboy,wife,Juin,school,FUTO]";

let t0 = new Date().getMilliseconds();
console.log(redis2json(data))
let t1 = new Date().getMilliseconds();

console.log('ran in ', t1 - t0 + ' milliseconds')