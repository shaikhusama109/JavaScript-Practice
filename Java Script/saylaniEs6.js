// variables var,let,const

// let lastname = "ahmed";


// console.log(lastname)




// const school = "SAYLANI"
// const school = "SAYLANI"

// var obj  = {
//     schoolName: school
// }

// console.log(obj)


// Template Literals

// let firstName = "Ghous";
// let lastName = "Ahmed";

// firebase.database()
// .ref(`karachi/saylani/webandmobile/${firstName}${lastName}`)

// console.log(`My name is ${firstName} ${lastName}`)


// spread operators


// var students1 = {name: "ghous"}

// var students2 = {...students1,school: "saylani"}


// console.log(students2)


// Object destructuring 


// var student = {
//     name: "ghous",
//     school: "saylani",
//     roll: 123
// }

// let {name,school,roll} = student;


// console.log(name)
// console.log(school)


// Ternary Operators


// var age = 40; 


// var check = 
// age > 30 && age < 50 ? 
// "30 se bara hai" 
// :

// "30 se chota hai";


// var bool = false;

// var name = bool && "Ghous";

// console.log(name)



//    Async or sync

// var name1;

// setTimeout(function() {
//     name1 = "Ghous Ahmed"
// }, 2000);

// setInterval(function(){
//     console.log(name1)
// },1000)


// Promise 


// var promise = new Promise(function(resolve,reject){
//    if(true){
//        setTimeout(()=>{
//            resolve("It's resolve")
//        },3000)
//    }else{
//        reject("Reject")
//    }
// })

// console.log(promise)
// promise.then(function(data){
//     console.log("Resolve==>",data)
// })
// .catch(function(error){
//     console.log("Error==>",error)
// })




// let promise = new Promise(function(resolve,reject){
//     firebase.database().ref("users").on("child_added",function(data){
//         if(data.val()){
//             resolve(data.val())

//         }else{
//             reject("something went wrong")
//         }
//     })
// })


// promise.then(function(data){
//     console.log(data)
// })
// .catch(function(err){
//     console.log(err)
// })

// Simple Function 
 
// function addNumbers(a,b){
//     return a+b;

// }

//ES6 Function

//  addNumbers = (a,b) => a+b 

// console.log(addNumbers(1,2))






