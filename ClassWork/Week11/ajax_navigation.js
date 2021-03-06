var please_wait = null;
function open_url(url, target) {
    if (!document.getElementByID){
        return false;
    }
    if (please_wait != null) {
        document.getElementById(target).innerHTML = please_wait;
    }

    if (window.ActiveXObject) {
        link = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest) {
        link = new XMLHttpRequest();
    }
    if (link == undefined) {
        return false;
    }

    link.onreadystatechange = function() {
        response(url, target);
    }
    link.open("GET", url, true);
    link.send(null);
}

function response(url, target) {
    if (link.readyState == 4) {
        document.getElementById(target).innerHTML = (link.status == 200) ? link.responseText : "Ooops!! A broken link! Please contact the webmaster ASAP and give him the following errorcode: " + link.status;
    }
}

function set_loading_message(msg) {
    please_wait = msg;
}