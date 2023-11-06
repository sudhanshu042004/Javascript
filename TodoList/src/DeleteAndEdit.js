export function openEditorDeleteDialog(element) {
    element.innerHTML = `<dialog class="editAndDeleteDialog">
    <button class="editButton">Edit</button>
    <button class="deleteButton">Delete</button></dialog>`;
    const editAndDeleteDialog = document.querySelector(".editAndDeleteDialog");
    editAndDeleteDialog.show();
}
function EditButton () {
    const editButton = document.querySelector(".editButton");

}