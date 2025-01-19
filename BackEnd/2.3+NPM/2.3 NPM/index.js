//to generate the Silly Names using the Sillyname package from NPM
import generateStupidName from "sillyname"
const sillyname=generateStupidName();
console.log(`My name is ${sillyname}`)


//to randomly generate the names of Superheroes
import superheroes, { randomSuperhero } from 'superheroes';

console.log("I am "+randomSuperhero()+"!!")