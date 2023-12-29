const date = new Date();
/**
 * TODOS:
 * 1 - Create an HTML block for new issues with date, number, description and the buttons to close the issue
 * 2 - Create an HTML block for the input bar with the "Add" new issue button with EventListener to click in the button -> The bar must move and be always below
 * the opened issues list.
 * 3 - Create a HTML block for the closed issues with date, number, description (dashed) and the buttons to re-open the issue (optional for now)
 */

// document.body.innerHTML = markup; //Injects the markup const content into the body part of the HMTL document

// const markup =`
//     <div>
//         <ul class="list-group"></ul>
//     </div>
//     <div>
//         <button type="button" class="btn btn-success" id="addBtn">Add new issue</button>
//     </div>
// `;
// document.body.innerHTML = markup; //Injects the markup const content into the body part of the HMTL document
// <li>
// <div>
//     <h4>${issuesList.date}</h4>
//     <input type="checkout" id="${issuesList.number}" name="${issuesList.number}">
//     <label for="${issuesList.number}">${issuesList.description}</label>
// </div>
// </li>

const issueList = document.createElement("ul"); //querySelector(".lits-group");
document.body.appendChild(issueList);

const addButton = document.createElement("button"); //getElementById("addBtn");
addButton.innerHTML = '<button type="button" class="btn btn-success" id="addBtn">Add new issue</button>';
document.body.appendChild(addButton);
console.log(issueList)
console.log(addButton);
addButton.addEventListener("click", () => {
    console.log("Apertei o botao")
    const newIssue = `
        <li>
            <p>Bananada</p>
            <button type="button" class="btn btn-danger">Mark as done</button>
        </li>
    `;
     //<button type="button" class="btn btn-danger">Mark as done</button>
    issueList.insertAdjacentHTML('afterbegin', newIssue);
});

// const main = document.createElement("main");
// main.innerHTML = markup;
// document.body.appendChild(main);