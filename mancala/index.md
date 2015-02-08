---
title: Mancala - The African Stone Game
tags: [games, development, course, cos249]
icon: index-64.png
keywords: mancala african stone game java
description: Java applet implementation of Mancala, the ancient African stone game.
date: 1999-09-21 00:00:00
layout: project
archive: true
---
A Java Applet that plays the ancient African game of Mancala. It was done as a project and example for COS246 Java Programming (now renumbered as COS244) class (which it was assigned for their final exam).

## Online Java Applet Version

<div align="center">
    <!--[if !IE]> Hidden to IE -->
    <object classid="java:Mancala.class"
            type="application/x-java-applet"
            archive="Mancala.jar"
            width="550"
            height="250">
        <param name="archive" value="Mancala.jar" />
    <!--<![endif]-->
        <object classid="clsid:8AD9C840-044E-11D1-B3E9-00805F499D93"
                    width="550"
                    height="250">
                <param name="code" value="Mancala" />
                <param name="archive" value="Mancala.jar" />

                <p class="error">There appears to be a problem, sorry. Try enabling the ActiveX if you are Internet Explorer user.</p>
        </object>
    <!--[if !IE]> Hidden to IE -->
    </object>
    <!--<![endif]-->
</div>

## About Mancala

The game of Mancala is an ancient Egyptian/African game played with 48 stones and a board with 14 bins, six on each side for each player, and one at either end called the Mancala. Each player's Mancala is on their right, it is a storage bin for captured stones and is empty at the start of the game.

## Game Play

The game begins with the stones evenly distributed among the twelve playing bins (in a 48 stone game, 4 stones per bin.) The first player removes the stones from one of his or her bins and, moving counter clockwise, placing one stone in each bin until they have exhausted the stones picked up. While dropping stones, treat your own Mancala as a bin, but do not drop stones in your opponents. The goal is to accumulate the most stones in your own Mancala. Players then alternate turns until one player has no more stones to move. The player with the most stones at the end of the game wins.

## Rules of Play

* You always choose a bin on your side and drop stones starting in the bin immediately counter clockwise (to the right) of the starting bin.
* You are not allowed to touch the stones when 'counting' them.
* If the last stone dropped lands in your Mancala, you get another turn.
* If the last stone is dropped into an empty bin, on your side of the board, you capture any of the opponent's stones in the opposing bin. Place the opposing stones and the capturing stone in your Mancala.
* Play ends when either player has no more stones on their side of the board (not including their Mancala). The opposing player adds any remaining stones to their Mancala. The player with the most stones at the end of the game wins.

## References

* <a href="http://www.lookoutnow.com/game">JavaScript Mancala</a>, This is where the Images for the above applet are from. Thanks to Chet Gottfried at LookoutNow.Com for letting me use them, even after years of me not asking!
* Toy analysis of Mancala (gone)
* <a href="http://imagiware.com/mancala">Mancala Web Home</a>
