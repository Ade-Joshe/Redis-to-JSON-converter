require('dotenv').config()
const redis2json = require('./index');

test('test should pass', () => {
    expect(redis2json(process.env.input_2)).toEqual(process.env.output_2);
})