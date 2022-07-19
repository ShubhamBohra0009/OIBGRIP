function getAndupdate() {
  tit = document.getElementById("title").value;
  desc = document.getElementById("description").value;

  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    itemJsonArray.push([tit, desc]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonStr);
    itemJsonArray.push([tit, desc]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  }
  update();
}
function update() {
  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonStr);
  }
  let tableBody = document.getElementById("tableBody");
  let str = ""; //blank string
  itemJsonArray.forEach((element, index) => {
    str += `
          <tr>
          <th scope="row">${index + 1}</th>
          <td>${element[0]}</td>
          <td>${element[1]}</td>
          <td><button class="btn btn-primary btn-sm" onclick="deleted(${index})">Delete</button></td>
        </tr>`;
  });
  tableBody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", getAndupdate);
update();

function deleted(itemIndex) {
  itemJsonArrayStr = localStorage.getItem("itemsJson");
  itemJsonArray = JSON.parse(itemJsonArrayStr);
  itemJsonArray.splice(itemIndex, 1);
  localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  update();
}
function cleared() {
  if (confirm("Do you really want to clear the list?")) {
    localStorage.clear();
    update();
  }
}
