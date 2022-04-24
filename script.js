function showHide(x) {
    x.classList.toggle("change");
}

var a;
function myFunction() {
    if(a==1) {
        document.getElementById("navMenu").style.right="-500px";
        return a=0;
    }
    else {
        document.getElementById("navMenu").style.right="0";
        return a=1;
    }
}