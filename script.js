/**
 * TODOS:
 * 1 - Create an HTML block for new issues with date, number, description and the buttons to close the issue
 * 2 - Create an HTML block for the input bar with the "Add" new issue button with EventListener to click in the button -> The bar must move and be always below
 * the opened issues list.
 * 3 - Create a HTML block for the closed issues with date, number, description (dashed) and the buttons to re-open the issue (optional for now)
 */

let openIssues = [];
let closedIssues = [];
const issueList = document.createElement("ul");
document.body.appendChild(issueList);
const newInput = document.createElement("input");   // ---> This can be the class.description\
newInput.setAttribute("placeholder", "Insert a new issue");
document.body.appendChild(newInput);
const addButton = document.createElement("button");
addButton.innerHTML = '<button type="button" class="btn btn-success" id="addBtn">Add new issue</button>';
document.body.appendChild(addButton);
addButton.addEventListener("click", () => {
    console.log("Apertei o botao")
    const newIssue = `
        <li>
            <div>
            <small>${(new Date()).toLocaleDateString('en-US')}</small>
            ${newInput.value}
            <button type="button" class="btn btn-danger">Mark as done</button>
            </div>
        </li>
    `;
    openIssues.unshift(newIssue); //---> This should probably be a method inside the Issue class
    newInput.value = "";
    console.log(openIssues);
    issueList.insertAdjacentHTML('beforeend', newIssue);
});
