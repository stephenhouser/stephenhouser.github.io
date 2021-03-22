---
title: 	Troop 349 The Dice Game
date: 		2019-04-01 14:30:00
thumbnail: 	/projects/troop349-dice/troop349-dice.jpg
category: 	games
tags: 		[software, python, games]
keywords:
description:

layout: 	project
archive:	false
permalink:  /troop349-dice
---
This is what happens when you have a laser engraver/cutter and too much free time on your hands while driving to and from work. You get a custom dice game and computer simulation to determine how playable it is! This game is really designed for the upcoming (tonight) game playing troop meeting the Scouts have scheduled. It's incredibly simple, you roll two dice to determine the _winning point total_ and then take turns trying to roll your way there by adding or subtracting your rolls. It's that simple... except that the dice only have `3`, `4`, and `9` on the faces!

![Troop 349 Dice]({{site.baseurl}}/assets/projects/troop349-dice//troop349-dice.jpg)

The game instructions, laser cutter files, and all the details on how to play are available on [GitHub](https://github.com/stephenhouser/Troop349-Dice-Game) under a Creative Commons license. Check the repository for more information if you want to make your own copy.

The simulation is a Python 3 Jupyter Notebook that will simulate playing the game a number of times (250,000) and then draw a histogram of the number of turns needed to reach a win condition. The code and histogram show that the average game should be somewhere between 7 and 8 turns (for a single player) and 95% of all games should be 17 turns or less.

![Game length histogram]({{site.baseurl}}/assets/projects/troop349-dice/troop349-dice-histogram.png)

You can run the simulation interactively with Binder if you want to check my results or (constructively) critique my code:

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/stephenhouser/Troop349-Dice-Game/master?filepath=Troop349-Dice-Game-Simulation.ipynb)

