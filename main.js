noseX = 0;
noseY = 0;

rightWristX = 0;
leftWristX = 0;
difference =0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(150,100);

    canvas = createCanvas(500,450);
    canvas.position(750,110);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log("Model is loaded!!")
}

function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results)
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;

    rightWristX = results[0].pose.leftWrist.x;
    leftWristX = results[0].pose.rightWrist.x;

    difference = leftWristX - rightWristX;
}
}

function draw()
{
    background("green");
    fill("pink");
    stroke("pink");
    square(noseX, noseY, difference);
}