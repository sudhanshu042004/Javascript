const container = document.querySelector("#container");
//take input from user and set maxlength
const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
  var num = document.querySelector("#num").value;
  if (num <= 64) {
    for (i = 1; i <= num * num; i++) {
      let height = 500/num;
      height = height+"px";
      let width = 500/num;
      width = width+"px";
      console.log(height,width);
      const inDiv = document.createElement("div");
      inDiv.classList.add("draw");
      inDiv.style.height=height;
      inDiv.style.width=width;
      container.appendChild(inDiv);
    }
  } else alert("Max length is 64");
});
