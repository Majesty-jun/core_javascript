


// let isClicked = false;


function handler() {
  let isClicked = false; // 변수를 전역이 아닌 함수 안에 선언.
  
  console.log(isClicked);
  return function() {
    if(isClicked) this.style.background = 'red';
    else this.style.background = 'transparent';
    
    isClicked = !isClicked;
  }
  
}


document.querySelector('.first').addEventListener('click', handler());


// isClicked = {}; => 접근 불가. 클로저로 변수 보호.