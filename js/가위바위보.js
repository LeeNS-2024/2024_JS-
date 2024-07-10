function startGame() {

  // 맞춰야되는 난수(1 ~ 200) 발생
  const num = Math.floor(Math.random() * 3);

  if(num === 0){
    대충가위그림
  } else if(num===1){
    대충바위그림
  } else{
    대충보자기그림
  }
  
}