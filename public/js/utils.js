var Utils = {

    ajaxGet: function(url, callback) {
        var req = new XMLHttpRequest();
        req.open("GET", url);
        req.addEventListener("load", function() {
            if (req.status >= 200 && req.status < 400) {
               callback(req.responseText);
            } else {
               console.error(req.status + " " + req.statusText + " " + url);
            }
        });
        req.addEventListener("error", function() {
            console.error("Erreur réseau avec l'URL " + url);
        });

        req.send(null);
    },

    inpErrMsg: function(div, msgId, msgClass, msg) {
        var errMsg = document.createElement("p");
        errMsg.classList.add(msgClass);
        errMsg.id = msgId;
        errMsg.textContent = msg;
        div.appendChild(errMsg);
    },

    actInfMsg: function(div, className, msg) {
        var infMsg = document.createElement("p");
        infMsg.id = "act-inf-msg";
        infMsg.classList.add(className);
        infMsg.textContent = msg;
        div.appendChild(infMsg);
        setTimeout(function() {
            div.removeChild(infMsg)
        }, 2000);
    },

    rmvAndAddScript: function(div, id, url) {
        if (document.getElementById(id) != null) {
            div.removeChild(document.getElementById(id));
        }
        var script = document.createElement('script');
        script.id = id;
        script.setAttribute('src', url);
        div.appendChild(script);
    }
}