---
title: 		MiniPin - Virtal Pinball
date: 		2017-03-23 12:00:00
thumbnail: 	/projects/minipin/minipin-120.png
category: 	projects
tags: 		[poject, game, pinball, woodworking]
keywords:	[pinball, game, virutual pinball, visual pinball, woodworking, electronics]
description: Description of the MiniPin Virtual Pinball cabinet built with Visual Pinball, PinMAME, PinballX and other open and free software. 
layout: 	project
project: 	MiniPin
archive:	false
permalink: /minipin/
---
It was August 28, 2011 when I first made a mockup of a virtual pinball machine that came to be known as 'MiniPin'. The virtual pinball feever had started a few days earler when a friend saw the [Kids Mame 1][kidsmame1] build on my website and said, innocently, "...*you should build a virtual pin cabinet*.". Of course, that's exactly what I did.

<img src="{{"/projects/minipin/minipin-480.png"|prepend:site.assetsurl}}" alt="Shawn playing Medieval Madness on the MiniPin in 2011" />

## Overview

For me the most enjoyable thing about a virtual pinball cabinet was clearly the building process. I just like building things and the project really involved a wide array of things that needed to be put together, patched up, and wired up. With woodworking, electronics, and software it was just har to go wrong in the enjoyment division. And, at the end, I had a (virtual) pinball machine that could play any of a hundred different pinball tables.

## Hardware

The hardware is the most obvious part of the build. It is a combination of arcade buttons and lights, with an electronic plunger driven by an Apple Mac Mini. It's all assembled inside a custom built playfield box and back box with two monitors (one for the playfield and one for the backglass display). High brightness LEDs used for flashers lend to the arcade feel, but it's the physical force feedback provided solenoids are the real pinnacle of the design.

### The Case

### The Computer

There are a number of choices for the core computer of a virtual pinball cabinet, and the key component is the display adapter. While more is always better, I was able to get acceptable results with a ~~Mid 2011~~ Late 2012 Apple Mac mini and it's Inel HD Graphics 4000. I used the mini for two key reasons; 

1. It's small size and ability to fit in my smaller sized cabinet
2. I had one on hand that I could use, e.g. nothing to buy.

Here are the specs of the Mac mini (Late 2012)

* 1.4in x 7.7in x 7.7in, weiging in at 2.7lbs
* 2.5 GHz dial core Intel Core i7 (Turbo Boost up to 3.3GHz) with 6MB L3 cache
* 250GB Solid-state Drive
* Intel HD Graphics 4000
* 8GB 1600MHz DDR3 memory
* Support for two displays at 2560x1600 at millions of colors (HDMI, Mini DisplayPort)
* Audio line out/headphone minijack
* 4 x USB 3 ports
* Gigabit Ethernet, 802.11n/a/b/g Wi-Fi wireless
* Bluetooth 4.0

### Two Displays

### Pinball Wizard (Input Controller)

### Tilt and Nudge

### LEDWiz (Output Controller)

### Lights and Sound

### Real Feedback

## Software

### Windows 10

### Visual Pinball and PinMAME

### Active Backglass (directB2S)

### Direct Output Framework (DOF)

### PinballX (front-end)

## Conclusion

<!--
<link type="text/css" rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/lightslider/1.1.6/css/lightslider.min.css" /> 
<!--
<link type="text/css" rel="stylesheet" 
href="//cdnjs.cloudflare.com/ajax/libs/lightgallery/1.3.9/css/lightgallery.min.css" />         

<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/lightslider/1.1.6/js/lightslider.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/lightgallery/1.3.9/js/lightgallery.min.js"></script>

<ul class="center" id="lightSlider" width="100%">
	<li>
		<iframe width="560" height="315" src="https://www.youtube.com/embed/_pfy87Gm9PA" frameborder="0" allowfullscreen></iframe>  
	</li>
  	<li data-thumb='{{"/projects/minipin/gallery/DSC02968.JPG"|prepend:site.assetsurl}}'>
  		<img src='{{"/projects/minipin/gallery/DSC02968.JPG"|prepend:site.assetsurl}}'/>
  	</li>
  	<li data-thumb='{{"/projects/minipin/gallery/DSC02883.JPG"|prepend:site.assetsurl}}'>
  		<img src='{{"/projects/minipin/gallery/DSC02883.JPG"|prepend:site.assetsurl}}'/>
  	</li>
  	<li data-thumb='{{"/projects/minipin/gallery/DSC02898.JPG"|prepend:site.assetsurl}}'>
  		<img src='{{"/projects/minipin/gallery/DSC02898.JPG"|prepend:site.assetsurl}}'/>
  	</li>
  	<li data-thumb='{{"/projects/minipin/gallery/IMG_0577.jpg"|prepend:site.assetsurl}}'>
  		<img src='{{"/projects/minipin/gallery/IMG_0577.jpg"|prepend:site.assetsurl}}'/>
  	</li>
  	<li data-thumb='{{"/projects/minipin/gallery/DSC02904.JPG"|prepend:site.assetsurl}}'>
  		<img src='{{"/projects/minipin/gallery/DSC02904.JPG"|prepend:site.assetsurl}}'/>
  	</li>
  	<li data-thumb='{{"/projects/minipin/gallery/DSC02946.JPG"|prepend:site.assetsurl}}'>
  		<img src='{{"/projects/minipin/gallery/DSC02946.JPG"|prepend:site.assetsurl}}'/>
  	</li>
  	<li data-thumb='{{"/projects/minipin/gallery/DSC02954.JPG"|prepend:site.assetsurl}}'/>
  		<img src='{{"/projects/minipin/gallery/DSC02954.JPG"|prepend:site.assetsurl}}'/>
  	</li>
  	<li data-thumb='{{"/projects/minipin/gallery/DSC02956.JPG"|prepend:site.assetsurl}}'/>>
  		<img src='{{"/projects/minipin/gallery/DSC02956.JPG"|prepend:site.assetsurl}}'/>
  	</li>
  	<li data-thumb='{{"/projects/minipin/gallery/DSC02962.JPG"|prepend:site.assetsurl}}'/>
  		<img src='{{"/projects/minipin/gallery/DSC02962.JPG"|prepend:site.assetsurl}}'/>
  	</li>
  	<li data-thumb='{{"/projects/minipin/gallery/DSC02971.JPG"|prepend:site.assetsurl}}'/>
  		<img src='{{"/projects/minipin/gallery/DSC02971.JPG"|prepend:site.assetsurl}}'/>
  	</li>
  	<li data-thumb='{{"/projects/minipin/gallery/DSC02997.JPG"|prepend:site.assetsurl}}'/>
  		<img src='{{"/projects/minipin/gallery/DSC02997.JPG"|prepend:site.assetsurl}}'/>
  	</li>
  	<li data-thumb='{{"/projects/minipin/gallery/DSC02999.JPG"|prepend:site.assetsurl}}'/>
  		<img src='{{"/projects/minipin/gallery/DSC02999.JPG"|prepend:site.assetsurl}}'/>
  	</li>
  	<li data-thumb='{{"/projects/minipin/gallery/DSC03001.JPG"|prepend:site.assetsurl}}'/>
  		<img src='{{"/projects/minipin/gallery/DSC03001.JPG"|prepend:site.assetsurl}}'/>
  	</li>
  	<li data-thumb='{{"/projects/minipin/gallery/DSC03002.JPG"|prepend:site.assetsurl}}'/>
  		<img src='{{"/projects/minipin/gallery/DSC03002.JPG"|prepend:site.assetsurl}}'/>
  	</li>
  	<li data-thumb='{{"/projects/minipin/gallery/DSC03003.JPG"|prepend:site.assetsurl}}'/>
  		<img src='{{"/projects/minipin/gallery/DSC03003.JPG"|prepend:site.assetsurl}}'/>
  	</li>
  	<li data-thumb='{{"/projects/minipin/gallery/DSC03016.JPG"|prepend:site.assetsurl}}'/>
  		<img src='{{"/projects/minipin/gallery/DSC03016.JPG"|prepend:site.assetsurl}}'/>
  	</li>
  	<li data-thumb='{{"/projects/minipin/gallery/DSC03018.JPG"|prepend:site.assetsurl}}'/>
  		<img src='{{"/projects/minipin/gallery/DSC03018.JPG"|prepend:site.assetsurl}}'/>
  	</li>
  	<li data-thumb='{{"/projects/minipin/gallery/DSC03059.JPG"|prepend:site.assetsurl}}'/>
  		<img src='{{"/projects/minipin/gallery/DSC03059.JPG"|prepend:site.assetsurl}}'/>
  	</li>
  	<li data-thumb='{{"/projects/minipin/gallery/DSC03072.JPG"|prepend:site.assetsurl}}'/>
  		<img src='{{"/projects/minipin/gallery/DSC03072.JPG"|prepend:site.assetsurl}}'/>
  	</li>
  	<li data-thumb='{{"/projects/minipin/gallery/DSC03075.JPG"|prepend:site.assetsurl}}'/>
  		<img src='{{"/projects/minipin/gallery/DSC03075.JPG"|prepend:site.assetsurl}}'/>
  	</li>
  	<li data-thumb='{{"/projects/minipin/gallery/DSC03077.JPG"|prepend:site.assetsurl}}'/>
  		<img src='{{"/projects/minipin/gallery/DSC03077.JPG"|prepend:site.assetsurl}}'/>
  	</li>
  	<li data-thumb='{{"/projects/minipin/gallery/IMG_0021.jpg"|prepend:site.assetsurl}}'/>
  		<img src='{{"/projects/minipin/gallery/IMG_0021.jpg"|prepend:site.assetsurl}}'/>
  	</li>
</ul>

<script type="text/javascript">
  $(document).ready(function() {
    $("#lightSlider").lightSlider({
		gallery: true,
    	item: 1,
    	loop: true,
    	slideMargin: 0,
    	thumbItem: 9,
		enableDrag: false,
		//onSliderLoad: function(el) {
        //	el.lightGallery({
        //    	selector: '#lightSlider .lslide'
        //    });
        //}   
	}); 
  });
</script>

-->	

 [kidsmame1]: {% post_url /projects/2003-10-23-kids-mame-1 %})

