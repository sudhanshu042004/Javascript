const container = document.querySelector("#container");
//take input from user and set maxlength
const submit = document.querySelector("#submit");
const inputdiv = document.querySelector(".inputDiv");
let resetCount = 0;
let Disco = false;
let vibgyor = true;

submit.addEventListener("click", () => {
  resetCount = ++resetCount;
  var num = document.querySelector("#num").value;
  if (resetCount >= 2) {
    container.innerHTML = "";
  }
  if (num <= 64) {
    for (i = 1; i <= num * num; i++) {
      let height = 500 / num;
      height = height + "px";
      let width = 500 / num;
      width = width + "px";

      const inDiv = document.createElement("div");
      inDiv.classList.add("draw");
      inDiv.style.height = height;
      inDiv.style.width = width;
      container.appendChild(inDiv);
      inDiv.addEventListener("mouseover", () => {
        if (Disco) {
          setInterval(() => {
            inDiv.style.backgroundColor = "hsl(213, 19%, 28%)";
        let colorValue = Math.floor(Math.random() * 360);
        let color = `hsl( ${colorValue}, 100%, 50% )`;
          inDiv.style.backgroundColor = color;
          }, 1);
        }
      });
    }
  } else {
    alert("Max length is 64");
    window.location.reload();
  }
});
