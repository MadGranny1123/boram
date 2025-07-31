

var screenWidth = window.innerWidth - 100;
var face1 = document.getElementById("face1");
var face2 = document.getElementById("face2");
var faces = document.getElementById("faces");
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var sec1 = document.querySelector(".sec1");

var maxWidth = screenWidth / 4;
var minWidth = 1;
var maxOffset = 150;

// 초기 상태 변수
var initialFaceWidth = maxWidth;
var initialOpacity = 1;
var initialTransform = "translateX(0px)";

// 페이지 로드 시 초기 상태 적용
face1.style.width = initialFaceWidth + "px";
face2.style.width = initialFaceWidth + "px";
text1.style.opacity = initialOpacity;
text2.style.opacity = initialOpacity;
faces.style.transform = initialTransform;

// 마우스 움직임 이벤트에서 트랜지션 추가 및 너비 조절
document.body.addEventListener("mousemove", function (e) {
  // transition 추가
  face1.style.transition = "width 0.8s ease";
  face2.style.transition = "width 0.8s ease";

  var mouseX = e.clientX;
  var ratio = mouseX / screenWidth;

  var leftThreshold = 0.6;
  var rightThreshold = 0.6;

  let leftRatio, rightRatio;

  if (ratio <= rightThreshold) {
    leftRatio = 1;
    rightRatio = 0;
  } else if (ratio >= leftThreshold) {
    leftRatio = 0;
    rightRatio = 1;
  } else {
    leftRatio =
      (leftThreshold - ratio) / (leftThreshold - rightThreshold);
    rightRatio = 1 - leftRatio;
  }

  var totalWidth = maxWidth * 1.9;
  var face1Width = Math.max(minWidth, totalWidth * leftRatio);
  var face2Width = Math.max(minWidth, totalWidth * rightRatio);

  if (face1Width + face2Width > totalWidth) {
    if (face1Width > face2Width) {
      face1Width = totalWidth - face2Width;
    } else {
      face2Width = totalWidth - face1Width;
    }
  }

  face1.style.width = face1Width + "px";
  face2.style.width = face2Width + "px";

  var offset = (leftRatio - rightRatio) * maxOffset;
  faces.style.transform = `translateX(${offset}px)`;

  text1.style.opacity = leftRatio > 0.2 ? leftRatio : 0;
  text2.style.opacity = rightRatio > 0.2 ? rightRatio : 0;
});

// 마우스가 sec1 영역 벗어나면 초기화
sec1.addEventListener("mouseleave", function () {
  face1.style.width = initialFaceWidth + "px";
  face2.style.width = initialFaceWidth + "px";

  text1.style.opacity = initialOpacity;
  text2.style.opacity = initialOpacity;

  faces.style.transform = initialTransform;
});
