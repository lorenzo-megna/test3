window.onload = test;

function test(){
    document.getElementById('title').onmouseover = changeColor;
    document.getElementById('title').onmouseleave = primaryColor;
}

function changeColor(){
    document.getElementById('title').style.color = "orange";
    document.getElementById('title').style.fontFamily = "Arial";
}

function primaryColor(){
    document.getElementById('title').style.color = "white";
    document.getElementById('title').style.fontFamily = "Times New Roman";
    
}
