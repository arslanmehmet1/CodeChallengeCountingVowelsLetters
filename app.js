//? Selectors

const input = document.querySelector(".form-control");
const button = document.querySelector(".btn");
const result = document.querySelector(".second");

//? button event handler
button.addEventListener("click", () => {
  if (!input.value) {
    alert("Please write a sentence");
  } else {
    const vowelArr = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];
    const inputArr = input.value.toLowerCase().split("");
    let counter = 0;

    for (let letter of inputArr) {
      vowelArr.includes(letter) && counter++;
    }

    result.innerHTML = `<p>There is/are <span style="font-weight:600">"${counter}"</span> vowel letters in the <span style="font-weight:600"=>"${input.value}"</span>sentence </p>`;

    input.addEventListener("focus", () => {
      input.value = "";
    });
  }
});

window.addEventListener("load", () => {
  input.focus();
});
