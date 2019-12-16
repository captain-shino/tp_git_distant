function changer (){
    document.querySelector('button').onclick = function () {
        document.querySelector('p').style.fontWeight = 'bold';
        }
}

window.onload = function () {
    this.changer();
}