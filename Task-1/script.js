let minute = document.querySelector("#min");
let second = document.querySelector("#sec");
let typing = document.querySelector("#typing");
let textt = document.querySelector("#text");
let btn = document.querySelector("button");
let error = document.querySelector("#errr");
let accuracy = document.querySelector("#acur");

let min = 0;
let sec = 0;
let acc = 0;
let err = 0;
let timer = 0;

btn.addEventListener("click", function () {
  if (timer) {
    clearInterval(timer);
    timer = 0;
    btn.innerText = "Start";
  } else {
    timer = setInterval(() => {
      sec++;
      if (sec > 59) {
        sec = 0;
        min++;
      }
      second.innerText = sec;
      minute.innerText = min;
    }, 1000);
    btn.innerText = "Pause";
  }
});

typing.addEventListener("input", function () {
  findAccuracy();
  findError();
});

function findError() {
  let text = textt.innerText.trim();
  let typed = typing.value.trim();

  let typeWord = typed.split(" ");
  let textWord = text.split(" ");

  err = 0;
  for (let i = 0; i < typeWord.length; i++) {
    if (textWord[i] !== typeWord[i]) {
      err++;
    }
  }
  error.innerText = err;
}

function findAccuracy() {
  let typed = typing.value.trim();
  let text = textt.innerText.trim();

  let typeWord = typed.split(" ");
  let textWord = text.split(" ");

  if (typeWord.length == 0) {
    acc = 0;
  } else {
    let correct = 0;
    for (let i = 0; i < typeWord.length; i++) {
      if (textWord[i] === typeWord[i]) {
        correct++;
      }
    }
    acc = Math.round((correct / typeWord.length) * 100);
  }
  accuracy.innerText = `${acc} %`;
}