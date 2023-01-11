function bindEvent(node, type, handler) {
  if(typeof node === 'string')  node = getNode(node);
  if(!(/mouseenter|click|mousemove|mouseleave/g.test(type))){ // test : 정규표현식의 True / False 를 반환하는 유틸 함수
    typeError('bindEvent 함수의 두 번째 인자는 유효한 이벤트 타입 이어야 합니다.')
  }
  node.addEventListener(type, handler);
  return () => node.removeEventListener(type, handler);
}