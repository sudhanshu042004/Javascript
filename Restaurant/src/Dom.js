const Content = document.querySelector("#content");

function DomManupulation() {
    Content.innerHTML = ` <div class="nav">
    <div class="nameDiv">食べて寝る</div>
    <ul>
      <li class="homeDiv">home</li>
      <li class="menuDiv">menu</li>
      <li class="contactDiv">contact</li>
    </ul>
    `;
};
export default DomManupulation;