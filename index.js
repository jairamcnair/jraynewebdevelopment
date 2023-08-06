
const mybtn = document.getElementById("btn");

var clickcount = 0;

/*mybtn.addEventListener("click", function btnfunction(e) {

        document.getElementById("text1").innerHTML = "<h1> I will create or refresh a website for you! </h1> ";
        document.getElementById("text2").innerHTML = "<p> Your website will be responsive, which means it will adapt to the size of the screen when you change it, like this website. </p> ";
        document.getElementById("text3").innerHTML = "<p> If you would like to see some of my work, click 'Portfolio'. If you are curious about rates, check out the 'Investment' section. </p> ";
        document.getElementById("btn").innerHTML = "Less Details";
        
});  */

mybtn.addEventListener("click", myFunction);

function myFunction() {
        var text1 = document.getElementById("text1");
        if (text1.innerHTML === "<h1> I will create or refresh a website for you! </h1>") {
          text1.innerHTML = "<h1> Develop Your </h1>";
        } else {
          text1.innerHTML = "<h1> I will create or refresh a website for you! </h1>";
        }

        var text2 = document.getElementById("text2");
        if (text2.innerHTML === "<p>Your website will be responsive, which means it will adapt to the size of the screen when you change it, like this website.</p>") {
          text2.innerHTML = "<h1>Website With Me!</h1>";
        } else {
          text2.innerHTML = "<p>Your website will be responsive, which means it will adapt to the size of the screen when you change it, like this website.</p>";
        }


        var text3 = document.getElementById("text3");
        if (text3.innerHTML === "<p> If you would like to see some of my work, click 'Portfolio'. If you are curious about rates, check out the 'Investment' section. </p>") {
          text3.innerHTML = "<p> I'm a website developer proficient in HTML, CSS, and JavaScript. </br> In fact, those languages are what I used to code this website right here! </p>";
        } else {
          text3.innerHTML = "<p> If you would like to see some of my work, click 'Portfolio'. If you are curious about rates, check out the 'Investment' section. </p>";
        }

        var btn = document.getElementById("btn");
        if (btn.innerHTML === "Less Details") {
          btn.innerHTML = "More Details";
        } else {
          btn.innerHTML = "Less Details";
        }
      }





        /*mybtn.removeEventListener("click", btnfunction(e));*/
      
        /*
        document.getElementById("text1").innerHTML = "Second Click";
        document.getElementById("text2").innerHTML = "";
        document.getElementById("text3").innerHTML = " ";
        document.getElementById("btn").innerHTML = "More Details";
    
        */
    


  

    
       
    




