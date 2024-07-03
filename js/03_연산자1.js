/*  (중요!!!) 
  HTML에서 얻어온 값/내용은
  무조건 string 형태!!!!
*/


// document : HTML문서
// . (점 연산자) : 내부, 하위 접근 연산자
// get : 얻다
// Element : HTML 요소
// ById : id가 일치하는
// -> 문서 내에서 id가 일치하는 요소를 얻어와라

// input1 id를 가지는 요소를 얻어와
// number1 변수(상수)에 저장
const number1 = document.getElementById('input1')
const number2 = document.getElementById('input2')

// 결과 출력용 요소 얻어오기
const calcResult = document.getElementById("calcResult");


// 함수 설명 주석
/**
 * 더하기 함수
 */

function plusFn(){

  //더하기 함수 정의

  //입력 값을 숫자(number)로 변환해서 v1 변수에 저장
  const v1 = Number(number1.value);
  const v2 = Number(number2.value);

  console.log("두 수의 합 : ", v1 + v2);

  // v1 + v2 결과 값을
  // calcResult 요소의 내용(innerText)로 대입(=)
  calcResult.innerText = v1 + v2;
}


/** 빼기 함수 */
function minusFn(){

  // Number('숫자만 작성된 문자열') -> 숫자(number)로 변환 (생성자)

  const v1 = Number(number1.value);
  const v2 = Number(number2.value);

  // id가 calcResult인 요소의 내부 내용으로
  // v1 - v2 결과 대입

  console.log("첫 번째 값 - 두 번째 값 : ", v1 - v2);

  calcResult.innerText = v1 - v2;
}

/** 곱하기 함수 */
function multiFn(){
  const v1 = Number(number1.value);
  const v2 = Number(number2.value);

  console.log("두 수의 곱 : ", v1 * v2);

  calcResult.innerText = v1 * v2;
}

/** 나누기 함수 */
function divFn(){
  const v1 = Number(number1.value);
  const v2 = Number(number2.value);

  console.log("첫 번째 값 / 두 번째 값 : ", v1 / v2);

  calcResult.innerText = v1 / v2;
}

/** 나머지 함수 */
function modFn(){
  const v1 = Number(number1.value);
  const v2 = Number(number2.value);

  console.log("나머지 : ", v1 % v2);

  calcResult.innerText = v1 % v2;
}

