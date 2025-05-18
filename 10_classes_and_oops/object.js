//in this it define that every function, array or anything is FUNCTION in a js


function multipleBy5(num){

  return num*5
}
// /***ahiya aapde function ne pan obj thi ans laai skya che */
multipleBy5.power = 2

console.log(multipleBy5(5)); //25
console.log(multipleBy5.power); //2
console.log(multipleBy5.prototype); //{} aama batayu k function bhi ek obj aj che

function createUser(username, score){
  this.username = username   // this keyword use krva thi current context use thai toh aapde banne username ma cofuse na thai jaai
  this.score = score
}

createUser.prototype.increment = function(){
  this.score++
}
createUser.prototype.printMe = function(){
  console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)  // aama a confuse thai gyo score k chai ne call kru k tea ne like mom dad bolave toh aapde avaaj prthi joi lai a k koe bolayu evij rtna ahiya this.score++ this lagaai devanu etle this etle aane bolayu pchi ene print karaai devanu
const tea = createUser("tea", 250)

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/