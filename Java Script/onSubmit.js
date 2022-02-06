function sayHi() {
  var userName = document.getElementById("name").value;
  alert("Hello, " + userName + "!");

}

function checkPet() {
  if(document.getElementById("whichPet").value === "dog"){
    alert("Bow-wow!"); 
  }  
  else if(document.getElementById("whichPet").value === "cat"){
    alert("Meow!");
  }
  else{
      alert("Please Input from the given 2")
  }
}

