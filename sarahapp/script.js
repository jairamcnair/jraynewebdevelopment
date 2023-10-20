
// LEFT OFF AT 36:40 IN https://www.youtube.com/watch?v=N3cq0BHDMOY
const Keyboard = {

    elements: { // property
        main: null, // refers to the main keyboard element
        keysContainer: null,  // refers to the keys container
        keys: { } // an empty array for the buttons pressed
    },

    eventHandlers: { // property

        oninput: null,
        onclose: null,

    },


    properties: {
        value: " ",
        capslock: false,
    },

    init() { // method, runs when the page first loads, initializes the keyboard
        
        // Create main elements
        this.elements.main = document.createElement("div"); // creates a div and stores it virtually in JavaScript
        this.elements.keysContainer = document.createElement("div");

        // Setup main elements
        this.elements.main.classList.add("keyboard, keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");

        // Add main elements to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

    },

    _createKeys() { // private method (bc underscore), creates the html for the keys
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
            "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "enter",
            "U", "V", "W", "X", "Y", "Z", "!", ",", ".", "?",
            "space"
        ];

        //create HTML for an icon
        const createIconHTML = (icon_name) =>{
            return '<i class="material-icons"> ${icon_name} </i>'
        };

        keyLayout.foreach( key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");
        });
    },

    _triggerEvent(handlerName) { // triggers the oninput or onclose events in the eventHandlers property
        console.log("Event Triggered! Event name: " + handlerName);
    },

    _toggleCapslock(){
        console.log("Capslock Toggled!");
    },

    open(initialValue, oninput, onclose) {

    },

    close() {
        
    },
};

window.addEventListener("DOMContentLoaded", function () { // when DOM is loaded, load the keyoard
    Keyboard.init();
})