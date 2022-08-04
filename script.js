
let screen = document.getElementById('result');

let container = document.getElementById('container');

buttons = document.querySelectorAll('button');
let screenValue = "";

for(item of buttons){
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        if(buttonText=='x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }

        else if(buttonText =='Clr'){
            screenValue = "";
            screen.value = screenValue;
        }

        else if(buttonText =='='){
            screen.value = eval(screenValue);
        }

        else if (buttonText == '<<'){
            screen.value = screen.value.slice(0,  -1);
            screenValue = screen.value;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}

 function random(start, end) {
    const number = start + ((end - start) * Math.random());
    return number;
}

const colorChange = () =>{
const bgcolor = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`;
const color = `rgb(${random(0,155)},${random(0,155)},${random(0,155)})`;
document.body.style.backgroundColor = bgcolor;
container.style.backgroundColor = color;
}
