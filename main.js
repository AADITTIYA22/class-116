noseX = 0;
noseY = 0;

function preload()
{
    img = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotPoses);

}

function draw()
{
    image(video,0,0,300,300);
    image(img,noseX,noseY,30,30);

}

function takeSnapshot(){
    save("my_poto.png");
}

function modelloaded(){
    console.log("MODEL IS LOADED");
}

function gotPoses(results){
    if (results.lenght > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x = "+noseX);
        console.log("Nose y = "+noseY);
        
    }
}