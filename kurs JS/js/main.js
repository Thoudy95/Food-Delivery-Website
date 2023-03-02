

const sizeUp = document.querySelector('.sizeUp');
const sizeDown = document.querySelector('.sizeDown');
const colorBtn = document.querySelector('.color');
const p = document.querySelector('p');

let fontSize = 36

const fontChange = () => {
    fontSize += 5
    p.style.fontSize = fontSize + 'px'
}

const fontChangeMinus = () => {
    
    if(fontSize <= 21) {
        return
    }
    
    fontSize -= 5
    p.style.fontSize = fontSize + 'px'
}

const colorChange = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    p.style.color = `rgb(${r},${g},${b})`
}

sizeUp.addEventListener('click', fontChange)
sizeDown.addEventListener('click', fontChangeMinus)
colorBtn.addEventListener('click', colorChange)

filename = "system.php"
console.log(filename.split('.').pop());

