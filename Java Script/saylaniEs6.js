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


// Data Rendering from one function to Another

// let getData = (render_data) => {
//     setTimeout( ()=>{
//         render_data("Usama")

//     } , 3000)
// }

// render_data = (name) => {
//     console.log(name)
    
// }

// getData(render_data);


//  Array Filter 

// let arr = [ 
//         { name : "usama", age : 8},
//         { name : "basit", age : 8}
//      ]

//     let data =  arr.filter( a => a.name === "usama"  )

//     console.log(data)

// let arr = [ "Usama Shaikh", "Abdul Basit", "Areeb Ul Haq" , "Maaz Khan", "Saad Ali"]
//     let data = arr.filter( arrs => arrs.length > 10)

//     console.log(data)   

// Array Map

// let arr = [ 1, 4, 9, 16]

//     let data = arr.map( arr => arr+2 )

//     console.log(data)

// Search Items With a starts and ends with Function

// let name = "Usama"
// let search = "Ua"

// if (name.startsWith(search)){
//     console.log(name)
// }
// else {
//     console.log("Not Found")
// }

