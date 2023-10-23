
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn"); // "Create Note button in html"
let notes = document.querySelectorAll(".input-box"); // selects all input boxes

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
createBtn.addEventListener("click", () =>{  // create the note
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){ // each time a key is pressed, the storage is updated
                updateStorage();
            }
        })
    }
});



showNotes();