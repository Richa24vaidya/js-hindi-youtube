
// Immediately Invoked Function Expressions (IIFE)

//aama aapde function ne () ma mukvanu and chele aji ek () mukvanu toh kevu aa aapdu and global var same hoi toh confusion create na thai and aapda func na var ne invoked kre fatafat aa badhu database connection ma use thai che
(function chai(){
  // named IIFE
  console.log(`DB CONNECTED`);
})();

( (name) => {
  console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
