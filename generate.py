#!/usr/bin/env python3

import pygame
import sys
import json
import os
from pathlib import Path

def save_json(out_basename, img_name, shapes, auto_dialogue):
    os.makedirs("jsons", exist_ok=True)

    with open("jsons/" + out_basename + ".json", "w") as jf:
        jf.write(json.dumps({
            "img": img_name,
            "auto_dialogue": auto_dialogue,
            "shapes": shapes
        }))

def json_to_html(basename):
    dic = None
    template_text = open("template.html").read()
    os.makedirs("scenes", exist_ok=True)

    with open("jsons/" + basename + ".json", "r") as jf:
        dic = json.load(jf)

    with open("scenes/" + basename + ".html", "w") as f:
        js = "var autoDialogue = '" + dic["auto_dialogue"] + "';"

        html = "<div class='image-wrapper'>"
        html += f'<img class="game" src="/{dic["img"]}" usemap="#imgmap"><map name="imgmap">'
        for s in dic["shapes"]:
            coords = ','.join(f"{c[0]},{c[1]}" for c in s["poly"])
            if "dialogue" in s:
                html += f'<area shape="poly" coords="{coords}" href="{s["href"]}" onclick="render_dialogue(\'{s["dialogue"]}\')">'
        html += '</map>'
        html += "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1203 802'>"
        for s in dic["shapes"]:
            coords = " ".join(f"L{c[0]},{c[1]}" for c in s["poly"]) + " Z"
            coords = "M" + coords[1:]
            html += f"<path d='{coords}' stroke='#ffff0066' fill='#ffff0022' stroke-width='3' fill='transparent'></path>"
        html += "</svg>"
        html += "</div>"
        # html += f"<script>start_dialogue('{dic['auto_dialogue']}');</script>"

        f.write(template_text
                .replace("REPLACEME", html)
                .replace("REPLACEJS", js))

def gen_maps(img_name):
    img = pygame.image.load(img_name)
    img_rect = img.get_rect()

    pygame.init()
    screen = pygame.display.set_mode((img_rect.width, img_rect.height))
    clock = pygame.time.Clock()
    run = True

    auto_dialogue = input("What dialogue to play automatically? (blank for none): ")

    # Each element schema: 
    # {
    #   "poly": [
    #       [x1,y1], 
    #       [x2,y2],
    #       ...
    #   ],
    #   "name": "<identifier>"
    # }
    shapes = []
    polys = []

    while run:
        for ev in pygame.event.get():
            if ev.type == pygame.QUIT:
                run = False
                basename = Path(img_name).stem
                save_json(basename, img_name, shapes, auto_dialogue)
                json_to_html(basename)
            elif ev.type == pygame.MOUSEBUTTONDOWN:
                print(f"Clicked @ {ev.dict['pos']}")
                polys.append(list(ev.dict['pos']))
            elif ev.type == pygame.KEYDOWN:
                if ev.dict['key'] == pygame.K_SPACE:
                    shapes.append({
                        'poly': polys.copy(),
                        'name':     input("Shape name: "),
                        'href':     input("Move to scene name? ('#' to not jump): "),
                        'dialogue': input("Dialogue name (blank to skip): ")
                    })
                    print("Appended new shape.")
                    polys.clear()

        screen.fill("black")
        screen.blit(img, img_rect)
        if len(polys) >= 2:
            pygame.draw.lines(screen, "green", True, polys, 3)
        if len(shapes) >= 1:
            for s in shapes:
                if len(s) >= 2:
                    pygame.draw.lines(screen, "blue", True, s['poly'], 2)
        pygame.display.flip()

if __name__ == "__main__":
    if len(sys.argv) <= 1:
        print("You need to specify an image")
        exit(-1)

    for arg in sys.argv[1:]:
        path = Path(arg)
        if path.suffix == ".json":
            print(f"(Re-)generating HTML from {path}")
            json_to_html(path.stem)
        else:
            print(f"Assuming that {path} is an image.")
            gen_maps(arg)