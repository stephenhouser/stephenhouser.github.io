---
title: 		Building the QRP Labs QDX
date: 		2023-06-03 12:00:00
thumbnail: 	/radio/qdx-thumb.png
category: 	radio
tags: 		[radio, hardware, electronics]
keywords:   
description: Building the QRP Labs QDX

---
Last year at Hamvention 2022 I purchased one of QRP Labs' [QDX Digital Transceiver](https://www.qrp-labs.com/qdx.html) kits. This week I finally got around to building it! I've found it performs rather well on 20m with FT8. For posterity, I've captured a few build photos and some notes on my build here.

![QDX Build Photo 1 - board]({{site.baseurl}}/assets/radio/qdx-build-1.jpg)

The kit is a mix of through-hole and surface mount components. All the surface mount work is done at the factory, so as a kit builder, you just have a few toroids to wind and the larger through-hole components to solder in. It's like Betty Crocker cake mix. All the ingredeints are really already in there, but they let you add the eggs so you feel like you made it from scratch.

![QDX Build Photo 2 - board]({{site.baseurl}}/assets/radio/qdx-build-2.jpg)

The capacitors and diodes were pretty typical. Hard to read the values but easy to solder in. The most difficult component was the tri-filar torroid. I managed to over-use the winding wire on the other torroids and had *just* barely enough left over for this last one. Fortunately it came out splendidly. I wound the three wires together by hand using a few vice-grips, then wound them on the torroid the same as all the others.

![QDX diagnostic screen]({{site.baseurl}}/assets/radio/qdx-build-3.png)

On first powerup, I ran some of the on-board diagnostics. This is a really nice feature Hans has put in these kits. You don't need much external test equipment to check out your build. Unfortunately, I found something was amiss. My audio and rf sweeps looked good on 40m, but all the other bands were a complete mess. The expected nice rising and falling charts looked more like a [Jackson Pollack](https://en.wikipedia.org/wiki/Jackson_Pollock) painting with lines every which way.

QRP Labs also provides a very handy [QDX troubleshooting and tweaking](https://www.qrp-labs.com/qdx/qdxtrouble.html) page which, while didn't have exactly my problem, helped me find that I had managed to clip or solder away a 2.2uf surface mount capacitor and bridge two contacts elsewhere that should not have been bridged!

![QDX PSK Reporter reception reports]({{site.baseurl}}/assets/radio/qdx-qsos.png)

Once those were fixed, I was on the air and working stations in no time. WSJT-X was almost trivial to configure with the supplied instructions. No need repeating them here, Hans has done a super job in his details. I made a few contacts stateside, but [PSK Reporter](https://pskreporter.info/pskmap) showed I was being heard in Europe. Not a super signal there, but it was a readable signal!

I'm tempted to connect the QDX to a VGA monitor and keyboard for standalone operation, but I suspect other project will occupy my time instead. Next I'll be on to building my [QMX](https://www.qrp-labs.com/qmx.html) that I picked up at this year's Hamvention 2023!
