var conditionIconMap = {
    "beans": "/items/beans.png",
    "jade_swan": "/items/swan.png",
    "beanbag": "/items/beanbag.png",
    "shoeprint": "/items/shoeprint.png",
    "shoes": "/items/shoes.png"
}

var characterMap = {
    "wizard": {
        "name": "Haskell Wizard",
        "icon": "/svg/icon_wizard.svg"
    }
}

var selectedItem = null

function load() {
    conditions = sessionStorage.getItem("conditions").split(",");
    console.log(conditions)

    render_inventory()

    if (autoDialogue != "") {
        start_dialogue(autoDialogue)
    }
}

dialogues = {
    "greeting": {
        "speaker": "wizard",
        "text": "Thank god you're here! I've lost my Jade Swan!",
        "go_to_scene": "",
        "responses": [
            {
                "conditions": [],
                "text": "I can help.",
                "go_to_dialogue": "thanks_for_offering"
            },
            {
                "conditions": ["jade_swan"],
                "text": "Here it is.",
                "go_to_dialogue": "thanks_for_swan"
            }
        ]
    },
    "thanks_for_offering": {
        "speaker": "wizard",
        "text": "Thanks very much for offering to help.",
        "go_to_scene": "stairway",
        "responses": []
    },
    "thanks_for_swan": {
        "speaker": "wizard",
        "text": "What? How do you have it already?",
        "go_to_scene": "end",
        "responses": []
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

    document.querySelector("#dialogue-speech").textContent = '"' + dialogue.text + '"'

    var buttons = document.querySelector("#dialogue-buttons")
    buttons.innerHTML = ""

    var speaker = characterMap[dialogue.speaker]
    document.getElementById("dialogue-speaker").textContent = speaker.name
    document.getElementById("speaker-icon").src = speaker.icon

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
                icon.classList.add("can-use")
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
}

function dialogueAction(resp) {
    if (resp.go_to_dialogue) {
        render_dialogue(resp.go_to_dialogue)
    }
}

function render_inventory() {
    var itemsEl = document.getElementById("items")

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