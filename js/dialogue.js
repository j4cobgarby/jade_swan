conditions = sessionStorage.getItem("conditions").split(",");
console.log(conditions)

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