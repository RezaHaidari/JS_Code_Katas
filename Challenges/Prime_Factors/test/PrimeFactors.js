import test from 'ava'
import PrimeFactors from '../src/PrimeFactors'


let primeFactors = new PrimeFactors;


test('it return empty array for 1', t =>{

    t.deepEqual(primeFactors.generate(1),[])

});

test('it return [2] for 2', t =>{

    t.deepEqual(primeFactors.generate(2),[2])

})

test('it return [3] for 3', t =>{

    t.deepEqual(primeFactors.generate(3),[3])

})

test('it return [2,2] for 4', t =>{

    t.deepEqual(primeFactors.generate(4),[2,2])

})

test('it return [5] for 5', t =>{

    t.deepEqual(primeFactors.generate(5),[5])

})


test('it return [2,3] for 6', t =>{

    t.deepEqual(primeFactors.generate(6),[2,3])

})

test('it return [3,3] for 9', t =>{

    t.deepEqual(primeFactors.generate(9),[3,3])

})

test('it return [2,2,5,5] for 100', t =>{

    t.deepEqual(primeFactors.generate(100),[2,2,5,5])

})
