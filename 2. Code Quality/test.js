import assert from 'assert';
import { power } from './power.js';

describe('Power', () => {   
    describe('Power', () => { 
        function makeTest(x, n, expected) {
            test(`power(${x}, ${n}) should return ${expected}`, () => {
                assert.equal(power(x, n), expected);
            });
        }
    makeTest(2, 3, 8);
    makeTest(3, 4, 81);
    makeTest(5, 0, 1);
    makeTest(7, 2, 49);
 });
});



