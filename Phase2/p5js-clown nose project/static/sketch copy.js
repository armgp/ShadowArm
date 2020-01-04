let video;
let posenet;
let noseX=0;
let noseY=0;
let eyeX=0;
let eyeY=0;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  posenet = ml5.poseNet(video, modelReady);
  posenet.on('pose', gotPoses);
}

function gotPoses(poses){
  console.log(poses[0]);
  if(poses.length > 0){
    let nX=poses[0].pose.keypoints[0].position.x;
    let nY=poses[0].pose.keypoints[0].position.y;
    let eX=poses[0].pose.keypoints[1].position.x;
    let eY=poses[0].pose.keypoints[1].position.y;
    noseX = lerp(noseX, nX, 0.5);
    noseY = lerp(noseY, nY, 0.5);
    eyeX = lerp(eyeX, eX, 0.5);
    eyeY = lerp(eyeY, eY, 0.5);
  }
}

function modelReady(){
  console.log('model ready');
}
function draw() {
  image(video,0,0);
  
  let d = dist(noseX, noseY, eyeX, eyeY);
  
  fill(255,0,0);
  ellipse(noseX,noseY,d);
}