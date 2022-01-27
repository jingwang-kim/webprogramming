
var i=0;

function timedCount() {
    if(i==24) {
	i=0;
    }
    postMessage("hour = " +i );
    i=i+1;
    setTimeout("timedCount()", 3600000);
}

timedCount();

