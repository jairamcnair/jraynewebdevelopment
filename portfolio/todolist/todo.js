// https://www.youtube.com/watch?v=G0jO8kUrg-I&t=221s

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // creates the 'x' beside the tasks so we can delete
        li.appendChild(span);

        inputBox.value = "";

        saveDate(); // saves data so we can exit/refresh page and it will still be there when we come back next time
    }
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); // save the data as the innerHTML of the list container
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();