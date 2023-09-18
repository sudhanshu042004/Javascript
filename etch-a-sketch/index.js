const container = document.querySelector("#container");
//take input from user and set maxlength
const submit = document.querySelector("#submit");
const inputdiv = document.querySelector(".inputDiv");
const discoBtn = document.querySelector(".disco");
const rgbBtn = document.querySelector(".rgb");
const colorReset = document.querySelector(".resetColor");
const resetBtn = document.querySelector(".reset");
const darken = document.querySelector(".darken");
let resetCount = 0;
let colorOpacity = 0.1;
let Disco = false;
let rgb = false;
let dark = false;

submit.addEventListener("click", () => {
  resetCount = ++resetCount;

  resetBtn.addEventListener("click", () => {
    window.location.reload();
  });

  darken.addEventListener("click", () => {
    Discoisco = false;
    rgb = false;
    dark = true;
  });
  discoBtn.addEventListener("click", () => {
    Disco = true;
    rgb = false;
  });
  rgbBtn.addEventListener("click", () => {
    Disco = false;
    dark=false;
    rgb = true;
  });
  colorReset.addEventListener("click", () => {
    Disco = false;
    dark=false;
    rgb = false;
  });
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
        
        if (Disco == 0 && rgb == 0 && dark == 0) {
          // color when disco and rgb false
          inDiv.style.backgroundColor = "hsl(213, 19%, 28%)";
        }

        if (Disco) {
          setInterval(() => {
            inDiv.style.backgroundColor = "hsl(213, 19%, 28%)";
            let colorValue = Math.floor(Math.random() * 360);
            let color = `hsl( ${colorValue}, 100%, 50% )`;
            inDiv.style.backgroundColor = color;
          }, 1);
        }
        if (rgb) {
          setTimeout(() => {
            let colorValue = Math.floor(Math.random() * 360);
            let color = `hsl( ${colorValue}, 100%, 50% )`;
            inDiv.style.backgroundColor = color;
          }, 1);
        }
        if (dark) {
          inDiv.addEventListener("click", () => {
            inDiv.style.backgroundColor = `hsla(213, 19%, 28%,${colorOpacity})`;
            colorOpacity += 0.1;
            setTimeout(() => {
              console.log("working");
              inDiv.style.backgroundColor = "white";
            }, 5000);
          });
          inDiv.addEventListener("mouseleave",()=>{
            colorOpacity=0.1;
          })
        }
      });
    }
  } else {
    alert("Max length is 64");
    window.location.reload();
  }
});
