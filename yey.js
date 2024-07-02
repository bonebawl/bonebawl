const button1 = document.getElementById("thewho");
const button2 = document.getElementById("thewhat");
const button3 = document.getElementById("thewhy");

button1.addEventListener("click", function() {
    const img = document.getElementById("thewhats");
    img.src = "img/deadge.png";

    img.style.width = "80%";
    img.style.height = "auto";
    img.style.padding = "5%";
    document.getElementById("intro").textContent = "Hi! I'm Chester!";
    document.getElementById("stuff").innerHTML = "<p id='stuff'>I am the guild master in our guild in---</p>"
});
button2.addEventListener("click", function() {
    const img = document.getElementById("thewhats");
    img.src = "img/albion.png";
    img.style.width = "70%";
    img.style.height = "auto";
    img.style.padding = "5%";
    document.getElementById("intro").textContent = "My hobbies are:";
    document.getElementById("stuff").innerHTML = "<p id='stuff'>Albion Online<br>Gaming<br>Cooking<br>Alive<br>Being an Ingeneer!</p>"
});


button3.addEventListener("click", function() {
    const img = document.getElementById("thewhats");
    img.src = "img/NO_ME_thumbsup.jpg";
    img.style.width = "35%";
    img.style.height = "auto";
    img.style.padding = "2%";
     document.getElementById("intro").textContent = "Why do I like these?????";
    document.getElementById("stuff").innerHTML = "<p id='stuff'>I find these entertaining, and worth my while!<br> I also love CS, Chemistry and hate humanities.</p>"
});

