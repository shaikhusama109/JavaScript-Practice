
// function Student(name,roll){
//     this.name = name;
//     this.roll = roll;
// }

// Student.prototype.school = "saylani"


// var student1 = new Student("ghous",123)

// console.log(student1)






// var student1 = new Student("ghous",123);
// var student2 = new Student("basit",123);

// console.log(student1)
// console.log(student2)



// var student1 = {
//     name: "ghous",
//     roll: 123
// }




// var student2 = {
//     name: "basit",
//     roll: 321,
//     school: 'saylani'
// }

// for(var key in student2){
//     console.log(key,student2[key])
// }


// var student2 = {
//     name: "basit",
//     roll: 321,
//     school: 'saylani'
// }

// console.log(student2)

// console.log("constructor" in student2)

// console.log(student2.hasOwnProperty("constructor"))
const firebaseConfig = {
    apiKey: "AIzaSyD6lb_oYLhUU-nub4uNNuZOR-ABavgR_5k",
    authDomain: "learning-db-1c4cc.firebaseapp.com",
    databaseURL: "https://learning-db-1c4cc-default-rtdb.firebaseio.com",
    projectId: "learning-db-1c4cc",
    storageBucket: "learning-db-1c4cc.appspot.com",
    messagingSenderId: "169720787281",
    appId: "1:169720787281:web:369fc21497c07fb064e370"
  };

  firebase.initializeApp(firebaseConfig);

function saveData() {
    var name = document.getElementById("name");
    var id = document.getElementById("id");
    var key = firebase.database().ref('student').push().key

   
    var student = {
        name: name.value,
        id: id.value,
        key : key
    }
    
    firebase.database().ref('student/' + key).set(student);
}

// function getfirebaseData(){
//     firebase.database().ref('student').once('value', function(data){
//         console.log(data.val())
//     })

// }

function getfirebaseData(){
    firebase.database().ref('student').on('child_added', function(data){
        console.log(data.val())
    })

}



getfirebaseData();