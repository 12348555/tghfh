noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
video=createCapture(VIDEO);
video.size(550,500);

canvas=createCanvas(VIDEO);
canvas.position(560,150);

poseNet =ml5.posenet(video,modelloaded);
poseNet.on('pose',gotPoses);
}

function modelloaded(){
    console.log('poseNet Is Intialized');
}


function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX =" +noseX +" noseY ="+noseY);

leftWristX=results[0].pose.leftWristx;
rightWristX=results[0].pose.rightWristx;
difference=floor(leftWristX - rightWristX)

console.log("leftWristX="+ leftWristX + "rightWristX="+ rightWristX + "difference =" + difference )
}
}

function draw(){
background=('#969A97');

document.getElementById("square_side").innerHTML="Width And Height of a square will be = "+ difference +"px";
fill('#F90093');
stroke('#F90093');
square(noseX,noseY,difference);
}
