/* global gsap */
import { insertLast, xhrData, xhrPromise, jjundae, delayP, getNode, renderUserCard, changeColor, renderSpinner, renderEmptyCard, attr } from "./lib/index.js";

const userCardContainer = getNode('.user-card-inner');
/* 
xhrData.get(
  'https://jsonplaceholder.typicode.com/user/1',
  res => {
    console.log(res);
    insertLast('body', (res.address.city));
  },
  err => insertLast('body', err)
)
*/

/* 
xhrPromise.get('https://jsonplaceholder.typicode.com/users/1')
.then(res => insertLast(document.body, JSON.stringify(res)))
.catch(err => console.log(err))
 */

/* 
async function render() {
  await delayP(2000);
  let response = await jjundae.get('https://jsonplaceholder.typicode.com/users/1');
  console.log(response.data);
}

render();
 */

const rendingUserList = async () => {
  renderSpinner(userCardContainer);
  try {
    await delayP(2000);
    getNode('.loadingSpinner').remove();
    let response = await jjundae.get('http://localhost:3000/users');
    let userData = response.data;
    userData.forEach((data) => renderUserCard(userCardContainer, data));
    changeColor('.user-card');
    gsap.to(gsap.utils.toArray('.user-card'), {
      x:0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2,
    })
  }catch(err) {
    renderEmptyCard(userCardContainer);
  }
}

function deleteHandler(e) {
  let deleteButton = e.target.closest('button');
  let article = e.target.closest('article');
  if(!deleteButton || !article) return;
  let id = attr(article, 'data-index').slice(5);
  jjundae.delete(`http://localhost:3000/users/${id}`).then(() => {
    // userCardContainer.innerHTML = '';
    // rendingUserList();
    article.remove();
  })
}

userCardContainer.addEventListener('click', deleteHandler)

rendingUserList();

