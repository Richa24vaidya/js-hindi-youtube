// class nu instance new keyword kehvaai che
// promise directly object ma aapde like = new array evih rtna aapd enew [promise lkhe] loke v6 mathi aaya1

//how to create  promise its 2 types create and consume, prmoise object maaj thai 

const promiseOne = new Promise (function(resolve,reject){
//do an async task
//database calls , cryptography , network calls
setTimeout(function(){
  console.log('async task is complete');
  resolve()
}, 1000)
})

//consume promise aama .then nu  connection direct resolve sathi thai che only resolve not reject
promiseOne.then(function(){
  console.log("promise is consumed");
})
//aapde aa lkhyu .then valu connection pan resolve nhi thtyu o/p khli asyn task is comole aayu pan 2nd consiole nhi aayu ena mate aapde resolve lkhvu pde upper vala ma pchi banne 1&2 console aave



/*******2************////////// */
// aa 2nd vala ma var declare nhi kryo etle }) pchi aj direct .then aayi gyu-
new Promise (function(resolve,reject){
  setTimeout(function(){
        console.log("async task 2");
  },1000) // if me ahiya 5000 mukyu hoi toh promise four run karaiye ema ek error che toh aa o/p maa aavat aj na bcz 4 pehlaaj run thai jaai che and error show kre che 5 sec na pehlaaj 
}).then(function(){
  console.log("async promised 2 is consumed");
})



///*********3********* */
//how to consump data Q ? try it in promise 3

const promiseThree = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve([email = "24richa@gmail.com", name = "richa"]) // aane aapde function k obj ma pan lkhi skhye che obj ma like {email: "ej324@gm.com" , name: "bnwbn"} toh o/p ma pchi email:kwnk  nakme:kjqwjkle aave and arrays ma khli eni values aj aave leke username and richa lkheli
  },1000)
})

promiseThree.then(function(user){
  console.log(user); // if aapde ahiya "user lkhyu hoi toh o/p nhi aave"
})


/***********4********************/

const promiseFour = new Promise (function(resolve,reject){

  //database calls, network calls
  setTimeout(function(){
    let error = false
    if(!error) {  // mns aama if erroe naa hoi toh database ma thi values excess kr ahiya like small eg user name and email lidhu che
      resolve({username: "rc" , email: "24@gmail.com"})
    }
    else {
      reject('ERROR: Something Went Wrong')
    }
  }, 1000)
  })

//  const username = promiseFour.then((user) => { // aama aapde arrow function use kryu che
//     console.log (user); // if aapde username var declare na krye and .log ma aapde ; lgaai daiye toh erroe aaya krse bcz aapde parameter mukyu che pan value ksi nhi muki etle para user che aama
//    return user.username
//   })


///**upper const username var declare kryo toh error aavti hti etle aapde chaining kri .thrn . then aaqpde ktli bhi vkht lai skhye che and aa promise4 bauj imp che bcz a dstabase access krvama kaam aave che upper aapde   let error = true mukyu che etle catch ma aapdi error show kre che if false mukye toh  bija .then ni value usernAME MARU RC CHE TE ANS MAA AAVSE*/
 promiseFour.then((user) => { // aama aapde arrow function use kryu che
    console.log (user); 
   return user.username
  }).then((username) => {
    console.log(username);
  }).catch(function(error){
    console.log(error);
  })


  //**************fetch api after promises */

//get allusers aagad nu lkhvanu baki che video 40 ni ekdum end ma che  

// INTERVIEW MA PUCHE K PROMISE THI REQ KRI AND ERROR 404 MALYU TOH A RESOLVE MA MALSE K FETCH MA PAN A AAPDE AA BANNE MATHI KSU NHI A RESPONSE MA MALE BCZ NETWORK NE AAPDU STATUS NHI KHBR KHLI JYRE REQUEST A KRI AJ NA SKE TYRE ERROR MALE  WATCH DOCUMENTATION ON DEVELOPER.MOZILLA.ORG/EN-US/DOCS/WEB/API/FETCH

.fetch('https:api.github.com/users/hiteshchoudhary')
.then((response) =>{
  response.json()
})
.then((data) => {
  console.log(data);
})
.catch((error) => {
  console.log(error);
})