
function typing(clicked_id){
    //let id = document.getElementsByTagName("button")[0].id;
    //alert(id);
    //alert(clicked_id);
    let words = document.getElementById("words");
    switch(clicked_id){
        
        case "backspace":
            words.innerHTML = words.innerHTML.substring(0, words.innerHTML.length - 1); //https://1bestcsharp.blogspot.com/2017/09/javascript-remove-string-first-last-character.html
        break;

        case "capitals":
            let value = document.getElementsByTagName("button")[0].value; // this works
            //alert(id);
            if(value === 'a'){
                for(let i = 0; i < 27; ++i){
                    //document.getElementsByTagName("button")[i].innerHTML = 'T';
                    document.getElementsByTagName("button")[i].innerHTML = document.getElementsByTagName("button")[i].innerHTML.toUpperCase();
                    document.getElementsByTagName("button")[i].value = document.getElementsByTagName("button")[i].value.toUpperCase();
                }
            }
            else if(value === 'A'){
                for(let i = 0; i < 27; ++i){
                    document.getElementsByTagName("button")[i].innerHTML = document.getElementsByTagName("button")[i].innerHTML.toLowerCase();
                    document.getElementsByTagName("button")[i].value = document.getElementsByTagName("button")[i].value.toLowerCase();
                }
            }
        break;

        case "numbers":
            let value2 = document.getElementsByTagName("button")[0].value; // this works
            const numberarray = [
                "+", "-", "x", "%", "=", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "(", ")", "@", "^", "{", "}", "$", ":", ";", "#", "/", "~"
            ]
            const letterarray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "0", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "?"]
            //alert(id);
            if(value2 === 'a'){
                for(let i = 0; i < 27; ++i){
                    document.getElementsByTagName("button")[i].innerHTML = numberarray[i];
                    document.getElementsByTagName("button")[i].value = numberarray[i]
                    document.getElementById("numbers").innerHTML = "letters";
                   
                }
            }
            else if(value2 === 'A'){
                for(let i = 0; i < 27; ++i){
                    document.getElementsByTagName("button")[i].innerHTML = numberarray[i];
                    document.getElementsByTagName("button")[i].value = numberarray[i]
                    document.getElementById("numbers").innerHTML = "letters";
                    
                }
            }
            else if(value2 === '+'){
                for(let i = 0; i < 27; ++i){
                    document.getElementsByTagName("button")[i].innerHTML = letterarray[i];
                    document.getElementsByTagName("button")[i].value = letterarray[i]
                    document.getElementById("numbers").innerHTML = "numbers";
                }
            }
            
        break;

        case "speak":
            let wordsToSpeak = document.getElementById("words").innerHTML;
            let utterance = new SpeechSynthesisUtterance(wordsToSpeak);
            speechSynthesis.speak(utterance);
        break;

        case "clear":
            document.getElementById("words").innerHTML = " ";
        break;

        case "enter":
            //words.innerHTML =  words.innerHTML += "\n";
            words.innerHTML = words.innerHTML + "<br>";
        break;

        default:
            words.innerHTML += clicked_id;
        break;
    }
}


/*
document.getElementsByTagName("button")[0].innerHTML = '+';
                    document.getElementsByTagName("button")[0].value = '+';
                    document.getElementsByTagName("button")[1].innerHTML = '-';
                    document.getElementsByTagName("button")[1].value = '-';
                    document.getElementsByTagName("button")[2].innerHTML = 'x';
                    document.getElementsByTagName("button")[2].value = 'x';
                    document.getElementsByTagName("button")[3].innerHTML = '%';
                    document.getElementsByTagName("button")[3].value = '%';
                    document.getElementsByTagName("button")[4].innerHTML = '=';
                    document.getElementsByTagName("button")[4].value = '=';
                    document.getElementsByTagName("button")[5].innerHTML = '0';
                    document.getElementsByTagName("button")[5].value = '0';
                    document.getElementsByTagName("button")[6].innerHTML = '1'
                    document.getElementsByTagName("button")[6].value = '1';
                    document.getElementsByTagName("button")[7].innerHTML = '2'
                    document.getElementsByTagName("button")[7].value = '2';
                    document.getElementsByTagName("button")[8].innerHTML = '3'
                    document.getElementsByTagName("button")[8].value = '3';
                    document.getElementsByTagName("button")[9].innerHTML = '4'
                    document.getElementsByTagName("button")[9].value = '4';
                    document.getElementsByTagName("button")[10].innerHTML = '5'
                    document.getElementsByTagName("button")[10].value = '5';
                    document.getElementsByTagName("button")[11].innerHTML = '6'
                    document.getElementsByTagName("button")[11].value = '6';
                    document.getElementsByTagName("button")[12].innerHTML = '7'
                    document.getElementsByTagName("button")[12].value = '7';
                    document.getElementsByTagName("button")[13].innerHTML = '8'
                    document.getElementsByTagName("button")[13].value = '8';
                    document.getElementsByTagName("button")[14].innerHTML = '9'
                    document.getElementsByTagName("button")[14].value = '9';
                   document.getElementsByTagName("button")[15].remove(); document.getElementsByTagName("button")[16].remove();
                   document.getElementsByTagName("button")[17].remove(); document.getElementsByTagName("button")[18].remove();
                   document.getElementsByTagName("button")[19].remove(); document.getElementsByTagName("button")[20].remove();
                   document.getElementsByTagName("button")[21].remove(); document.getElementsByTagName("button")[22].remove();
                   document.getElementsByTagName("button")[23].remove(); document.getElementsByTagName("button")[24].remove();
                   document.getElementsByTagName("button")[25].remove(); document.getElementsByTagName("button")[26].remove();
                   document.getElementsByTagName("button")[27].remove(); document.getElementsByTagName("button")[28].remove();
                   document.getElementsByTagName("button")[29].remove(); document.getElementsByTagName("button")[30].remove();
                   document.getElementsByTagName("button")[31].remove(); document.getElementsByTagName("button")[32].remove();
                   document.getElementsByTagName("button")[33].remove(); document.getElementsByTagName("button")[34].remove();
                   document.getElementsByTagName("button")[35].remove(); document.getElementsByTagName("button")[36].remove();
                    
*/