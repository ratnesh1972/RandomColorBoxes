const container = document.querySelector('.container');

document.querySelector('#createBox').addEventListener('click', createBox);

document.querySelector('#reset').addEventListener('click', reset);

function createBox() {
    if (!document.querySelector('#color-box')) {
        createColorBox();
    }
    const colorBox = document.querySelector('#color-box');
    const div = document.createElement('div');
    div.classList = 'box';
    div.style.background = getRandomColor();
    colorBox.appendChild(div);
}

function reset() {
    if (document.querySelector('#color-box')) {
        document.querySelector('#color-box').remove();
    }
}

function getRandomColor() {
    const red = Math.round(Math.random() * 255 + 1);
    const green = Math.round(Math.random() * 255 + 1);
    const blue = Math.round(Math.random() * 255 + 1);

    const color = `rgb(${red},${green},${blue})`;

    return color;
}

function createColorBox() {
    const colorBox = document.createElement('div');
    colorBox.id = 'color-box';
    container.appendChild(colorBox);
}