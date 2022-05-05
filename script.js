let sim = 0;
let nao = 0;
function FSim(){
    sim = sim + 1;
    document.getElementById("sim").innerHTML = sim;
    document.getElementById("sim").style.width = sim+sim+"0px";
}
function FNao(){
    nao = nao + 1;
    document.getElementById("nao").innerHTML = nao;
    document.getElementById("nao").style.width = nao+nao+"0px";
}
