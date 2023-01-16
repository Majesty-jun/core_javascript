/* global gsap */

import {
  getInputValue,
  getNode, 
  getRandom, 
  clearContents, 
  insertLast, 
  syntaxError, 
  isNumericString, 
  showAlert, 
  copy,
  toggleClass,
  addClass,
  removeClass
} from './lib/index.js';
import { jujeobData } from "./data/data.js";

const submit = getNode('#submit');
const resultArea = getNode('.result');

function clickSubmitHandler(e) {
  e.preventDefault();
  let name = getInputValue('#nameField');
  let list = jujeobData(name);
  let pick = list[getRandom(list.length-1)];
  if(!name) {
    showAlert(".alert-error", '잘못된 정보입니다 !', 2000);
    gsap.fromTo(resultArea, 0.01, {x:-5}, {x:5, clearProps:"x", repeat:20});
    /*  addClass(resultArea, 'shake');
    setTimeout(() => {
      removeClass(resultArea, 'shake');
    }, 1000); */
    return;
  }
  if(isNumericString(name)) {
    showAlert(".alert-error", '정확한 이름을 입력해주세요 !', 2000);
    gsap.fromTo(resultArea, 0.01, {x:-5}, {x:5, clearProps:"x", repeat:20});
    return;
  }
  clearContents(resultArea);
  insertLast(resultArea, pick);
}

function clickCopyHandler(e) {
  let text = resultArea.textContent;
  // promise 리턴 받음. then: promise가 완료되었을 때, 그리고 난 다음 콜백 함수 실행.
  copy(text).then(() => {
    showAlert('.alert-success', '클립보드 복사가 완료되었습니다.', 2000);
  })
}

submit.addEventListener('click', clickSubmitHandler);
resultArea.addEventListener('click', clickCopyHandler);



