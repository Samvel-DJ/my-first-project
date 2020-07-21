// async function foo(){
// 	const resp = await fetch('https://api.github.com/users')
// 	const data = await resp.json();
// 	console.log(data)
// }
// foo()import { setImg,URL,Prof } from './helpers.js';
const Prof = ('https://github.com')
const setImg = (id , imgSrc) => {
	document.getElementById(id).src = imgSrc  
}
	const imgLog = (imgCrs, logName) => {
		const img = document.createElement("img");
		img.src = imgCrs;
		const imgC = document.createElement("div");
		imgC.classList.add("img");
		img.style.width = "50%";
		imgC.appendChild(img);
		const login = document.createElement("div");
		login.classList.add("log");
		login.innerHTML = logName;
		const div = document.createElement("div");
		div.classList.add("div");
		div.appendChild(imgC);
		div.appendChild(login);
		document.querySelectorAll(".sec").forEach((e) => {
		  e.appendChild(div);
		});
	  };
	  

const searchInput = document.getElementById('input');
const search = document.getElementById('search');
async function api() {
    try {
      const resp = await fetch('https://api.github.com/users');
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
    
    
    fetch(`${'https://api.github.com/users'}/${searchInput.value}`)
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


