function addMessage(){
    var val = document.getElementById("val");
    var message = document.createElement("p");
    var  text = document.createTextNode(val.value);
    message.appendChild(text);
    var chat = document.getElementById("chat")
    chat.appendChild(message)
    val.value = ""
}