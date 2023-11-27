let display = document.querySelector('[rgb]')

let hex = document.querySelector('[hex]').value.split('');

let btn = document.querySelector('[con]')

btn.addEventListener('click', convert)

function hexZero(){
    let hex = document.querySelector('[hex]').value.split('');
    if (hex[0] === 'A'){
        return 10
    } else if (hex[0] === 'B'){
        return 11
    } else if (hex[0] === 'C'){
        return 12
    } else if (hex[0] === 'D'){
        return 13
    } else if (hex[0] === 'E'){
        return 14
    } else if (hex[0] === 'F'){
        return 15
    }
}

function hexOne(){
    let hex = document.querySelector('[hex]').value.split('');
    if (hex[1] === 'A'){
        return 10
    } else if (hex[1] === 'B'){
        return 11
    } else if (hex[1] === 'C'){
        return 12
    } else if (hex[1] === 'D'){
        return 13
    } else if (hex[1] === 'E'){
        return 14
    } else if (hex[1] === 'F'){
        return 15
    } else {
        return hex[1]
    }
}

function hexTwo(){
    let hex = document.querySelector('[hex]').value.split('');
    if (hex[2] === 'A'){
        return 10
    } else if (hex[2] === 'B'){
        return 11
    } else if (hex[2] === 'C'){
        return 12
    } else if (hex[2] === 'D'){
        return 13
    } else if (hex[2] === 'E'){
        return 14
    } else if (hex[2] === 'F'){
        return 15
    } else {
        return hex[2]
    }
}

function hexThree(){
    let hex = document.querySelector('[hex]').value.split('');
    if (hex[3] === 'A'){
        return 10
    } else if (hex[3] === 'B'){
        return 11
    } else if (hex[3] === 'C'){
        return 12
    } else if (hex[3] === 'D'){
        return 13
    } else if (hex[3] === 'E'){
        return 14
    } else if (hex[3] === 'F'){
        return 15
    } else {
        return hex[3]
    }
}
function hexFour(){
    let hex = document.querySelector('[hex]').value.split('');
    if (hex[4] === 'A'){
        return 10
    } else if (hex[4] === 'B'){
        return 11
    } else if (hex[4] === 'C'){
        return 12
    } else if (hex[4] === 'D'){
        return 13
    } else if (hex[4] === 'E'){
        return 14
    } else if (hex[4] === 'F'){
        return 15
    } else {
        return hex[4]
    }
}
function hexFive (){
    let hex = document.querySelector('[hex]').value.split('');
    if (hex[5] === 'A'){
        return 10
    } else if (hex[5] === 'B'){
        return 11
    } else if (hex[5] === 'C'){
        return 12
    } else if (hex[5] === 'D'){
        return 13
    } else if (hex[5] === 'E'){
        return 14
    } else if (hex[5] === 'F'){
        return 15
    } else {
        return hex[5]
    }
}

function convert() {
    let hex = document.querySelector('[hex]').value.split('');

    let R = hexZero() * 16 + hexOne();
    let G = hex.length > 2 ? hexTwo() * 16 + hexThree() : 0;
    let B = hex.length > 4 ? hexFour() * 16 + hexFive() : 0;

    let RGB = `${R}, ${G}, ${B}`;
    console.log(RGB);
    display.value = RGB;
}


// clear button

let btn2 = document.querySelector('[clear]')

btn2.addEventListener('click', clear)

function clear (){
    document.querySelector('[rgb]').value = '';
    document.querySelector('[hex]').value = '';
}