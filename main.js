function preload(){

}

function setup(){
canvas = createCanvas(640, 480);
canvas.position(400, 300);
video = createCapture(VIDEO);
video.hide();

tint_color="";
}

function draw(){
    

}

function take_snapshot(){
    save ('student_name.png');
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value ;
}