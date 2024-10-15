var anim= ["Lionel Mambingo", "Web developpeur", "Android developpeur", "QA testeur", "Lionel Mambingo"]
var animContent = document.createElement("p")
animContent.classList.add("animated_name")
var content = document.getElementById("animated_Content")

for (let i = 0; i < anim.length; i++) {
    setTimeout(function timer() {
        animContent.textContent=anim[i]; //  your code here
        content.appendChild(animContent)

        
    }, i * 4000);
  }



