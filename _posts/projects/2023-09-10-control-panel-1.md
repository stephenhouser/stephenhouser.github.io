---
title: 		Control Panel 1
date: 		2023-09-10 12:00:00
updated:    2024-08-06 11:50:00
thumbnail: 	/projects/control-panel-1/control-panel-icon.png
category: 	electronics
tags: 		[development, software, homeautomation, homeassistant, esphmome]
keywords:   
description: A physical control panel for home automation

layout:     project
archive:	false
permalink:  /control-panel-1
---
An old-school toggle-switch control panel for Home Automation. I've fast grown tired of tablet interfaces and flat glass screens you have to type on. This is my retaliation, a very tactile control panel for home automation. The control panel interfaces with my home automation system to control lights and devices around my house. The best part is I can "feel" the switches in the dark to turn on the lights!

![Living Room  Version]({{site.baseurl}}/assets/projects/control-panel-1/living-room-cp.jpg)

Cnstruction details and parts list are on the [GitHub Project Page](https://github.com/stephenhouser/Control_Panel_1). If you are interested more in those aspects of the project, you will find them there.

I like physical old school controls; switches, buttons, and 7-segment displays. I also like quick access to turn on and off things without having to go all over the house. Fortunately home automation and the Internet of Things are helping solve the latter problem. Unfortunately the rest of the world seems to like flat glass panel interfaces (tablets, iPads, etc.) that lack any physical character. Fortunately I have junk boxes full of switches, buttons, and microcontrollers! Mix all those together and you get a very physical _Control Panel 1_ that connects via WiFi to my home automation system!

## The Problem

I'm lazy and a creature of habit.

I've been using [Home Assistant](https://www.home-assistant.io/) for home automation for a few years, I have never perfected the user interface it presents. There are a ton of really wonderful examples that people have constructed, but I see to lack the aestetic design for tablet interfaces or just the desire to create one. However, I do like physical and tactile things that I can fumble for in the dark and flick as much out of a sense of where things are.

That's what this project aims to solve. A tactile interface to an automated house.

## Physical Design

I specifically used a retro styled case. One that reminds me of 1980's control panels in nuclear bunkers and industrial facilities. Something that had the "old but techy" vibe. The [BUD Industries PC-11495 Plastic Style F Box 9" W x 5" H x 8.5" D, Natural](https://www.amazon.com/gp/product/B005T98PQS/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1) was, of course, the project box for me.

Laying out the switches was perhaps the most challenging aspect. How many switches did I want, did I want a rotary encoder?, push buttons, toggle switches? All very hard life choices. In the end, I chose a little of everything and laid it out in a very simple two row grid. (note from the future, this seems to be working well for me)

The control surface (panel) is acrylic. The back-side is painted black then laser etched and painted white. This gives a glossy finished look to the control labels. I've used the technique once before to good effect. This instance was no different. The Dev version has just clear acrylic so you can see the board underneath.

Here's the dev "see-through" version to get a better idea of how it all goes together.

![Dev Version]({{site.baseurl}}/assets/projects/control-panel-1/dev-control-panel.jpg)

## Electronic Components and Software

The heart of the control panel is an ESP32 Dev kit (a wifi-enabled microprocessor). Everything pretty much wires right into the general purpose IO pins. The LEDs are WS2812 compatible but standard 5mm form factor. These are all daisy chained and connected to a single pin on the ESP32. The switches are in a keyboard matrix, which requires diodes to avoid "ghosting" when more than one switch is in the on position. Plus on the top panel, 7 segment displays. Because what's more retro than a seven segment display?

A breakdown of what's included.

- 1 3-way toggle switch
- 1 push button (call)
- 10 2-way toggle switches
- 1 rotary encoder
- 17 WS2812 LEDs
- 2 seven segment displays (4 each)

## What it Controls

There's a ton more I could do with the control panels. I hooked the rotary encode up as a volume control for my home theater.

- Lights around the outside of the house (x6)
- Lights in the living room; reading lights and lights over bookcases
- Home theater master power (annoyed it uses >50W when not even on)
- LED "candles" in the kitchen
- Rotary encoder controls volume on home theater for when I've lost the remote in the couch(press mute/unmute)
- 3-way switch changes what shows on the seven segment displays; HVAC temp/oil level, time and current power usage (whole house), temperature inside/outside
- Call button is currently not used
- Bulb LED on "top" turns blue when doorbell camera detects someone in the driveway and red when detected on the porch.
- LEDs above switches turn green when the controlled device is on but the toggle switch is not. Turns blue (to match seven segment display) when the device and the switch are both on (in-sync)

## Future Options and Ideas

The primary panel is in my living room and gets used daily. The "see-through" dev version is in my office where I can use it to develop and debug automations. I have two more cases (without the top display portion) that I can build two more panels with.

A few hardware changes for the future:
- Mount the ESP32 with the antenna up so it clear's the PCB. It should get better connectivity that way. This was noted by someone else on reddit. As a "radio guy" I should have known better.
- Add audio for playing sounds and using as an intercom. That "call" button is calling!
- Add more silkscreen to the PCB, something to fancy it up. Maybe add a logo.

## Prototype

![First prototype]({{site.baseurl}}/assets/projects/control-panel-1/prototype-1.jpg)

## Project Files

Cnstruction details and parts list are on the [GitHub Project Page](https://github.com/stephenhouser/Control_Panel_1). If you are interested more in those aspects of the project, you will find them there.
