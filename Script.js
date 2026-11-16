document.getElementById('fInput').oninput = function() {
    document.getElementById('fLabel').innerHTML = this.value;
}

document.getElementById('mInput').oninput = function() {
    document.getElementById('mLabel').innerHTML = this.value;
    document.getElementById('massLabelInside').innerHTML = this.value;
}

function startSim() {
    let f = document.getElementById('fInput').value;
    let m = document.getElementById('mInput').value;
    
    
    let a = f / m;

   
    document.getElementById('aDisplay').innerHTML = a.toFixed(2);

    let moveDistance = a * 20; 
    document.getElementById('cart').style.left = moveDistance + "px";
}

function resetSim() {
    document.getElementById('cart').style.left = "0px";
    document.getElementById('aDisplay').innerHTML = "0";
}