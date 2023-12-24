x=0; 
y=0; 
draw_rect="";
draw_circle="";

var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="System is listening please speak";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The speech has been rocognized as : " + content;

    if(content == "circle" || content == "Circle"){
        x=Math.floor(Math.random()*800);
        y=Math.floor(Math.random()*550);
        draw_circle="set";
        
    }

    if(content == "rectangle" || content == "Rectangle"){
        x=Math.floor(Math.random()*800);
        y=Math.floor(Math.random()*550);
        draw_rect="set";
    }
}

function setup(){
canvas=createCanvas(800,550);
}

function draw(){
if(draw_circle == "set"){
    random_radius=Math.floor(Math.random()*100);
    circle(x,y,random_radius);
    document.getElementById("status").innerHTML="Circle is drawn";
    draw_circle="";
}

if(draw_rect == "set"){
    rect(x,y,40,70);
    document.getElementById("status").innerHTML="Rectangle is drawn";
    draw_rect="";
}
}

function preload(){

}