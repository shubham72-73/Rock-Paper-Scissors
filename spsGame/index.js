function play(){
var randomNum1 = Math.floor(Math.random()*3 + 1);

var randomImage1 = document.getElementById("image1");
var randomImage2 = document.getElementById("image2");

if(randomNum1 === 1){
    randomImage1.src="./img1.png";
    randomImage1.setAttribute("alt", "image 1");
}
else if(randomNum1 === 2){
    randomImage1.src="./img2.png";
    randomImage1.setAttribute("alt", "image 2");
}
else if(randomNum1 === 3){
    randomImage1.src="./img3.png";
    randomImage1.setAttribute("alt", "image 3");
}

var randomNum2 = Math.floor(Math.random()*3 + 1);

if(randomNum2 === 1){
    randomImage2.setAttribute("src", "img1.png");
    randomImage2.setAttribute("alt", "image 1");
}
else if(randomNum2 === 2){
    randomImage2.setAttribute("src", "img2.png");
    randomImage2.setAttribute("alt", "image 2");
}
else if(randomNum2 === 3){
    randomImage2.setAttribute("src", "img3.png");
    randomImage2.setAttribute("alt", "image 3");
}


if(randomNum1===1 && randomNum2===2){
    document.querySelector("h1").innerHTML = "🚩 Player 2 WON";
}
else if(randomNum1===1 && randomNum2===3){
    document.querySelector("h1").innerHTML = "🚩 Player 1 WON";
}
else if(randomNum1===2 && randomNum2===1){
    document.querySelector("h1").innerHTML = "🚩 Player 1 WON";
}
else if(randomNum1===2 && randomNum2===3){
    document.querySelector("h1").innerHTML = "🚩 Player 2 WON";
}
else if(randomNum1===3 && randomNum2===1){
    document.querySelector("h1").innerHTML = "🚩 Player 2 WON";
}
else if(randomNum1===3 && randomNum2===2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 WON";
}
else{
    document.querySelector("h1").innerHTML = "It's a TIE 😐";
}
}