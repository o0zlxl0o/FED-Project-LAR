// 메인페이지 JS  - main.js

document.querySelectorAll(".character_act div")
.forEach(el=>followPoster(el));
/******************************************* 
    함수명: followPoster
    기능: 컨텐츠 박스 위에 오버시
        마우스무브 이벤트동안 포스터 따라오기
*******************************************/
function followPoster(actArea) {
  // 로딩함수에서 호출시 boxes변수에 담긴
  // .minfo컬렉션 요소를 전달받는다!

  // 1. 대상선정
  // 1-1.이벤트 대상 : .actArea
//   const actArea = document.querySelector(".character_act div");
  // 1-2.변경대상 :  .flying-poster
  const moving = actArea.querySelector(".coffee");

  console.log(actArea, moving);

  // 2. 이벤트 설정 + 기능구현
  // mousemove이벤트 : 요소위에 마우스 움직일때 계속 발생함
  actArea.onmousemove = (e) => {
    //e-이벤트전달변수
    // 이벤트 객체로 부터 x,y 포인터 위치값
    // event.offsetX ->  x축좌표
    // event.offsetY ->  y축좌표
    // 위치값 기준은 document 문서전체이며
    // x축은 왼쪽끝, y축은 상단끝이 기준임
    // 숫자는 단위표시없는 px값
    // offsetX, offsetY는 부모박스 안에서의 위치임!!!

    // console.log(
    //     'x:',e.offsetX,'\ny:',e.offsetY);

    // 변경대상의 top,left 값을 변경한다!
    moving.style.top = e.offsetY + "px";
    moving.style.left = e.offsetX + "px";
  }; //////// mousemove이벤트함수 //////

  // [.actArea 마우스엔터시 포스터 보이기]
  actArea.onmouseenter = () => {    
    moving.style.display = "block";
  }; //// mouseenter ////

  // [.actArea에 마우스리브시 포스터 숨기기]
  actArea.onmouseleave = () => {
    moving.style.display = "none";
  }; ///// mouseleave ////
} //////// followPoster 함수 ///////////
