var num = 6;
var colors = randomColorsArray(6);
var squares = document.querySelectorAll(".square");
var givenColor = document.querySelector("#givenColor");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector(".header");
var newCol = document.querySelector("#reset");
var butEasy = document.querySelector("#easy");
var butHard = document.querySelector("#hard");

//Set Level Easy
butEasy.addEventListener("click",function(){
    butEasy.classList.add("selected");
    butHard.classList.remove("selected");
    num = 3;
    reset(num);

})

//set Level Hard
butHard.addEventListener("click",function(){
    butEasy.classList.remove("selected");
    butHard.classList.add("selected");
    num=6
    reset(num);
})

//Set colour we need to find
var recqdcolor = randomColor();
givenColor.innerHTML = recqdcolor;

//Set Color of boxes
for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
}

//Event on clicking boxes
for(var i=0;i<squares.length;i++){
    squares[i].addEventListener("click",function(){
        var colorclicked = this.style.backgroundColor;
        if(colorclicked == recqdcolor){
            newCol.innerHTML = "PLAY AGAIN";
            messageDisplay.innerHTML = "Right Answer";
            header.style.backgroundColor = recqdcolor;
            for(var j=0;j<squares.length;j++){
                squares[j].style.backgroundColor = recqdcolor;
            }
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.innerHTML = "Try Again";
        }
    })
}

//Reset Feature
newCol.addEventListener("click",function(){
    reset(num);
})
//Function to Reset
function reset(n){
    newCol.innerHTML = "NEW COLORS";
    messageDisplay.innerHTML = "";
    header.style.backgroundColor = "steelblue";
    colors = randomColorsArray(n);
    console.log(n);
    console.log(colors);
    recqdcolor = randomColor();
    givenColor.innerHTML = recqdcolor;
    for(var i=0;i<n;i++){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
        console.log(squares[i].style.backgroundColor)
    }
    for(var j=i;j<squares.length;j++){
        console.log("NONE");
        squares[j].style.display = "none";
    }
}

//Function to generate arra with Random Colors
function randomColorsArray(n) {
    var arr=[];
    for(var i=0;i<n;i++){
        var red = Math.floor(Math.random()*256);  
        var green = Math.floor(Math.random()*256); 
        var blue = Math.floor(Math.random()*256);
        arr[i] = "rgb(" + red + "," + " " + green + "," + " " + blue + ")";
    }    
    return arr;
}

//Function to pick Random item from Colors Array
function randomColor() {
    var randomNum = Math.floor(Math.random()*colors.length);
    return colors[randomNum];
}