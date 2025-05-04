const user ={
  username: "richa",
  loginCount:8,
  signedIn: true,

  //method che pan ene khli reference nhi aapvabo ene run pan karavanu
  getUserDetails: function(){
    // console.log(`UserName is ${username}`);   ////////*********************////////////imp imp */
    // aa run karaavsune toh erroe aavse k username is not define evu bcz username upper vala ma {} ena obj ma che pan greeting bhi under aj che pn {} biju thai gyu ne etle aapde this keyword use krvu pde

    console.log(`UserName is ${this.username}`);

    // khli console.log(this); krisu toh aakhu user valu {} empty obj and\s aavse
  }
}
console.log(user.username);
console.log(user.getUserDetails());






function userr(username, loginCount, signedIn){  // aa parameters che

  // aama aapde username, login and ema var pass karavanma same aj name thi by using this keyword toj khbr pde
  this.username = username;
  this.logincount = loginCount;
  this.signedIn = signedIn

  return this


}

const userOne = userr("richa", 8, true)
console.log(userOne);

//half code left video 42 23:38n time