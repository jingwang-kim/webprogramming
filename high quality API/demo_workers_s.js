
var i=0;

function timedCount() {
    if(i==60) {
	i=0;
    }
    postMessage(" | second = "+i);
    i=i+1;
    setTimeout("timedCount()", 1000);
}

timedCount();