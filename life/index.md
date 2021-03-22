---
title: Conways Game of Life
category: software
tags: [games, software, java]
icon: index-64.png
keywords: conway life cellular automota java game
description: Java applet and application implementation of John Conway's Game of Life.
date: 2002-09-30 00:00:00
layout: project
archive: true
permalink: /life/
---
An implementation of John Conway's cellular automota know as Life. The application was originally done as an example and project for a Java Programming class I taught (quite a while ago now). I never assigned this one for homework or anything, but it was interesting and a good use of many of Java's features. Of course it is based on John Conway's Life game from Scientific American.

## Online Java Applet Version

*Java Applets* have been deprecated by almost all browsers (as of 2020) so the following snippet will likely just show an error message for you. If you happen to be running a really old browser, it might still work. Check the *Local Java Application Version* below for a downloadable version that should still work.

<div align="center">
    <!--[if !IE]> Hidden to IE -->
    <object classid="java:LifeApplet.class"
            type="application/x-java-applet"
            archive="Life102Applet.jar"
            width="550"
            height="250">
        <param name="archive" value="Mancala.jar" />
    <!--<![endif]-->
        <object classid="clsid:8AD9C840-044E-11D1-B3E9-00805F499D93"
                width="550"
                height="250">
            <param name="code" value="LifeApplet" />
            <param name="archive" value="Life102Applet.jar" />
            <p class="error">There appears to be a problem, sorry. Try enabling the ActiveX if you are Internet Explorer user.</p>
        </object>
    <!--[if !IE]> Hidden to IE -->
    </object>
    <!--<![endif]-->
</div>

## Local Java Application Version

After a little tweaking I have produced a Java WebStart(R) version of Conway's Game of Life. This is a complete rewrite of my previous version(s). It is still in development and has quite a few "bugs" and "unimplemented features" that I am continuing to work on. However, it does have basic functionality enabling it to run a game and let you kill and spawn cells among the 100x100 playing board.

[Launch Life Application](Life.jnlp) (using Java WebStart)
<a href="Life.jnlp">Launch Life Application</a> (using Java WebStart)

## Future Work

I'm continuing, slowly, on the task of rewriting the Life Application/Applet. My desire is to have one infrastructure that will work for multiple backends (GameEngines) and multiple front ends (Controllers and Views). Thus the same code could be used for a Java WebStart distributed application, an Applet, and a complete downloadable application.

Of course all of these should have all options, but that might be pushing it. The applet will be more limited. Perhaps a drop-down added to the interface to select some well known patters and the ability to "draw" patterns. The WebStart version should be complete, except for perhaps being able to store games locally. I will have to provide a library (jar) of common patterns -- the same ones the applet get.

Why all these fixes after all these years you might ask. Well, just to fix some old bugs and rework using patterns. This application has always been my "prototype" application that had lots of cool "javaness" to it. I wanted to keep it up to date with that. I want to add in some of the new Java 1.5 features, but to keep compatibility with applets I might wait -- or branch in CVS. I'll post more as it progresses.

## Other Versions

* [A nice JavaScript version ](http://pmav.eu/stuff/javascript-game-of-life-v3.1.1/?autoplay=0&trail=0&grid=1&colors=1&zoom=1&s=random)
