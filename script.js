var input = document.querySelector(".input");

function add(val) {
  input.value += val;
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

