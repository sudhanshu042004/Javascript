import { CreateProject } from "./Projects";
import { openEditorDeleteDialog } from "./DeleteAndEdit";
const Sidebar = document.querySelector(".sidebar");
let InputText = "";
let currentDialog = null;
const ProjectManage = CreateProject();


export function SidebarUpdate(element) {
    createDialog(element);
}

//add project divs
function addProjects(text) {
    if (InputText != "") {
        const project = document.createElement("div");
        project.classList.add("ProjectDiv");
        project.innerHTML = `<p>${text}</p> <button class="projectEditButton">...</button>`
        ProjectManage.pushProject(text);
        Sidebar.appendChild(project);
        DeleteAndEdit();
    }
}

// create dialog onclick button
function createDialog(element) {
    element.addEventListener("click", () => {
        // Close the previous dialog, if it exists
        if (currentDialog) {
            currentDialog.close();
            Sidebar.removeChild(currentDialog);
        }
        const SidebarDialog = document.createElement("dialog");
        SidebarDialog.classList.add("sidebarDialog");
        Sidebar.appendChild(SidebarDialog);
        SidebarDialog.innerHTML = `<label for="sidebar-input">Name of Project</label><input id="sidebar-input" type="text"><button class="close-dialog-button">Create project</button>`
        const sidebarInput = document.querySelector("#sidebar-input");
        SidebarDialog.show();
        DialogInputValue(sidebarInput); //take input from dialog
        DialogClose(SidebarDialog); //invoke close dialog function
        currentDialog = SidebarDialog;
    })
}
function DialogInputValue(element) {
    element.addEventListener("input", () => {
        if (element.value == "") { } else {
            InputText = element.value;
        }
    })
}
//remove dialog onclick 
function DialogClose(dialog) {
    const closeDialogButton = dialog.querySelector(".close-dialog-button");
    closeDialogButton.addEventListener("click", () => {
        addProjects(InputText);
        onButtonClick();
        Sidebar.removeChild(dialog); //remove child from sidebar
        // Remove the event listener after the first click
        closeDialogButton.removeEventListener("click", onButtonClick);
        currentDialog = null; //reset currenntly open dialog
    });
    function onButtonClick() {
        dialog.close();
        InputText = "";
    }
    // Add the event listener back so it's ready for the next dialog
    closeDialogButton.addEventListener("click", onButtonClick);
}

function DeleteAndEdit() {
    const projectEditButtons = document.querySelectorAll('.projectEditButton');
    const ProjectDivs = document.querySelectorAll('.ProjectDiv')
    projectEditButtons.forEach((button,index) => {
        button.addEventListener('click', () => {
            openEditorDeleteDialog(ProjectDivs[index]);
        });
    });
}