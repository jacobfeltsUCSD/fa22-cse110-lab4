let d = new Date();
let time = d.toLocaleDateString();
let timeTo;

var runs = 3;
var n = 0;
function timer() {
    if (n < runs) {
        n++;
        console.log(time);
        timeTo = setTimeout(timer, 1000);
    }
    else return;
}

timer();