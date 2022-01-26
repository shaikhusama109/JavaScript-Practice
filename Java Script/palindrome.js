let word = prompt("Enter Your Word");
let check = '';
for ( let i = word.length - 1 ; i >= 0 ; i-- ){
    check += word[i] ;
}

if ( word === check ){
    console.log("Your Word is :" + check) ; 
}
else {
    console.log("Your word is not a Palindrome");
}