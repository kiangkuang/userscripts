// ==UserScript==
// @name         PDS Save to Local Storage
// @namespace    https://github.com/kiangkuang
// @version      0.1
// @description  Saves all input and textarea values to localStorage!
// @homepage     https://github.com/kiangkuang/userscripts
// @supportURL   https://github.com/kiangkuang/userscripts/issues
// @updateURL    https://github.com/kiangkuang/userscripts/raw/master/PdsLocalStorage.user.js
// @downloadURL  https://github.com/kiangkuang/userscripts/raw/master/PdsLocalStorage.user.js
// @author       Kiang Kuang
// @match        http://tw-pds.coreop.net/Promote/CreateApplicationForm?PromoteToJobGrade=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function save() {
        var answers = [...document.querySelectorAll("textarea, input:not([hidden=hidden]):not([type=file])")]
        .reduce((ans, x) => {
            if (x.id) {
                if (x.type === "checkbox" || x.type === "radio") {
                    ans[x.id] = x.checked
                } else {
                    ans[x.id] = x.value
                }
            }
            return ans
        }, {});

        var autoSave = JSON.parse(localStorage.getItem("autoSave") || "{}");
        autoSave[window.location.href] = answers;
        localStorage.setItem("autoSave", JSON.stringify(autoSave))
    }

    function load() {
        var autoSave = JSON.parse(localStorage.getItem("autoSave") || "{}");

        if (autoSave[window.location.href]) {
            Object.keys(autoSave[window.location.href]).forEach(id => {
                var x = document.querySelector("#" + id);

                if (x.type === "checkbox" || x.type === "radio") {
                    x.checked = autoSave[window.location.href][id]
                } else {
                    x.value = autoSave[window.location.href][id]
                }
            })
        } else {
            alert("No save found for this page")
        }
    }

    function createButton(text, fn) {
        var btn = document.createElement("button");
        btn.append(text);
        btn.className = "btn btn-info mx-1"
        btn.onclick = function() {
            fn();
        }
        return btn
    }

    function inject() {
        var container = document.createElement("div");
        container.style = "text-align: center;";

        var saveBtn = createButton("Save to localStorage", save)
        var loadBtn = createButton("Load to localStorage", load)

        container.appendChild(saveBtn)
        container.appendChild(loadBtn)
        document.querySelector(".pas-container").appendChild(container)
    }

    inject();
})();
