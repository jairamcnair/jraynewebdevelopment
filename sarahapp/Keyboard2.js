
const Keyboard = { // create Object Keyboard

    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false
    },

    init() {
        

        // Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // Setup main elements
        this.elements.main.classList.add("keyboard", "keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

        // keyboard response
        document.querySelectorAll(".use-keyboard-input").forEach(element => {
            element.addEventListener("focus", () => {
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
        });
    },

    _createKeys(){
        const fragment = document.createDocumentFragment(); // create the fragment(div) with keys to insert into keyscontainer
        
        const keyLayout = [
            "a", "b", "c", "d", "e", "f", "g",
            "h", "i", "j", "k", "l", "m", "n",
            "o", "p", "q", "r", "s", "t", "u",
            "v", "w", "x", "y", "z",
            "?", "!", ".",
            "CAPS", "NUMBERS", "BACK", "SPEAK", "ENTER", "SPACE", "CLEAR"
        ];

        const createIconHTML = (icon_name) => {
            return `<i class="material_icons"> ${icon_name}</i>`;
        };

        // create key elements, making them visible when you open the HTML file
        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["g", "n", "u", "z", ".", "SPEAK"].indexOf(key) !== -1;

            //add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch (key) {
                case "BACK":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("BACK");

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");
                    });

                    break;

                case "CAPS":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    keyElement.innerHTML = createIconHTML("CAPS");

                    keyElement.addEventListener("click", () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                    });

                    break;

                case "ENTER":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("ENTER");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += "\n";
                        this._triggerEvent("oninput");
                    });

                    break;

                    case "CLEAR":
                        keyElement.classList.add("keyboard__key--wide");
                        keyElement.innerHTML = createIconHTML("CLEAR");
    
                        keyElement.addEventListener("click", () => {
                            this.properties.value = this.properties.value.substring(0, this.properties.value.length - this.properties.value.length);
                            this._triggerEvent("oninput");
                        });
    
                        break;

                case "SPACE":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("SPACE");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    });

                    break;

                    case "SPEAK":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
                    keyElement.innerHTML = createIconHTML("SPEAK");

                    keyElement.addEventListener("click", () => {

                        let utterance = new SpeechSynthesisUtterance(this.properties.value);
                        speechSynthesis.speak(utterance);
                     
                        this.close();
                        this._triggerEvent("onclose");
                    });

                    break;
                    case "NUMBERS":
                        keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
                        keyElement.innerHTML = createIconHTML("NUMBERS");
    
                        keyElement.addEventListener("click", () => {
                            this.elements.keysContainer.removeChild();
                        
                            this.elements.keysContainer.appendChild(this._createNumberKeys());
                            this.close();
                            this._triggerEvent("onclose");
                        });
    
                        break;

                default:
                    keyElement.textContent = key.toLowerCase();
    
                    keyElement.addEventListener("click", () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent("oninput");
           
                     });
    
                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;
    },

    _createNumberKeys(){
        const fragment2 = document.createDocumentFragment(); // create the fragment(div) with keys to insert into keyscontainer
        const createIconHTML = (icon_name) => {
            return `<i class="material_icons"> ${icon_name}</i>`;
        };
        const numberKeyLayout = [
            "+", "-", "*", "%", "=",
            "0", "1", "2", "3", "4", 
            "5", "6", "7", "8", "9", 
            "?", "!", ".",
            "LETTERS", "BACK", "SPEAK", "ENTER", "SPACE"
        ];
        numberKeyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["g", "n", "u", "z", ".", "SPEAK"].indexOf(key) !== -1;

            //add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch (key) {
                case "BACK":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("BACK");

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");
                    });

                    break;

                case "ENTER":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("ENTER");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += "\n";
                        this._triggerEvent("oninput");
                    });

                    break;

                    case "CLEAR":
                        keyElement.classList.add("keyboard__key--wide");
                        keyElement.innerHTML = createIconHTML("CLEAR");
    
                        keyElement.addEventListener("click", () => {
                            this.properties.value = this.properties.value.substring(0, this.properties.value.length - this.properties.value.length);
                            this._triggerEvent("oninput");
                        });
    
                        break;

                case "SPACE":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("SPACE");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    });

                    break;

                    case "SPEAK":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
                    keyElement.innerHTML = createIconHTML("SPEAK");

                    keyElement.addEventListener("click", () => {

                        //let utterance = new SpeechSynthesisUtterance("Hello world!");
                        //let utterance = new SpeechSynthesisUtterance(document.getElementById("typedtext").textContent);
                        //let utterance = new SpeechSynthesisUtterance(this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase());
                        let utterance = new SpeechSynthesisUtterance(this.properties.value);
                        speechSynthesis.speak(utterance);
                     
                        this.close();
                        this._triggerEvent("onclose");
                    });

                    break;
                    case "NUMBERS":
                        keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
                        keyElement.innerHTML = createIconHTML("NUMBERS");
    
                        keyElement.addEventListener("click", () => {
                            
                            this.elements.keysContainer.appendChild(this._createNumberKeys());
                            
                        
                               /* keyLayout"+", "-", "*", "%", "=", "f", "g",
                                "0", "1", "2", "3", "4", "", "n",
                                "5", "6", "7", "8", "9", "t", "u",
                                "v", "w", "x", "y", "z",
                                "?", "!", ".",
                                "CAPS", "NUMBERS", "BACK", "SPEAK", "ENTER", "SPACE"*/
                            
                         
                            this.close();
                            this._triggerEvent("onclose");
                        });
    
                        break;

                default:
                    keyElement.textContent = key.toLowerCase();
    
                    keyElement.addEventListener("click", () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent("oninput");
           
                     });
    
                    break;
            }

            fragment2.appendChild(keyElement);

            if (insertLineBreak) {
                fragment2.appendChild(document.createElement("br"));
            }
        });
            return fragment2;
    },
    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    _toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },

    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        //this.elements.main.classList.remove("keyboard--hidden");
    },

    close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        //this.elements.main.classList.add("keyboard--hidden");
    }
};

window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});
