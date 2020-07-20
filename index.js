// async function foo(){
// 	const resp = await fetch('https://api.github.com/users')
// 	const data = await resp.json();
// 	console.log(data)
// }
// foo()import { setImg,URL,Prof } from './helpers.js';
import { imgLog } from "./main.js";

const searchInput = document.getElementById('input');
const search = document.getElementById('search');
async function api() {
    try {
      const resp = await fetch(URL);
      const data = await resp.json();
      data.map((data) => {
        imgLog(data.avatar_url, data.login);
      });
    } catch (err) {
      document.getElementById("sec2").innerHTML =
        "Error";
    }
  }
  api();
const UserApi = () => {
    const loading = document.getElementById('loading')
    loading.innerHTML = 'Loading.....'
    
    fetch(`${URL}/${searchInput.value}`)
    .then(resp => {
        console.log(resp)
        return resp.json()
    })
    .then((data) => {
        loading.innerHTML = '';
        h2.innerHTML = 'Name : ' + data.name;
        h3.innerHTML = 'Followers : ' + data.followers;
        p3.innerHTML = 'Location : ' +  data.location;
        const profGit = document.getElementById("a");
        profGit.href = data.html_url;
        profGit.innerHTML =  'Github profile : ' + data.name;
        sec1.appendChild(profGit);
        setImg('pic', `${data.avatar_url}?v=4`)
    })
    .catch(error => {
        console.log(error, 'error')
    })
};
const sec1 = document.getElementById('sec1')
search.addEventListener('click' , ( ) => {
    sec1.style.display = 'flex';
    sec2.style.display = 'none';
    UserApi()
});
searchInput.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        sec1.style.display = 'flex';
        sec2.style.display = 'none';
        UserApi()
    }
});


