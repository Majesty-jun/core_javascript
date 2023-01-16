export function copy(text) {
  // promise 리턴
  return navigator.clipboard.writeText(text);
}
