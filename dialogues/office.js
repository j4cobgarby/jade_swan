var dialogues = {
    "go_away": {
        "speaker": "wizard",
        "text": "Go away! For the last time I do not need maids!",
        "go_to_scene": "",
        "responses": [
            {
                "conditions": [],
                "text": "I . . . I'm . . .",
                "go_to_dialogue": "greeting"
            }
        ]
    },
    "greeting": {
        "speaker": "wizard",
        "img": "scene_images/welcome.jpg",
        "text": "Ah, Detective Knowe! Glad to see you. A terrible tragedy has occurred! My Splendiferous Pristine Jade Swan has been stolen!",
        "go_to_scene": "",
        "responses": [
            {
                "conditions": [],
                "text": "That is terrible!",
                "go_to_dialogue": "disaster"
            }
        ]
    },
    "disaster": {
        "speaker": "wizard",
        "img": "scene_images/disaster.jpg",
        "text": "This is a disaster! It has the power to cure any ailment, the power to call lightning down upon your enemies!",
        "go_to_scene": "",
        "responses": [
            {
                "conditions": [],
                "text": "That's all?",
                "go_to_dialogue": "paperweight"
            }
        ]
    },
    "paperweight": {
        "speaker": "wizard",
        "img": "scene_images/paperweight.jpg",
        "text": "Plus, without a paperweight I can't open the window without my papers blowing about!",
        "go_to_scene": "",
        "responses": [
            {
                "conditions": [],
                "text": "Aha . . .",
                "go_to_dialogue": "on_desk"
            },
        ]
    },
    "on_desk": {
        "speaker": "wizard",
        "img": "scene_images/right_here.jpg",
        "text": "It used to be right here on the desk.",
        "go_to_scene": "",
        "responses": [
            {
                "conditions": [],
                "text": "That's quite a nice desk.",
                "go_to_dialogue": "thanks_for_listening"
            }
        ]
    },
    "thanks_for_listening": {
        "speaker": "wizard",
        "img": "scene_images/thanks.jpg",
        "text": "Thanks for listening Detective, bye now. I’m sure you have matters to attend to. I fear that the Splendiferous Pristine Jade Swan is lost to us forever.",
        "go_to_scene": "",
        "responses": [
            {
                "conditions": [],
                "text": "I could search for it.",
                "go_to_dialogue": "search_for_it"
            }
        ]
    },
    "search_for_it": {
        "speaker": "wizard",
        "img": "scene_images/clues.jpg",
        "text": "Wait, search for it? I don't know how we’ll ever find it. I doubt the culprit left any clues in this room or anything like that.",
        "go_to_scene": "room",
        "responses": []
    },




    "room": {
        "speaker": "thought",
        "text": "The Wizard's office. Perhaps there are some clues around here somewhere.",
        "go_to_scene": "",
        "responses": [
            {
                "conditions": ["beans"],
                "text": "I'm done here . . .",
                "go_to_dialogue": "to_car"
            }
        ]
    },
    "to_car": {
        "speaker": "thought",
        "text": "Okay, let's get in the car and get going!",
        "go_to_scene": "car",
        "responses": []
    },




    "inspect_desk": {
        "speaker": "wizard",
        "img": "scene_images/desk.jpg",
        "text": "The culprit left this desk in an awful state. Luckily, I cleaned it up for you, Detective. (Click yellow areas to inspect them.)",
        "go_to_scene": "",
    },


    
    "find_coffee": {
        "speaker": "wizard",
        "text": "Ah yes, somebody has left these coffee beans behind.",
        "go_to_scene": "",
        "responses": [
            {
                "conditions": [],
                "text": "Five of them. Indeed.",
                "go_to_dialogue": "coffee_2"
            }
        ]
    },
    "coffee_2": {
        "speaker": "wizard",
        "text": "I used the bag to make several thousand cups of coffee, this is just what remains.",
        "go_to_scene": "",
        "responses": [
            {
                "conditions": [],
                "text": "That's a lot.",
                "go_to_dialogue": "coffee_3"
            }
        ]
    },
    "coffee_3": {
        "speaker": "wizard",
        "text": "I’m no expert, but by their smell and subtle colouring, it seems that they came from the Cafe on 289 Main Street.",
        "go_to_scene": "",
        "responses": [
            {
                "conditions": [],
                "text": "You are clearly an expert in this field.",
                "go_to_dialogue": "coffee_4"
            }
        ]
    },
    "coffee_4": {
        "speaker": "wizard",
        "text": "Or something like that. That can’t be a clue though right?",
        "go_to_scene": "room",
        "pickup": ["+beans"]
    },



    "jade_swan_comment": {
        "speaker": "wizard",
        "text": "That Jade Swan could tip the balance of the world into utter chaos if it’s not promptly returned to my desk. Put it out of your mind, Detective.",
        "go_to_scene": "",
        "responses": [
            {
                "conditions": [],
                "text": "I will try my best.",
                "go_to_dialogue": "room"
            }
        ]
    },

    "java_after_rejection": {
        "conditions": ["black_market_rejected"],
        "speaker": "java",
        "text": "He wouldn't talk to you? I could give you the secret code. But I need you to do something for me first.",
        "img": "scene_images/deal.jpg",
        "go_to_scene": "",
        "responses": [
            {
                "conditions": [],
                "text": "Uh oh... What do you have in mind?",
                "go_to_dialogue": "java_asks_for_boots"
            }
        ]
    },
    "java_asks_for_boots": {
        "conditions": [],
        "speaker": "java",
        "text": "Get me running boots. I don't run so fast, and I'd like to change that.",
        "img": "scene_images/need_shoes.jpg",
        "responses": [
            {
                "conditions": [],
                "text": "Well, if you insist.",
                "go_to_dialogue": "boots_quest_accepted"
            }
        ]
    },
    "boots_quest_accepted": {
        "conditions": [],
        "speaker": "thought",
        "text": "Quite a strange request... But I'm pretty sure I know a good shoe shop.",
        "go_to_scene": "cafe",
        "img": "scene_images/java_thumbsup.jpg",
        "responses": []
    },

    "java_has_beans": {
        "conditions": ["beans"],
        "speaker": "java",
        "text": "W-what? No, I don't know anything about those coffee beans!",
        "go_to_scene": "",
        "responses": [
            {
                "conditions": [],
                "text": "What about that coffee?",
                "go_to_dialogue": "java_has_beans_2"
            }
        ]
    },
    "java_has_beans_2": {
        "conditions": ["beans"],
        "speaker": "java",
        "text": "The coffee I’m drinking? Well… look, I’ll come clean. Ever since the shipment got hijacked, I’ve only been able to find it at the black market. I couldn’t afford a whole bag of the stuff, honest!",
        "go_to_scene": "",
        "responses": [
            {
                "conditions": [],
                "text": "Can you tell me who I can talk to about this?",
                "go_to_dialogue": "java_has_beans_3"
            }
        ]
    },
    "java_has_beans_3": {
        "conditions": ["beans"],
        "speaker": "java",
        "text": "Look, the guy running the place. He’s a real snake, that Python. But he’ll vouch for me, and he might be able to tell you where he got the stuff from too. I’ll bet that thief of yours took that jaded bird of yours, too...",
        "go_to_scene": "",
        "responses": [
            {
                "conditions": [],
                "text": "I hope you're right, that's an important artifact!",
                "go_to_dialogue": "java_has_beans_4"
            }
        ]
    },
    "java_has_beans_4": {
        "conditions": ["beans"],
        "speaker": "thought",
        "text": "So, the black market, huh? Suppose I'd ought to check it out, hopefully I can get in...",
        "go_to_scene": "cafe",
        "responses": []
    },

    "java_already_met": {
        "conditions": ["met_java"],
        "speaker": "java",
        "text": "I know you have a policy of only one mystery at a time, but after could you find out who killed all my applets?",
        "go_to_scene": "cafe",
        "responses": []
    },
    "java_first_time": {
        "conditions": [],
        "speaker": "java",
        "text": "Hi Detective. Sorry, give the coffee time to kick in. I’m tired from having to tell people that Javascript isn’t related to me.",
        "go_to_scene": "cafe",
        "pickup": ["met_java"],
        "responses": []
    },

    "inspect_inn_sign": {
        "conditions": [],
        "speaker": "thought",
        "text": "Huh... Why do they even call it an inn, when you ov... Nevermind.",
        "go_to_scene": "",
        "responses": []
    },
    "pub_window": {
        "conditions": [],
        "speaker": "ear",
        "text": "*thump thump thump*",
        "go_to_scene": "",
        "responses": []
    },

    "python_with_password_no_news": {
        "conditions": ["password", "javascript_known"],
        "speaker": "python",
        "text": "You got what you wanted. Go suck a lemon.",
        "go_to_scene": "pub",
        "responses": []
    },
    "python_with_password": {
        "conditions": ["password"],
        "speaker": "python",
        "text": "Huh, guess I misjudged you, kid.",
        "go_to_scene": "",
        "responses": [
            {"conditions": [], "text": "Sure did, pal.", "go_to_dialogue": "python_password2"}
        ]
    },
    "python_password2": {
        "conditions": [],
        "speaker": "python",
        "text": "Yeah I got the coffee. Real stuff, too. I'm no snake oil salesman, I'm known for my fine imports. Here ya go.",
        "go_to_scene": "",
        "responses": [
            {"conditions": [], "text": "Smells good. Got any info about it?", "go_to_dialogue": "python_password3"}
        ]
    },
    "python_password3": {
        "conditions": [],
        "speaker": "python",
        "text": "I'm ain't telling you who gave it me! I eat rats for breakfast.",
        "go_to_scene": "",
        "responses": [
            {"conditions": [], "text": "It says 'Illegally sourced by the Great Javascript'.", "go_to_dialogue": "python_password4"}
        ]
    },
    "python_password4": {
        "conditions": [],
        "speaker": "python",
        "text": "...",
        "go_to_scene": "",
        "responses": [
            {"conditions": [], "text": "...", "go_to_dialogue": "python_password5"}
        ]
    },
    "python_password5": {
        "conditions": [],
        "speaker": "python",
        "text": "...",
        "go_to_scene": "",
        "responses": [
            {"conditions": [], "text": "...", "go_to_dialogue": "python_password6"}
        ]
    },
    "python_password6": {
        "conditions": [],
        "speaker": "python",
        "text": "... I told him not to write that.",
        "go_to_scene": "",
        "pickup": ["+javascript_known"],
        "responses": [
            {"conditions": [], "text": "Well, well, well....", "go_to_dialogue": "back_to_pub"}
        ]
    },
    "back_to_pub": {
        "conditions": [],
        "speaker": "thought",
        "text": "So it was Javascript all along! I always knew there was something up with that guy...",
        "go_to_scene": "pub",
        "responses": []
    },
    "python_after_java": {
        "conditions": ["met_java"],
        "speaker": "python",
        "text": "You spoke to Java? I'm not buying it, kid. I mean, I usually do the other side of transactions.",
        "go_to_scene": "",
        "responses": [{
            "conditions": [], "text": "Come on, Python! Java trusts me, I promise!", "go_to_dialogue": "python_after_java2"
        }]
    },
    "python_after_java2": {
        "conditions": [],
        "speaker": "python",
        "text": "If Java really thought you were on the level, he’d give you the pass code.",
        "go_to_scene": "",
        "responses": [{
            "conditions": [], "text": "He probably just forgot, you know how he is.", "go_to_dialogue": "back_to_java"
        }]
    },
    "back_to_java": {
        "conditions": [],
        "speaker": "thought",
        "text": "Guess I've got a few more questions for ol' Java... Maybe I need to help him out with his boots.",
        "go_to_scene": "pub",
        "responses": []
    },
    "python_basis": {
        "speaker": "python",
        "text": "Beat it. I can tell you're not blackhearted enough for the Black Market.",
        "go_to_scene": "",
        "responses": [
            {
                "conditions": [],
                "text": "Uh.. I...",
                "go_to_dialogue": "python_basis2"
            }
        ]
    },
    "python_basis2": {
        "speaker": "python",
        "text": "You probably want the Gold Market; you'll find them here tomorrow.",
        "go_to_scene": "pub",
        "responses": []
    }
}
