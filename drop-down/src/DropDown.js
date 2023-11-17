export function DropDown (button,content,array) {
    button.addEventListener("click",()=>{
        content.style.display = (content.style.display === 'block') ? 'none' : 'block';
        if(content.style.display === 'block' && !content.firstChild){
        array.forEach(element => {
            const option = document.createElement('a');
        option.classList.add('option');
        option.innerHTML = element;
        content.appendChild(option);
        option.href = "#";
        });
        close(content);
    }
    })
}
function close(Target) {
    Target.addEventListener("click", () => {
        Target.style.display = 'none';
        while (Target.firstChild) {
            Target.removeChild(Target.firstChild);
        }
    });
}
