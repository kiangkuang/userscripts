// ==UserScript==
// @name         Racing Accord Web Cluster Update
// @namespace    https://github.com/kiangkuang
// @version      0.2
// @description  Edits webcluster.config for you!
// @homepage     https://github.com/kiangkuang/userscripts
// @supportURL   https://github.com/kiangkuang/userscripts/issues
// @updateURL    https://github.com/kiangkuang/userscripts/raw/master/RacingAccordWebClusterUpdate.user.js
// @downloadURL  https://github.com/kiangkuang/userscripts/raw/master/RacingAccordWebClusterUpdate.user.js
// @author       Kiang Kuang
// @match        http://accord.coreop.net/web_root/restricted/config-req-release.aspx
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/xml-js@1.6.11/dist/xml-js.min.js
// ==/UserScript==

(function() {
    "use strict";

    var wo = "UjQ5ODktMQ==";
    var desktop = "Q2VudGF1cg==";
    var mobile = "Q2hpcm9u";
    var path = "c2JvYmV0LmEucGxheWVyLndlYmNsdXN0ZXIuU2l0ZS50dy5jb25maWcud2ViY2x1c3Rlci1jb25maWc";
    var conf = "aHR0cHM6Ly9pcm9ubWFuLmF0bGFzc2lhbi5uZXQvd2lraS9zcGFjZXMvcmFjaW5nL3BhZ2VzLzcyNjIzNzkyNC9VcGRhdGUrQ2VudGF1citDaGlyb24rV2ViK0NsdXN0ZXI="

    document.getElementById("sel_WorkOrder").value = atob(wo);

    var explorer = document.getElementById("explorer");
    explorer.onload = () => {
        explorer.contentWindow.SelectFile(atob(path));

        detect(document.getElementById("configContent"), atob(desktop));
        detect(document.getElementById("configContent"), atob(mobile));

        var div = document.createElement("div");
        div.style.display = "flex";
        div.appendChild(createProjectRadio(atob(desktop)));
        div.appendChild(createProjectRadio(atob(mobile)));

        var link = document.createElement("a");
        link.href = atob(conf);
        link.target = "_blank";
        link.textContent = "Confluence";

        var span = document.createElement("span");
        span.appendChild(document.createTextNode("Manual Tool: "))
        span.appendChild(link);

        var controls = document.getElementById("addConfig").parentNode;
        controls.appendChild(div);
        controls.appendChild(span);
    };
})();

function createProjectRadio(project) {
    var span = document.createElement("span");
    span.textContent = `${project}: `;

    var radioA = createRadio(project, "A", "B");
    var radioB = createRadio(project, "B", "A");

    var div = document.createElement("div");
    div.style.marginRight = "20px";
    div.appendChild(span);
    div.appendChild(radioA);
    div.appendChild(radioB);
    return div;
}

function createRadio(project, serverEnable, serverDisable) {
    var input = document.createElement("input");
    input.type = "radio";
    input.name = `${project}`;
    input.id = `${project}${serverEnable}`;
    input.value = `${project} ${serverEnable}`;
    input.onchange = () => onChange(project, serverEnable, serverDisable);

    var label = document.createElement("label");
    label.appendChild(input);
    label.appendChild(document.createTextNode(serverEnable));
    return label;
}

function onChange(project, serverEnable, serverDisable) {
    console.log(`${project} ${serverEnable} enable\n${project} ${serverDisable} disable`);

    var source = document.getElementById("configContent").value;

    source = process(source, `${project}${serverEnable}`);
    source = process(source, `${project}${serverDisable}`);

    document.getElementById("configContent").value = source;
}

function process(source, radioId) {
    var radio = document.getElementById(radioId);

    var lines = source.split("\n");
    var targetLine = lines.findIndex(line => line.includes(radio.value)) + 1;
    if (targetLine === 0) return source;

    var targetText = lines[targetLine];

    if (radio.checked) {
        lines[targetLine] = uncomment(targetText);
    } else {
        lines[targetLine] = comment(targetText);
    }

    return lines.join("\n");
}

function uncomment(targetText) {
    return targetText.replace(/(\s*)<!-- (.*) -->/, "$1$2");
}

function comment(targetText) {
    if (targetText.match(/<!--.*-->/)) {
        return targetText;
    }
    return targetText.replace(/(\s*)(.*)/, "$1<!-- $2 -->");
}

function detect(element, project) {
    setTimeout(() => {
        var xml = element.value;
        if (xml.length) {
            var config = xml2js(xml, { compact: true });
            var record = config.WEBCLUSTER.add.find(x => x._attributes.project === project.toLowerCase());
            var server = record._attributes.hostname.substr(-3, 1).toUpperCase();
            document.getElementById(`${project}${server}`).checked = true;
        } else {
            detect(element, project);
        }
    }, 1000);
}
