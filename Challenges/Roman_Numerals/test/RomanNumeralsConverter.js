import test from 'ava'
import RomanNumeralsConverter from '../src/RomanNumeralsConverter'

let romanNumeralsConverter = new RomanNumeralsConverter;

test('it return I array for 1', t =>{

    t.is(romanNumeralsConverter.converter(1),'I')

});

test('it return II array for 2', t =>{

    t.is(romanNumeralsConverter.converter(2),'II')

});


test('it return IV array for 4', t =>{

    t.is(romanNumeralsConverter.converter(4),'IV')

});


test('it return V array for 5', t =>{

    t.is(romanNumeralsConverter.converter(5),'V')

});

test('it return VIII array for 8', t =>{

    t.is(romanNumeralsConverter.converter(8),'VIII')

});

test('it return X array for 10', t =>{

    t.is(romanNumeralsConverter.converter(10),'X')

});

test('it return XVII array for 17', t =>{

    t.is(romanNumeralsConverter.converter(17),'XVII')

});

test('it return XCIX array for 99', t =>{

    t.is(romanNumeralsConverter.converter(99),'XCIX')

});

test('it return DCCCLVII array for 857', t =>{

    t.is(romanNumeralsConverter.converter(857),'DCCCLVII')

});

test('it return MDCLXXXII array for 1682', t =>{

    t.is(romanNumeralsConverter.converter(1682),'MDCLXXXII')

});

test('it return MMMMCMXCVI array for 4996', t =>{

    t.is(romanNumeralsConverter.converter(4996),'MMMMCMXCVI')

});






