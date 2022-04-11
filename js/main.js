
let point=document.getElementById('point');

function decrease(){
    let num=point.textContent;
    num--;
    point.textContent=num;
}
function reset(){
    point.textContent=0;
}
function increase(){
    let num=point.textContent;
    num++;
    point.textContent=num;
}