const container = document.querySelector("#container");
//take input from user and fic maxlength
const submit = document.querySelector("#submit");
submit.addEventListener("click", () => {
  const num = document.querySelector("#num").value;
  if (num <= 64) {
    console.log(num);
  } else alert("Max length is 64");
});
