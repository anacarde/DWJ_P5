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

    actInfMsg: function(div, className, msg) {
        var infMsg = document.createElement("p");
        infMsg.id = "act-inf-msg";
        infMsg.classList.add(className);
        infMsg.textContent = msg;
        div.appendChild(infMsg);
        setTimeout(function() {
            div.removeChild(infMsg)
        }, 2000);
    }
}

/*
getQueryParams()

*/