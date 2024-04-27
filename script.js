var input = document.querySelector(".input");

function add(num) {
  input.value += num;
}

function result() {
  if (input.value == "") {
    input.innerHTML = "";
  } else {
    input.value = eval(input.value);
  }
}

function reset() {
  input.value = "";
}

