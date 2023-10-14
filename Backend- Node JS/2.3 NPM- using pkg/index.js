//var generateName = require('sillyname');

//"type": "module", added to "package.json" so i can use import instead

import generateName from "sillyname"
import superheroes from "superheroes"

var sillyName = generateName();
var superhero = superheroes.random();

console.log(`My name is ${sillyName}. and my superhero name is ${superhero}!`)

