
// function SetUsername(username){
//   //complex DB calls
//   this.username = username
//   console.log("called");
// }

// function createUser(username, email, password){
//   SetUsername.call(this, username)
 
//   this.email = email
//   this.password = password
// }

// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai);


////myy   ******************** aama like pehla ek function banave je parent hoi and ena niche ek child function banave like inheritamce samjavyu che toh child createRc parent Setrc ne access kri ske che ene call karava mate call method use thai k enu che etle this use thai pachi enej potana var aapvana like this.name = name and chelle enu child banavanu jya parameters ma values mukvanu like name, num etc ma su su aapvu che evu bdhu

function Setrc (rc,ry){
  this.rc = rc,
  this.ry = ry
  // aama 2 this define krya che etle o/p ma 2 vkht .log ma called aavse

  console.log("called");
}

function createRc (name,name2,num, date){
  Setrc.call(this.rc)
  Setrc.call(this.ry)
  this.name = name
  this.name2 = name2
  this.num = num
  this.date = date
}

const Name = new createRc("Richa","riya",2000,24)
console.log(Name);