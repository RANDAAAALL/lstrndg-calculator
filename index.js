let b1 = document.querySelector(`#button1`);
let b2 = document.querySelector(`#button2`);
let b3 = document.querySelector(`#button3`);

let value = 0


b1.onclick = () => {
    value -= 1
    document.querySelector(`#text`).innerHTML = value;
}
b2.onclick = () => {
  value = 0
  document.querySelector(`#text`).innerHTML = value;
}
b3.onclick = () => {
  value += 1
  document.querySelector(`#text`).innerHTML = value;
}
document.querySelector(`#button0`).onclick = () => {
  value += 5
  document.querySelector(`#text`).innerHTML = value;
}
document.querySelector(`#button4`).onclick = () => {
  value -= 5
  document.querySelector(`#text`).innerHTML = value;
}
document.querySelector(`#button5`).onclick = () => {
  value *= 2
  document.querySelector(`#text`).innerHTML = value;
}
document.querySelector(`#button6`).onclick = () => {
  value /= 2
  document.querySelector(`#text`).innerHTML = value;
}