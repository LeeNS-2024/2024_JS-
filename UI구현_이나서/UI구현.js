/* 입력 값들 받아오기 */

/* 너비 */
const w = document.getElementById(".widthInput").value;

/* 높이 */
const h = document.getElementById(".heightInput").value;

/* 글자크기 */
const fontS = document.getElementById(".fontSizeInput").value;

/* 글자색 */
const fontC = document.getElementById(".fontColorInput").value;

/* 배경색 */
const bC = document.getElementById(".backgroundColorInput").value;

/* 출력 문자열 */
const con = document.getElementById(".contentInput").value;

/* const box = document. */

/* const boxList = [w,h,fontS,fontC,bC,con]; */

/* 결과 박스 */
const box = document.querySelector("#output");




/* 클릭할 버튼 요소 얻어오기 */
const createBox = document.querySelector("#createBox");


/* 적용하기 버튼 클릭 시 */
createBox.addEventListener("click", function(){

  /* 굵기 버튼 값 얻어와서 체크됐을 때 */
  const borB = document.querySelector("input[name = bor-btn]:checked".value);

  if(borB === "보통"){
    box.style.borderWidth = 2;
  } else box.style.borderWidth = 8;


  /* 가로정렬 버튼 값 얻어와서 체크됐을 때 */
  const colB = document.querySelector("input[name = col-btn]:checked".value);
  
  if(colB === "왼쪽"){
    box.style.flexStart;
  } else if (colB === "가운데") {
    box.style.center;
  } else {
    box.style.flexEnd;
  }

  /* 세로 클릭버튼 값 얻어와서 체크됐을 때 */
  const hB = document.querySelector("input[name = row-btn]:checked".value);

  box.style.width = w;
  box.style.height = h;
  box.style.fontSize = fontS;
  box.style.fontColor = fontC;
  box.style.backgroundColor = bC;

});

var reBox = document.createElement("output");
