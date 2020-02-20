const redis2json = (input) => {
    // cache input type so we don't perform operation twice
    const type = input.match(/\[(.*?)\]/g);
    const matches = type ? type : input.split(',').splice(1, input.length);
    const base = type ? input.slice(0, input.indexOf(',')) : input.split(',')[0]; 

    let transformed = {};
    let nestedTransformed = [];

    for (let i = 0; i < matches.length; i += 1) {
        
        if (!type) {
            const key = i;
            const value = i + 1;

            transformed[matches[key]] = matches[value];
            i += 1
        } else {
            const token = matches[i].replace('[', '').replace(']', '').split(',');
            for (let a = 0; a < token.length; a += 2) { 
                const key = a;
                const value = a + 1;

                transformed[token[key]] = token[value];
            }

            nestedTransformed.push(transformed);
        }
    }

    const result = type ? { [base]: nestedTransformed } : { [base]: transformed };
    return JSON.stringify(result);
}

module.exports = redis2json;
