/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */


/* 버블링 ----------------------------------------------------------------- */

const visual = getNode('.visual');
const news = getNode('.news');
const desc = getNode('.desc');

visual.addEventListener('click', (e) => {
  let elem = e.currentTarget;
  /* console.log('target: ', e.target);
  console.log('currentTarget: ', e.currentTarget);
  console.log(this == e.currentTarget);
  console.log(this); */
  console.log('%c visual', 'background:dodgerblue;color:black');
  css('.pop', 'display', 'block');
})

getNode('.pop').addEventListener('click', () => {
  css('.pop', 'display', 'none');
})

/* news.addEventListener('click', () => {
  console.log('%c news', 'background:orange;color:black');
})

desc.addEventListener('click', (e) => {
  console.log('%c desc', 'background:hotpink;color:black');
}) */

/* 캡처링 ----------------------------------------------------------------- */