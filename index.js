var numsquare=6;
var colors=generaterandomcolor(numsquare);
var square=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colordisplay=document.getElementById("colordisplay");
colordisplay.textContent=pickedcolor;

var messagedisplay=document.getElementById("message");
var changeheadingcolor=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var easyb=document.querySelector("#easybtn");
var hardb=document.querySelector("#hardbtn");
easyb.addEventListener("click",function(){
hardb.classList.remove("selected");
    easyb.classList.add("selected");
    numsquare=3;
    colors=generaterandomcolor(numsquare);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for (let i = 0; i < square.length; i++) {
   if(colors[i]){
    square[i].style.backgroundColor=colors[i]; 
   }
    else{
        square[i].style.display="none";
    }
}

})
hardb.addEventListener("click",function(){
    hardb.classList.add("selected");
    easyb.classList.remove("selected");
    numsquare=6;
    colors=generaterandomcolor(numsquare);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for (let i = 0; i < square.length; i++) {
    square[i].style.backgroundColor=colors[i]; 
    square[i].style.display="block";
    }   
})


resetbutton.addEventListener("click",function(){
    colors=generaterandomcolor(numsquare);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor=colors[i];
          }
changeheadingcolor.style.backgroundColor="steelblue";
messagedisplay.textContent=" ";

})

for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor=colors[i];
    square[i].addEventListener("click",function(){
        var clickedcolor = this.style.backgroundColor;
        if( clickedcolor === pickedcolor){
            messagedisplay.textContent = "CORRECT";
            changecolor(clickedcolor);      
            changeheadingcolor.style.backgroundColor=clickedcolor;
            resetbutton.textContent="PLAY AGAIN";
        }
        else{
           this.style.backgroundColor="#232323";
           messagedisplay.textContent = "TRY AGAIN";
        }
    })
}
function changecolor(color){
    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor=color;
        }
}
function pickcolor() {
    var random = Math.floor(Math.random()*colors.length);
return colors[random];
}
function generaterandomcolor(num) {
    var arr=[];
    for (let i = 0; i < num; i++) {
       arr.push(randomcolor());
         }
    return arr;
}
function randomcolor(){
    var r=Math.floor(Math.random() * 256);
    var g=Math.floor(Math.random() * 256);
    var b=Math.floor(Math.random() * 256);
return "rgb(" + r + ", " + g + ", " + b + ")"; 
}





