
function transformRedisToJson(redisData) {

    // redis data has the key as the initial value in the array;
    let redisDataToArray = redisData.split(',');
    let arrayKey = redisDataToArray[0];
    let redisArray = redisDataToArray.splice(1, redisDataToArray.length)
    let pair;
    let ObjectFromRedisArray = {};

    for (let i = 0; i < redisArray.length; i = i + 2) {
        let key = i, value = i + 1;
        pair = { [redisArray[key]]: redisArray[value] };
        ObjectFromRedisArray = { ...ObjectFromRedisArray, ...pair };
    }

    return {
        [arrayKey]: ObjectFromRedisArray
    };
}

let redisData = "Person,name,adegoke,address,gentlemen in ikorodu,age,90,sex,mascufeline,pet,Bethy,wife,Mai,school,";
console.log(transformRedisToJson(redisData));