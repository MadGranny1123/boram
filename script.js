const sec1 = document.querySelector('.sec1');
const face1 = document.getElementById('face1');
const face2 = document.getElementById('face2');
const faces = document.getElementById('faces');

// ✅ 초기 비율 설정
const totalFaceWidth = 838;
const defaultRatio = 0.55; // face2의 비율
face1.style.width = `${(1 - defaultRatio) * totalFaceWidth}px`;
face2.style.width = `${defaultRatio * totalFaceWidth}px`;
faces.style.left = `${25 - (defaultRatio - 0.5) * 10}%`; // left도 초기 설정

// 마우스 이벤트 핸들러 함수
function handleMouseMove(e) {
  const sec1Width = sec1.offsetWidth;
  const mouseX = e.clientX - sec1.getBoundingClientRect().left;

  let ratio = mouseX / sec1Width;
  console.log(ratio);

  const face1Width = (1 - ratio) * totalFaceWidth;
  const face2Width = ratio * totalFaceWidth;

  face1.style.width = `${face1Width}px`;
  face2.style.width = `${face2Width}px`;

  const leftOffset = 25 - (ratio - 0.5) * 10;
  faces.style.left = `${leftOffset}%`;
}

// 등장 및 이벤트 바인딩
setTimeout(() => {
  sec1.classList.add('show');

  setTimeout(() => {
    sec1.addEventListener('mousemove', handleMouseMove);
  }, 2000);
}, 500);
