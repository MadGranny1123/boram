let screenWidth = screen.width - 100;
let face1 = document.getElementById("face1");
let face2 = document.getElementById("face2");
let faces = document.getElementById("faces");

document.getElementById("face1").style.width = screenWidth/4;
document.getElementById("face2").style.width = screenWidth/4;

let bodyElement = document.querySelector("body");
bodyElement.addEventListener("mousemove",changeFace, false);

let prevX=0;
let maxWidth = screenWidth/2;


//마우스 방향에 따라 분기
function changeFace(e){
  let xDirection = getMouseDirection(e);
  let face1Width = face1.offsetWidth;
  let face2Width = face2.offsetWidth;

  if(xDirection == "left"){
    moveLeft(face1Width,face2Width);
  } else {
    moveRight(face1Width, face2Width);
  }
}

//왼쪽으로 움직인 경우
function moveLeft(face1Width, face2Width){
  if(face2Width < maxWidth){
    face2.style.width = face2Width + 10 + "px";
    face1.style.width = face1Width - 10 + "px";
  }
  //change opacity
  let percentage = getPercentage(face1Width, screenWidth/4)/100;
  document.getElementById("text1").style.opacity = percentage>0.2?percentage:0;

  let percentage = getPercentage(face1Width, screenWidth/4)/100;
  document.getElementById("text2").style.opacity = percentage>0.2?percentage:0;

  //move image left
  let picPos = faces.offsetLeft; //faces 부분 >유튜브에선 frontFaceSet 으로 나왔었음.
  maxLeft =150;
  if(picPos>maxLeft){
    faces.style.left = picPos - 4 + "px";
  }
  faces.style.left = picPos > maxLeft ? picPos - 4 + "px" : picPos;
}


//오른쪽으로 움직인 경우
function moveRight(face1Width, face2Width){
  if(face1Width < maxWidth){
    face1.style.width = face1Width + 10 + "px";
    face2.style.width = face2Width - 10 + "px";

    //change opacity
  let percentage = getPercentage(face1Width, screenWidth/4)/100;
  document.getElementById("text1").style.opacity = percentage>0.2?percentage:0;

  let percentage = getPercentage(face1Width, screenWidth/4)/100;
  document.getElementById("text2").style.opacity = percentage>0.2?percentage:0;

  //Move image Right
  let picPos = faces.offsetLeft;
  let maxRight = screenWidth/2 - 150;
  if(picPos>maxRight){
    faces.style.left = picPos + 4 + "px";
    }
  }
}


function getPercentage(width, total){
  return (width*100)/total;
}

function getMouseDirection(e){
  currentX = e.pageX;
  if(prevX < currentX){
    dir = "right"
  } else {
    dir = "left"
  }
  prevX = currentX;
  return dir;
}