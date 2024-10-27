var conditionIconMap = {
    "beans": "/items/beans.png",
}

var selectedItem = null

function load() {
    conditions = sessionStorage.getItem("conditions").split(",");
    console.log(conditions)

    render_inventory()
}

dialogues = {
    "greeting": {
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
        "text": "Thanks very much for offering to help.",
        "go_to_scene": "stairway",
        "responses": []
    },
    "thanks_for_swan": {
        "text": "What? How do you have it already?",
        "go_to_scene": "end",
        "responses": []
    }
}

function start_dialogue(first_dialogue) {

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