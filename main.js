noseX = 0;
noseY = 0;

function preload(){
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
    canvas = createCanvas(500, 300);
    canvas.position(480, 300);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x + 75;
        noseY = results[0].pose.nose.y + 2.5;
        console.log("mustache x = " + results[0].pose.nose.x);
        console.log("mustache y = " + results[0].pose.nose.y + 10);
    }
}

function draw() {
    image(video, 0, 0, 500, 300);
    image(mustache, noseX, noseY, 50, 50);
}

function take_snapshot(){
    save('myFilterImage.png');
}