var conditionIconMap = {
    "beans": "/items/beans.png",
    "jade_swan": "/items/swan.png",
    "beanbag": "/items/beanbag.png",
    "shoeprint": "/items/shoeprint.png",
    "shoes": "/items/shoes.png",
    "maid": "/items/maid.png"
}

var characterMap = {
    "wizard": {
        "name": "Haskell Wizard",
        "icon": "/icons/hat.png"
    }
}

var selectedItem = null

var intervals = []

function load() {
    conditions = sessionStorage.getItem("conditions").split(",");
    console.log(conditions)

    render_inventory()

    if (autoDialogue != "") {
        start_dialogue(autoDialogue)
    }
}

function start_dialogue(first_dialogue) {
    render_dialogue(first_dialogue)    
}

function render_dialogue(dialogueName) {
    console.log("rendering dialogue", dialogueName)

    var dialogue = dialogues[dialogueName]
    if (!dialogue) {
        console.log("not found")
        return
    }

    document.querySelector("#dialogue-box").classList.remove("hidden")

    var buttons = document.querySelector("#dialogue-buttons")
    buttons.innerHTML = ""

    var speaker = characterMap[dialogue.speaker]
    document.getElementById("dialogue-speaker").textContent = speaker.name
    document.getElementById("speaker-icon").src = speaker.icon

    if (dialogue.img) {
        document.querySelector("img.game").src = "/" + dialogue.img
    }

    displaySpeech('"' + dialogue.text + '"', () => {
        if (dialogue.pickup) {
            for (var p of dialogue.pickup) {
                var op = p[0]
                var item = p.substring(1)
    
                if (op == "+") {
                    var idx = conditions.indexOf(item)
                    if (idx < 0) {
                        conditions.push(item)
                    }
                } else if (op == "-") {
                    var idx = conditions.indexOf(item)
                    if (idx > -1) {
                        conditions.splice(idx, 1)
                    }
                } else {
                    console.error("wrong op:", op, "in pickup", p)
                }
            }
    
    
            console.log("now conditions are", conditions)
    
            sessionStorage.setItem("conditions",
                conditions.reduce((a, b) => a + ',' + b, "").substring(1))
    
            render_inventory()
        }
    
        if (dialogue.go_to_scene) {
            var button = document.createElement("button")
            button.textContent = "Continue . . ."
            button.classList.add("new-scene")
            button.onclick = () => {
                window.location.href = "/scene/" + dialogue.go_to_scene + ".html"
            }
            buttons.appendChild(button)
        } else {
            document.querySelectorAll("img.item").forEach(i => i.classList.remove("can-use"))
    
            for (var response of dialogue.responses) {
                var validResponse = true
    
                for (var condition of response.conditions) {
                    if (!conditions.includes(condition)) {
                        validResponse = false
                    }
    
                    var icon = document.querySelector("img[item=" + condition + "]")
                    if (icon) icon.classList.add("can-use")
                }
    
                if (!validResponse) continue
                const thisResponse = response
    
                var button = document.createElement("button")
                button.textContent = response.text
                button.onclick = () => dialogueAction(thisResponse)
                if (response.conditions.length > 0) {
                    button.classList.add("can-use")
                }
                buttons.appendChild(button)
            }
        }
    })
}

function displaySpeech(text, andthen=null) {
    intervals.forEach(window.clearInterval)

    var el = document.getElementById("dialogue-speech")
    el.textContent = ". . ."

    intervals.push(window.setTimeout(
        () => {
            var words = text.split("")
            el.textContent = ""
            displayWords(words, andthen)
        }, 500
    ))
}

function displayWords(words, andthen=null) {
    if (words.length == 0) {
        if (andthen) {
            intervals.push(window.setTimeout(andthen, 350))
        }
        return
    }

    var el = document.getElementById("dialogue-speech")
    el.textContent += words[0]

    intervals.push(window.setTimeout(
        () => {
            displayWords(words.slice(1), andthen)
        },
        [".", "!", ","].includes(words[0]) ? 300 : 10
    ))
}

function dialogueAction(resp) {
    if (resp.go_to_dialogue) {
        render_dialogue(resp.go_to_dialogue)
    }
}

function render_inventory() {
    var itemsEl = document.getElementById("items")
    itemsEl.innerHTML = ""

    for (const cond of conditions) {
        if (conditionIconMap.hasOwnProperty(cond)) {
            const theCond = cond

            var icon = document.createElement("img")
            icon.classList.add("item")
            icon.setAttribute("item", theCond)
            icon.src = conditionIconMap[cond]
            icon.onclick = () => select_item(theCond)
            itemsEl.appendChild(icon)
        }
    }
}

function select_item(name) {
    document.querySelectorAll("img.item")
        .forEach(i => i.classList.remove("selected"))

    if (selectedItem != name) {
        selectedItem = name

        var icon = document.querySelector("img.item[item=" + name + "]")
        icon.classList.add("selected")
    } else {
        selectedItem = null
    }
}