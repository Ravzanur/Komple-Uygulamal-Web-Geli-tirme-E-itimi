let value = 0;
const btn1 = document.querySelector("#increase");
const btn2 = document.querySelector("#decrease");
const counter = document.querySelector('#counter');
const enter = document.querySelector('#bt-enter');
const input = document.querySelector('#input');

btn1.addEventListener('click',increase);
btn2.addEventListener('click',decrease);
enter.addEventListener('click',startThisNum);

function startThisNum(e){
    value = input.value;
    counter.textContent = value;
}

function increase(){
    value++;
    if(value >= 0){
        counter.style.color = 'black';
        counter.textContent = value;
    }
    counter.textContent = value;
}
function decrease(){
    value--;
    if(value < 0){
        counter.style.color = 'red';
        counter.textContent = value;
    }else{
        counter.textContent = value;
    }
    
}

function changeColor(){
    
}
