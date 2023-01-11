const insertBefore = (node, text) => {
  if(typeof node === 'string') node = getNode(node);
  if(node.nodeType !== document.ELEMENT_NODE) typeError('insertBefore 함수의 첫 번째 인자는 Element 노드여야 합니다.')
  node.insertAdjacentHTML('beforebegin', text);
}

const insertFirst = (node, text) => {
  if(typeof node === 'string') node = getNode(node);
  if(node.nodeType !== document.ELEMENT_NODE) typeError('insertFirst 함수의 첫 번째 인자는 Element 노드여야 합니다.')
  node.insertAdjacentHTML('afterbegin', text);
}

const insertLast = (node, text) => {
  if(typeof node === 'string') node = getNode(node);
  if(node.nodeType !== document.ELEMENT_NODE) typeError('insertLast 함수의 첫 번째 인자는 Element 노드여야 합니다.')
  node.insertAdjacentHTML('beforeend', text);
}

const insertAfter = (node, text) => {
  if(typeof node === 'string') node = getNode(node);
  if(node.nodeType !== document.ELEMENT_NODE) typeError('insertAfter 함수의 첫 번째 인자는 Element 노드여야 합니다.')
  node.insertAdjacentHTML('afterend', text);
}