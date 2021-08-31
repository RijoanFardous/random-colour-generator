/* Generate Random Color */

function generateColour() {
    let randomNum, hexCode;
    while (true) {
        randomNum = Math.trunc(Math.random() * 16777216);
        hexCode = randomNum.toString(16);
        if (hexCode.length == 6) {
            break;
        }
    }
    hexCode = hexCode.toUpperCase();
    console.log(hexCode);

    document.body.style.backgroundColor = `#${hexCode}`;
    document.getElementById('hex-code-text').innerText = `#${hexCode}`;
}

generateColour();