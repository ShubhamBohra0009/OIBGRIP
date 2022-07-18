display = document.getElementById("display");
let numbtns = document.getElementsByClassName("numbtn");

for (let i = 0; i < numbtns.length; i++) {
  numbtns[i].addEventListener("click", () => {
    display.innerHTML += numbtns[i].innerHTML;
  });
}

function result() {
  let results = display.innerHTML;
  display.innerHTML = eval(results);
}
function reset() {
  display.innerHTML = null;
}
function deleted() {
  dis = display.innerHTML;
  display.innerHTML = dis.slice(0, dis.length - 1);
}
