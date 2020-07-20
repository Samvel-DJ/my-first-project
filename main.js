  
export const setImg = (id , imgSrc) => {
    document.getElementById(id).src = imgSrc  
}
export const URL = ('https://api.github.com/users')
export const Prof = ('https://github.com')
export const imgLog = (imgCrs, logName) => {
    const img = document.createElement("img");
    img.src = imgCrs;
    const imgC = document.createElement("div");
    imgC.classList.add("img");
    img.style.width = "100%";
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
  