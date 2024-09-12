function setup() 
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canva = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('¡Loding complete!')
}

function gotPoses(results) {
    if(results.lenght > 0){
        console.log(results)
    }
}
