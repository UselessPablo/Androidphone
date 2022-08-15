/* DialPad by Anthony Bernard*/

let btns = document.getElementById("btns");
let showPicked = document.getElementById("showPicked");
let buttonNumbers = [
  [1, '<i class="material-icons" style="font-size: 11px">&#xe0d9;</i>'],
  [2, "ABC"],
  [3, "DEF"],
  [4, "GHI"],
  [5, "JKL"],
  [6, "MNO"],
  [7, "PQRS"],
  [8, "TUV"],
  [9, "WXYZ"],
  ["*", ""],
  [0, ""],
  ["#", ""]
];
let picked = [];
let deleteNums = document.getElementById("delete");
let call = document.getElementById("call");
let end = document.getElementById("end");

buttonNumbers.forEach(numbers => {
  btns.innerHTML += `
    <button onclick="addNumbers(this.value)" class="btn btn-light m-1" style="width:5rem; hieght:10rem;" type="button" value="${
      numbers[0]
    }">${numbers[0]}<p>${numbers[1]}</p></button>`;
});

function addNumbers(numbers) {
  picked.push(numbers);
  showPicked.innerHTML = picked.join("");
}

deleteNums.addEventListener("click", () => {
  picked.pop();
  showPicked.innerHTML = picked.join("");
  console.log(picked);
});

call.addEventListener("click", () => {
  showPicked.innerHTML = `Calling ${picked.join("")}`;
  picked = [];
});

end.addEventListener("click", () => {
  showPicked.innerHTML = "Call Ended";
  picked = [];
});
