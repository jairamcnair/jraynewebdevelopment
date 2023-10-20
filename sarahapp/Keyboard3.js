
function typing(clicked_id){
    //let id = document.getElementsByTagName("button")[0].id;
    //alert(id);
    //alert(clicked_id);
    let words = document.getElementById("words");
    switch(clicked_id){
        case "SPACE":
        break;

        case "backspace":
            words.innerHTML = words.innerHTML.substring(0, words.innerHTML.length - 1); //https://1bestcsharp.blogspot.com/2017/09/javascript-remove-string-first-last-character.html
        break;

        case "capitals":
            //let buttons = document.querySelectorAll(".buttons");
            let id = document.getElementsByTagName("button")[0].id; // this works
            //alert(id);
            if(id === 'a'){
                for(let i = 0; i < 27; ++i){
                    //document.getElementsByTagName("button")[i].innerHTML = 'T';
                    document.getElementsByTagName("button")[i].innerHTML = document.getElementsByTagName("button")[i].innerHTML.toUpperCase();
                    document.getElementsByTagName("button")[i].value = document.getElementsByTagName("button")[i].value.toUpperCase;
                    //buttons[i].id.toUpperCase;
                }
            }
            if(id === 'A'){
                for(let i = 0; i < 27; ++i){
                    document.getElementsByTagName("button")[i].innerHTML = document.getElementsByTagName("button")[i].innerHTML.toLowerCase();
                }
            }
            //alert(buttons[1].innerHTML)
            /*for(let i = 1; i = 26; ++i){
                buttons[i].innerHTML.toggle(innerHTML.toUpperCase());
            }
            function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "Hello") {
    x.innerHTML = "Swapped text!";
  } else {
    x.innerHTML = "Hello";
  }
}
            */
            //keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
        break;

        case "NUMBERS":
        break;

        case "SPEAK":
        break;

        case "CLEAR":
        break;

        case "ENTER":
        break;

        default:
            words.innerHTML += clicked_id;
        break;
    }
}


