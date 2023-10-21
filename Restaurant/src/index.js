import _ from 'lodash';
import './style.css';
const audio = new Audio("./assets/yooooooooooo.mp3");

import Dom from './Dom.js';
Dom();
function x(a) {
    console.log(a);
}

const homeDiv = document.querySelector(".homeDiv");
const menuDiv = document.querySelector(".menuDiv");
const contactDiv = document.querySelector(".contactDiv");
let homeShow = true;
let menuShow = false;
let contactshow = false;

const Content = document.querySelector("#content");
const BlockDiv = document.createElement("div");
BlockDiv.classList.add("blockDiv");
Content.appendChild(BlockDiv);

showTab();
homeDiv.addEventListener("click", () => {
    homeShow = true;
    menuShow = false;
    contactshow = false;
    showTab();
})
menuDiv.addEventListener("click", () => {
    homeShow = false;
    menuShow = true;
    contactshow = false;
    showTab();
})
contactDiv.addEventListener("click", () => {
    homeShow = false;
    menuShow = false;
    contactshow = true;
    showTab();
})

function showTab() {
    if (homeShow) {
        BlockDiv.innerHTML = `<div class="home">
            <div class="home-about">we pride ourselves on creating a dining experience that transcends the ordinary. Our restaurant is a haven for those who appreciate exceptional food, impeccable service, and an inviting atmosphere. Here, we invite you to explore the heart and soul of our culinary world.</div>
            
          <img src="./assets/chef.jpeg" class="chef-img" alt="">
          <div class="home-visit">!! Order online or visit us !!</div>
        </div>`
    }
    if (menuShow) {
        audio.playbackRate = 1.5;
        audio.play();

        BlockDiv.innerHTML = `<div class="menu">
        <img src="./assets/Katsuobushi.jpg" alt="">
        <img src="./assets/ramen.jpeg" alt="">
        <img src="./assets/shushi.webp" alt="">
        <img src="./assets/yakimono.jpg" alt="">
      </div>`
    }
    if(contactshow){
        BlockDiv.innerHTML=`<div class="contact">
        <div><div><i class="fas fa-phone"></i> Phone: +1 123-456-7890</div>
          <div><i class="far fa-envelope"></i> Email: <a href="mailto:info@example.com">info@example.com</a></div></div>
      </div>`
    }

}