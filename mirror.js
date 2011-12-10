var interval;
var intervalTime = 5;
var firstTime = true;

function mirror() {
    var dashboard = document.getElementsByClassName('dashboard')[0];
    var contentMain = document.getElementsByClassName('content-main')[0];
    var foundDashboard = false;
    var foundContentMain = false;

    if(dashboard) {
        dashboard.style.float = "right";
        foundDashboard = true;
    }

    if(contentMain) {
        contentMain.style.float = "left";
        foundContentMain = true;
    }

    if(foundContentMain && foundDashboard) {
        window.clearInterval(interval);
    }
    else {
        if(!interval) {
            intervalTime = 25;
            interval = window.setInterval("mirror()", intervalTime);
        }

        if(intervalTime == 5) {
            window.clearInterval(interval);
            intervalTime = 25;
            interval = window.setInterval("mirror()", intervalTime);
        }
    }
}
function onHashChange(event) {
    interval = window.setInterval("mirror()", intervalTime);
}
mirror();
window.addEventListener("hashchange", onHashChange);
