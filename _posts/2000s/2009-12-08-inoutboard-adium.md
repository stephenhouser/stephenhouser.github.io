---
title:      InOut Board Adium/Libpurple Plugin
date:       2009-12-08 12:00:00
thumbnail:  /inoutboard/inoutboard-adium.png
category:   projects
tags:       [development]
keywords:   adium plugin libpurple develop pidgin
description: >
    libpurple plugin adapted to work in Adium the Mac OS X instant
    messaging client"

layout:     project
archive:    true
---
A <a href="http://developer.pidgin.im/wiki/WhatIsLibpurple">libpurple</a> plugin adapted to work in <a href="http://adium.im/">Adium</a>, the <a href="http://www.apple.com/macosx/">Mac OS X</a> instant messaging client. The purpose of the plugin is to coordinate with our local staff <a href="http://webapp.usm.maine.edu/InOutBoard">In Out Board</a>, a virtual equivalent to regular office <a href="http://www.google.com/search?q=magnetic+in+out+board">magnetic in out boards</a> showing who is in the office and who is not. This makes the actual work of the plugin useless outside our small environment. However, the method of creating a plugin, the wrapper code for <a href="http://adium.im/">Adium</a> and <a href="http://developer.pidgin.im/wiki/WhatIsLibpurple">libpurple</a> plugins, and the documentation here are all potentially useful.

The plugin was originally developed for <a href="http://developer.pidgin.im/wiki/WhatIsLibpurple">libpurple</a> and <a href="http://www.pidgin.im/">Pidgin</a> by Brent Atkinson and completely rewritten by <a href="http://people.usm.maine.edu/pgillis/">Peter Gillis</a>, both at <a href="http://usm.maine.edu/">USM</a>. <a href="http://people.usm.maine.edu/pgillis/">Pete</a> continues to maintain the <a href="http://people.usm.maine.edu/pgillis/pidgin/">core plugin</a>. My code simply includes his sources and uses it as-is. Any needed changes are being contributed back to his codebase.

## Files

* <a href="{{site.fileurl}}/InOutBoard/InOutBoardPlugin-Adium1.5.9+-v.1.1.zip">InOutBoardPlugin-Adium1.5.9+-v.1.1.zip</a>: binary of version 1.1 to work with Adium >= version 1.5.9
* <b>Adium Plugin Source</b>: Not yet available.
* <a href="http://people.usm.maine.edu/pgillis/pidgin/">Pidgin Plugin</a>: Pete's core plugin code (binary and source).

## Archive

* <a href="{{site.fileurl}}/InOutBoard/InOutBoardPlugin-Adium1.5.8+-v.1.0.7.zip">InOutBoardPlugin-Adium1.5.8+-v.1.0.7.zip</a>: binary of version 1.0.7 to work with Adium >= version 1.5.8
* <a href="{{site.fileurl}}/InOutBoard/InOutBoardPlugin-Adium1.5.6+-v.1.0.6.zip">InOutBoardPlugin-Adium1.5.6+-v.1.0.6.zip</a>: binary of version 1.0.6 to work with Adium >= version 1.5.6
* <a href="{{site.fileurl}}/InOutBoard/InOutBoardPlugin-Adium1.5.4+-v.1.0.5.zip">InOutBoardPlugin-Adium1.5.4+-v.1.0.5.zip</a>: binary of version 1.0.5 to work with Adium >= version 1.5.4
* <a href="{{site.fileurl}}/InOutBoard/InOutBoardPlugin-Adium1.5.1+-v1.0.4.zip">InOutBoardPlugin-Adium1.5.1+-v1.0.4.zip</a>: binary of version 1.0.4 to work with Adium >= version 1.5.1b1
* <a href="{{site.fileurl}}/InOutBoard/InOutBoardPlugin-Adium1.5+-v1.0.3.zip">InOutBoardPlugin-Adium1.5+-v1.0.3.zip</a>: binary of version 1.0.3 to work with Adium >= version 1.5b3
* <a href="{{site.fileurl}}/InOutBoard/InOutBoardPlugin-Adium1.4+-v1.0.3.zip">InOutBoardPlugin-Adium1.4+-v1.0.3.zip</a>: binary of version 1.0.3 to work with Adium >= version 1.4b18
* <a href="{{site.fileurl}}/InOutBoard/InOutBoardPlugin-Adium1.4+-v1.0.2.zip">InOutBoardPlugin-Adium1.4+-v1.0.2.zip</a>: binary of version 1.0.2 to work with Adium >= version 1.4.
* <a href="{{site.fileurl}}/InOutBoard/InOutBoardPlugin-Adium1.4+-v1.0.1.zip">InOutBoardPlugin-Adium1.4+-v1.0.1.zip</a>: binary of version 1.0.1 to work with Adium >= version 1.4.
* <a href="{{site.fileurl}}/InOutBoard/InOutBoardPlugin-Adium1.4+-v1.0.0.zip">InOutBoardPlugin-Adium1.4+-v1.0.0.zip</a>: binary of version 1.0.0 to work with Adium >= version 1.4.

## Screenshots

<img src="{{site.asseturl}}/inoutboard/inoutboard-preferences.png" alt="image of the preferences window" />

The Adium advanced preference view for the plugin.

<img src="{{site.asseturl}}/inoutboard/inoutboard-status.png" alt="image of status selections in Adium" />

The Adium status selection menu.

<img src="{{site.asseturl}}/inoutboard/inoutboard-web.png" alt="image of the In Out Board web application" width="90%"/>

The USM InOutBoard web application.

## References

* <a href="http://rampion.blogspot.com/2008/09/howto-wrap-libpurple-plugin-for-adium.html">HOWTO: Wrap a libpurple plugin for Adium</a>. Provided the majority of what was needed to develop the plugin. Very helpful for project setup and initial code.
* <a href="http://trac.adium.im/wiki/CreatingPlugins">Creating Plugins</a> wiki article on <a href="http://trac.adium.im/wiki/">Adium's wiki</a>. Unfortunately not very helpful at the time of development. Refers to <a href="http://trac.adium.im/wiki/TobysGuideToPluginAuthoring">Toby's Guide To Plugin AUthoring</a> which had a little more information.
* <a href="http://trac.adium.im/wiki/MapOfAdium">Map of Adium</a>. A wiki page that described where and how to add configuration (advanced preference pane) to the plugin.
* <a href="http://fadeover.org/blog/archives/25">How-to: Create an Adium Plugin</a>. Did not really use this site, has some good, basic, tips.
