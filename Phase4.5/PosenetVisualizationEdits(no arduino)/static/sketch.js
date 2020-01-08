let video;
let posenet;
let noseX=0;
let noseY=0;
let LeyeX=0;
let LeyeY=0;
let ReyeX=0;
let ReyeY=0;
let LearX=0;
let LearY=0;
let RearX=0;
let RearY=0;
let LshX=0;
let LshY=0;
let RshX=0;
let RshY=0;
let LelX=0;
let LelY=0;
let RelX=0;
let RelY=0;
let LwrX=0;
let LwrY=0;
let RwrX=0;
let RwrY=0;
let LhX=0;
let LhY=0;
let RhX=0;
let RhY=0;
let LkX=0;
let LkY=0;
let RkX=0;
let RkY=0;
let LangX=0;
let LangY=0;
let RangX=0;
let RangY=0;


function setup() {
  createCanvas(640, 480).position(640,0);
  video = createCapture(VIDEO);
  
  // video.hide();
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
    // let nX=poses[0].pose.keypoints[0].position.x;
    // let nY=poses[0].pose.keypoints[0].position.y;
    // let eX=poses[0].pose.keypoints[1].position.x;
    // let eY=poses[0].pose.keypoints[1].position.y;

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

    LeyeX = lerp(LeyeX, p1x, 0.5);
    LeyeY = lerp(LeyeY, p1y, 0.5);

    ReyeX = lerp(ReyeX, p2x, 0.5);
    ReyeY = lerp(ReyeY, p2y, 0.5);

    LearX = lerp(LearX, p3x, 0.5);
    LearY = lerp(LearY, p3y, 0.5);

    RearX = lerp(RearX, p4x, 0.5);
    RearY = lerp(RearY, p4y, 0.5);

    LshX = lerp(LshX, p5x, 0.5);
    LshY = lerp(LshY, p5y, 0.5);

    RshX = lerp(RshX, p6x, 0.5);
    RshY = lerp(RshY, p6y, 0.5);

    LelX = lerp(LelX, p7x, 0.5);
    LelY = lerp(LelY, p7y, 0.5);

    RelX = lerp(RelX, p8x, 0.5);
    RelY = lerp(RelY, p8y, 0.5);

    LwrX = lerp(LwrX, p9x, 0.5);
    LwrY = lerp(LwrY, p9y, 0.5);

    RwrX = lerp(RwrX, p10x, 0.5);
    RwrY = lerp(RwrY, p10y, 0.5);

    LhX = lerp(LhX, p11x, 0.5);
    LhY = lerp(LhY, p11y, 0.5);

    RhX = lerp(RhX, p12x, 0.5);
    RhY = lerp(RhY, p12y, 0.5);

    LkX = lerp(LkX, p13x, 0.5);
    LkY = lerp(LkY, p13y, 0.5);

    RkX = lerp(RkX, p14x, 0.5);
    RkY = lerp(RkY, p14y, 0.5);

    LangX = lerp(LangX, p15x, 0.5);
    LangY = lerp(LangY, p15y, 0.5);

    RangX = lerp(RangX, p16x, 0.5);
    RangY = lerp(RangY, p16y, 0.5);

    // noseX = lerp(noseX, nX, 0.5);
    // noseY = lerp(noseY, nY, 0.5);
    // eyeX = lerp(eyeX, eX, 0.5);
    // eyeY = lerp(eyeY, eY, 0.5);
  }
}

function modelReady(){
  console.log('model ready');
}
function draw() {
  image(video,0,0);
  stroke('green');
  strokeWeight(3);

  fill(0,0,0)
  rect(0,0,640,489)
  
  fill(255,255,255);
  ellipse(noseX,noseY,10);

  fill(255,255,255);
  ellipse(LeyeX,LeyeY,10);

  fill(255,255,255);
  ellipse(ReyeX,ReyeY,10);

  fill(255,255,255);
  ellipse(LearX,LearY,10);

  fill(255,255,255);
  ellipse(RearX,RearY,10);

  fill(255,255,255);
  ellipse(LshX,LshY,10);

  fill(255,255,255);
  ellipse(RshX,RshY,10);

  fill(255,255,255);
  ellipse(LelX,LelY,10);

  fill(255,255,255);
  ellipse(RelX,RelY,10);

  fill(255,255,255);
  ellipse(LwrX,LwrY,10);

  fill(255,255,255);
  ellipse(RwrX,RwrY,10);

  fill(255,255,255);
  ellipse(LhX,LhY,10);

  fill(255,255,255);
  ellipse(RhX,RhY,10);

  fill(255,255,255);
  ellipse(LkX,LkY,10);

  fill(255,255,255);
  ellipse(RkX,RkY,10);

  fill(255,255,255);
  ellipse(LangX,LangY,10);

  fill(255,255,255);
  ellipse(RangX,RangY,10);

  line(noseX,noseY,LeyeX,LeyeY);
  line(noseX,noseY,ReyeX,ReyeY);
  line(LearX,LearY,LeyeX,LeyeY);
  line(RearX,RearY,ReyeX,ReyeY);
  line(noseX,noseY,(LshX+RshX)/2,(LshY+RshY)/2);
  line(LshX,LshY,RshX,RshY);
  line(LshX,LshY,LelX,LelY);
  line(RshX,RshY,RelX,RelY);
  line(LwrX,LwrY,LelX,LelY);
  line(RwrX,RwrY,RelX,RelY);
  line(LshX,LshY,LhX,LhY);
  line(RshX,RshY,RhX,RhY);
  line(LhX,LhY,RhX,RhY);
  line(LhX,LhY,LkX,LkY);
  line(RhX,RhY,RkX,RkY);
  line(LangX,LangY,LkX,LkY);
  line(RangX,RangY,RkX,RkY);
}