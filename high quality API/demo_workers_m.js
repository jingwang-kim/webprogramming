
var i=0;

function timedCount() {
    if(i==60) {
	i=0;
    }
    postMessage(" | minute = "+i );
    i=i+1;
    setTimeout("timedCount()", 60000);
}

timedCount();