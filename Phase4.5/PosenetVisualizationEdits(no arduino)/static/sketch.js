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

var socket = io.connect('http://' + document.domain + ':' + location.port)
socket.on( 'connect', function() {
  socket.emit( 'my event', {
    data: 'User Connected'
  })
})

function gotPoses(poses){
  console.log(poses[0]);
  socket.emit( 'my event', {
    val : poses[0]
  } )
  if(poses.length > 0){
    let p0x=poses[0].pose.keypoints[0].position.x;
    let p0y=poses[0].pose.keypoints[0].position.y;

    let p1x=poses[0].pose.keypoints[1].position.x;
    let p1y=poses[0].pose.keypoints[1].position.y;

    let p2x=poses[0].pose.keypoints[2].position.x;
    let p2y=poses[0].pose.keypoints[2].position.y;

    let p3x=poses[0].pose.keypoints[3].position.x;
    let p3y=poses[0].pose.keypoints[3].position.y;

    let p4x=poses[0].pose.keypoints[4].position.x;
    let p4y=poses[0].pose.keypoints[4].position.y;

    let p5x=poses[0].pose.keypoints[5].position.x;
    let p5y=poses[0].pose.keypoints[5].position.y;

    let p6x=poses[0].pose.keypoints[6].position.x;
    let p6y=poses[0].pose.keypoints[6].position.y;

    let p7x=poses[0].pose.keypoints[7].position.x;
    let p7y=poses[0].pose.keypoints[7].position.y;

    let p8x=poses[0].pose.keypoints[8].position.x;
    let p8y=poses[0].pose.keypoints[8].position.y;

    let p9x=poses[0].pose.keypoints[9].position.x;
    let p9y=poses[0].pose.keypoints[9].position.y;

    let p10x=poses[0].pose.keypoints[10].position.x;
    let p10y=poses[0].pose.keypoints[10].position.y;

    let p11x=poses[0].pose.keypoints[11].position.x;
    let p11y=poses[0].pose.keypoints[11].position.y;

    let p12x=poses[0].pose.keypoints[12].position.x;
    let p12y=poses[0].pose.keypoints[12].position.y;

    let p13x=poses[0].pose.keypoints[13].position.x;
    let p13y=poses[0].pose.keypoints[13].position.y;

    let p14x=poses[0].pose.keypoints[14].position.x;
    let p14y=poses[0].pose.keypoints[14].position.y;

    let p15x=poses[0].pose.keypoints[15].position.x;
    let p15y=poses[0].pose.keypoints[15].position.y;

    let p16x=poses[0].pose.keypoints[16].position.x;
    let p16y=poses[0].pose.keypoints[16].position.y;
    
    noseX = lerp(noseX, p0x, 0.5);
    noseY = lerp(noseY, p0y, 0.5);
    ReyeX = lerp(LeyeX, p1x, 0.5);
    ReyeY = lerp(LeyeY, p1y, 0.5);
  }
}

function modelReady(){
  console.log('model ready');
}
function draw() {
  image(video,0,0);
  
  fill(255,0,0);
  ellipse(noseX,noseY,20);
}