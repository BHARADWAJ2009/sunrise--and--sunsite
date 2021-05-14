const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var ampm;

async function getBackgroundImg(){
    // write code to fetch time from API
        var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
        var responseJSON = await response.json();
        var datetime = responseJSON.datetime;
        var hour = datetime.slice(11,13)
        if (hour>=06 && hour<=08){
            bg = "surise1.png"
        }else if (hour>=08 && hour<=10){
            bg = "sunrise2.png"
    
        }else if (hour>=10 && hour<=12){
            bg = "sunrise3.png"
    
        }else if (hour>=12 && hour<=15){
            bg = "sunrise4.png"
    
        }else if (hour>=15 && hour<=16){
            bg = "sunrise5.png"
    
        }else if (hour>=16 && hour<17){
            bg = "sunrise6.png"
    
        }else if (hour>=17 && hour<=18){
            bg = "sunset7.png"
    
        }else if (hour>=18 && hour<=19){
            bg = "sunset8.png"
    
        }else if (hour>=19 && hour<=20){
            bg = "sunset9.png"
    
        }else if (hour>=20 && hour<=21){
            bg = "sunset10.png"
    
        }else if (hour>=21 && hour<=22){
            bg = "sunset11.png"
    
        }else if (hour>=22 && hour<=06){
            bg = "sunset12.png"
    
        }
        backgroundImg = loadImage(bg)
        console.log(backgroundImg)
    }

function preload() {
    // create getBackgroundImg( ) here
   
    getBackgroundImg();
    

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if (backgroundImg)
    background(backgroundImg);


    Engine.update(engine);

    // write code to display time in correct format here
    if(hour < 12 && hour > 0){
        ampm = "AM";
    }
    else {
        ampm = "PM";
    };

    textSize(35);
    text("TIME : " + hour + ampm,50,50);


}
