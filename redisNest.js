
function transformRedisNestToJson(redisData) {

    var matches = redisData.match(/\[(.*?)\]/g)
    let arrayKey = redisData.slice(0, redisData.indexOf(','));
    let numberOfSubObjects = matches.length;
    let List = [];
    let jsObjectFromRedisData = {}

    for (let i = 0; i < numberOfSubObjects; i++) {
        let thisObjectString = matches[i].replace('[', '').replace(']', '');
        let thisObjectArray = thisObjectString.split(',');
        let pair = {};
        let javascriptObject = {}
        
        for (let j = 0; j < thisObjectArray.length; j = j + 2) {
            let key = j, value = j + 1;
            
            pair = { [thisObjectArray[key]]: thisObjectArray[value] };
            javascriptObject = { ...javascriptObject, ...pair };
        }
        
        List.push(javascriptObject)
    }
    
    jsObjectFromRedisData = {
        [arrayKey]: List
    }
    
    return jsObjectFromRedisData;
};


let testStringFromRedis = "Persons,[name,adegoke,address,gentlemen in ikorodu,age,90,sex,mascufeline,pet,Bethy,wife,Mai,school,],[name,Femi,address,Solomade,age,9,sex,hermaphrodite,pet,Cowboy,wife,Juin,school,FUTO],[name,Best,address,Surulere,age,45,sex,male,pet,Cowboy,wife,Juin,school,FUTO],[name,Best,address,Surulere,age,45,sex,male,pet,Cowboy,wife,Juin,school,FUTO],[name,Best,address,Surulere,age,45,sex,male,pet,Cowboy,wife,Juin,school,FUTO],[name,Best,address,Surulere,age,45,sex,male,pet,Cowboy,wife,Juin,school,FUTO],[name,Best,address,Surulere,age,45,sex,male,pet,Cowboy,wife,Juin,school,FUTO],[name,Best,address,Surulere,age,45,sex,male,pet,Cowboy,wife,Juin,school,FUTO],[name,Best,address,Surulere,age,45,sex,male,pet,Cowboy,wife,Juin,school,FUTO],[name,Best,address,Surulere,age,45,sex,male,pet,Cowboy,wife,Juin,school,FUTO],[name,Best,address,Surulere,age,45,sex,male,pet,Cowboy,wife,Juin,school,FUTO]";

let t0 = new Date().getMilliseconds();
console.log(transformRedisNestToJson(testStringFromRedis))
let t1 = new Date().getMilliseconds();

console.log('ran in ', t1 - t0 + ' milliseconds')