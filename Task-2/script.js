let dice1 = document.querySelector("#dice1");
let dice2 = document.querySelector("#dice2");
let roll1 = document.querySelector("#roll1");
let roll2 = document.querySelector("#roll2");
let showDice1 = document.querySelector("#showDice1");
let showDice2 = document.querySelector("#showDice2");
let result = document.querySelector("#result");


let dices = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

let find1 = null;
let find2 = null;
let roundCount = 0;
let player1Wins = 0;
let player2Wins = 0;
let ties = 0;

function rollDice(n) {
  let random = Math.floor(Math.random() * 6);

  if (n === 1) {
    find1 = dices[random];
    showDice1.innerText = find1;
  } else {
    find2 = dices[random];
    showDice2.innerText = find2;
  }

  if (find1 !== null && find2 !== null) {
    let index1 = dices.indexOf(find1);
    let index2 = dices.indexOf(find2);

    let roundResult = "";

    if (index1 === index2) {
      roundResult = "Match Tie";
      roundCount++;
      ties++;
    } else if (index1 > index2) {
      roundResult = "Player 1 Won";
      roundCount++;
      player1Wins++;
    } else {
      roundResult = "Player 2 Won";
      roundCount++;
      player2Wins++;
    }

    result.innerText = `Round ${roundCount} ::: ${roundResult}`;

    let row = document.querySelector("#row");
    let newRow = `
    <tr>
      <td>${find1}</td>
      <td>${find2}</td>
      <td>${roundResult}</td>
    <tr/>
    `;

    row.innerHTML = row.innerHTML + newRow;

    find1 = null;
    find2 = null;



    let final_result = document.querySelector("#final")

    if(roundCount === 5) {
      if(player1Wins > player2Wins) {
        final_result.innerText = `All over Winer is Player 1`
      } else if(player2Wins > player1Wins){
        final_result.innerText = `All over Winer is Player `
      } else {
        final_result.innerText = `--- Match Tied ---`
      }
      roll1.disabled = true;
      roll2.disabled = true;
    }


  } else {
    result.innerText = "";
  }
}