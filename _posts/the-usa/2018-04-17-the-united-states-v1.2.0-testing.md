---
title: 		  The United States v1.2.0 Testing
date: 		  2018-04-17 12:09
thumbnail: 	/the-usa/TheUnitedStatesv1.1.png
category:	  software
tags: 		  [product, mobile, software, iOS, games, swift]
keywords:
description:

project: 	  the-usa
---
I've been poking at an updated version (1.2.0) of The United States iPad app. The last release was in 2014 and [Apple](http://apple.com) sent me a message that it was going to be removed from the App Store unless I updated it. I don't really make any money off the $0.99 price tag. It used to be enough to pay for the developer account but has dropped off over the years. Could be I'm not a great app/software marketer too.


[![The United States][screenshot]][appstore]

From the current development code, I've really only patched up problems with the [SVGKit](https://github.com/stephenhouser/SVGKit) that I use to display the map. For the moment I also removed _Apple GameKit_ and achievements as the API has completely changed and I'm not sure the time investment in updating would be worth it.

If you're interested in being a beta tester, drop me an email. I've got about a month to get things cleaned up and ready for release.

{%include the-usa-links.html %}


  [appicon]: http://a3.mzstatic.com/us/r30/Purple3/v4/02/93/2b/02932b52-b671-9400-177c-4c2ede537434/icon175x175.png
  [appstore]: http://itunes.apple.com/us/app/the-united-states/id503146680?ls=1&amp;mt=8
  [screenshot]: {{site.baseurl}}/assets/the-usa/the-united-states.png