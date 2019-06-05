let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let bgColor = document.getElementById("bgColor");
let outputRed = document.getElementById("outputRed");
let outputGreen = document.getElementById("outputGreen");
let outputBlue = document.getElementById("outputBlue");



outputRed.innerHTML = red.value;
outputGreen.innerHTML = green.value;
outputBlue.innerHTML = blue.value;
// bgColor.innerHTML = fullColorHex(red.value,green.value,blue.value)



red.oninput = function () {
  outputRed.innerHTML = this.value;

  document.body.style.backgroundColor = 'rgb(' + outputRed.innerHTML + ',' + outputGreen.innerHTML + ',' + outputBlue.innerHTML + ')';

  bgColor.innerHTML = "#" + fullColorHex(outputRed.innerHTML, outputGreen.innerHTML, outputBlue.innerHTML)
  bgColor.style.backgroundColor = 'rgb(' + outputRed.innerHTML * 1.3 + ',' + outputGreen.innerHTML * 1.3 + ',' + outputBlue.innerHTML * 1.3 + ')'
}

green.oninput = function () {
  outputGreen.innerHTML = this.value;

  document.body.style.backgroundColor = 'rgb(' + outputRed.innerHTML + ',' + outputGreen.innerHTML + ',' + outputBlue.innerHTML + ')';

  bgColor.innerHTML = "#" + fullColorHex(outputRed.innerHTML, outputGreen.innerHTML, outputBlue.innerHTML)
  bgColor.style.backgroundColor = 'rgb(' + outputRed.innerHTML * 1.3 + ',' + outputGreen.innerHTML * 1.3 + ',' + outputBlue.innerHTML * 1.3 + ')'
}

blue.oninput = function () {
  outputBlue.innerHTML = this.value;
  document.body.style.backgroundColor = 'rgb(' + outputRed.innerHTML + ',' + outputGreen.innerHTML + ',' + outputBlue.innerHTML + ')';

  bgColor.innerHTML = "#" + fullColorHex(outputRed.innerHTML, outputGreen.innerHTML, outputBlue.innerHTML)

  bgColor.style.backgroundColor = 'rgb(' + outputRed.innerHTML * 1.3 + ',' + outputGreen.innerHTML * 1.3 + ',' + outputBlue.innerHTML * 1.3 + ')'

}

let rgbToHex = function (rgb) {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};

let fullColorHex = function (r, g, b) {
  let red = rgbToHex(r);
  let green = rgbToHex(g);
  let blue = rgbToHex(b);
  return red + green + blue;
};

console.log("#" + fullColorHex(red.value, green.value, blue.value))
bgColor.innerHTML = "#" + fullColorHex(red.value, green.value, blue.value)