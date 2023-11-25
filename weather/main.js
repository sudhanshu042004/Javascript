// const button = document.querySelector("button");
// const img = document.querySelector('img');
// const input = document.querySelector('input');
// let GifKey = import.meta.env.VITE_API_KEY;
// async function gifData () {
//   let value = input.value;
//   if(value==""){
//     value="below";
//   }
//   try{
//   const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${GifKey}&s=${value}`, { mode: 'cors' })
//   const imgdata = await response.json();
//   return imgdata;
//   } catch(err){
//     console.error(err);
//   }
// }
// button.addEventListener('click',async()=>{
//   const result = await gifData();
//   img.src= result.data.images.original.url;
// });
const Dialog = document.querySelector('dialog');
Dialog.innerHTML=`<input class="location-input"></input><button class="submit-btn">Sumbit</button>`;
const submitBtn = document.querySelector('.submit-btn');
Dialog.showModal();
submitBtn.addEventListener('click',()=>{
  Dialog.close();
  Dialog.innerHTML="";
})