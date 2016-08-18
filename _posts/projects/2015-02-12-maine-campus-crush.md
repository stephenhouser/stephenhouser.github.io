---
title:      Maine Campus Crush
date:       2015-02-11 07:00
thumbnail:  /projects/ccrush/ccrush-icon.png
category:   projects
tags:       [mobile, development]
keywords:   html5 css3 javascript web application game university maine system campuses usm uma umm umaine umf umfk umm umpi ums
description: >
    Match-3 challenge game between the University of Maine System campuses. Choose
    your team and play for the highest scores!

layout:     project
#project:    CCRUSH
archive:    false
---
[Maine Campus Crush][campuscrush] is a tile-matching puzzle video game. It is also a
challenge game between the University of Maine System campuses. Choose
your team and play for the highest scores!

<style>
#leaderboard {
	display: inline-block;
	float: right;
	border: 1px solid green;
	border-radius: 5px;
	width: 200px;
	box-shadow: 10px 10px 5px #888888;
}

#leaderboard h3 {
	text-align: center;
	border-bottom: 1px solid green;
	margin: 10;
}

#scores {
	list-style-type: none;
}

#scores li p {
	display: inline-block;
	margin: 0;
}

.score {
	display: inline-block;
	width: 33%;
	text-align: right;
	font-weight: bold;
}
</style>

<div id="playgame" style="float: left;">
        <img src="{{"/projects/ccrush/ccrush-1.png"|prepend:site.assetsurl}}"
            alt="Play Maine Campus Crush"/>
        <br/>
        <a href="http://stephenhouser.com/MaineCampusCrush">
        <p align="center">Play Campus Crush Now</p>
        </a>
</div>
<div id="leaderboard">
	<h3>Leaderboard</h3>
	<ul id="scores">
		<li class="loading">Loading Leaderboard...</li>
		<li class="team0"><span class="score">0</span> <p>Undeclared</p></li>
		<li class="team1"><span class="score">0</span> <p>Moose</p></li>
		<li class="team2"><span class="score">0</span> <p>Beavers</p></li>
		<li class="team3"><span class="score">0</span> <p>Bengals</p></li>
		<li class="team4"><span class="score">0</span> <p>Owls</p></li>
		<li class="team5"><span class="score">0</span> <p>Black Bears</p></li>
		<li class="team6"><span class="score">0</span> <p>Huskies</p></li>
		<li class="team7"><span class="score">0</span> <p>Clippers</p></li>
		<li class="team8"><span class="score">0</span> <p>System</p></li>
	</ul>
</div>
<div style="clear: both;">
</div>

## Gameplay

The objective of this game is to swap one campus mascot tile with an
adjacent tile to form a horizontal or vertical chain of three or more
tiles of the same color. Bonus points are given when chains of more than
three identical tiles are formed and when two chains are formed in one
swap. Tiles disappear when chains are formed and new tiles fall from the
top to fill in gaps. Sometimes chain reactions, called cascades, are
triggered, where chains are formed by the falling tiles. Cascades are
not yet awarded with bonus points. There are two variations of the game
to choose from.

Although normally the player gets only three in a row for tiles,
sometimes they can get four or five in a row. And in rare conditions,
they can get six, seven, and even eight in a row! You get more points
for each additional tile that matches.

The game is over when no more moves can be performed. The score is
then compared against others from your campus and, if high enough,
ranked on the leaderboard.

## Background

The game is heavily based on [Bejewled][bejewled]

<script type="application/x-javascript"
	src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script>
var scoreURL = "https://script.google.com/macros/s/AKfycbwBINdsC6ygyp2ojzFboO_cRxvS0U1joxWfUkNhfT-XDHiK_kU/exec";

function loadScores() {
	var teams = 8;

    // Send out a request to get leaderboard data from the "server"
    $.ajax({
        url: scoreURL,
        cache : false,
        dataType: 'jsonp',
        success: function(data) {
			// Modify the leaderboard DOM elements
			var leaderboard = data.leaderboard;
			for (var team = 0; team < teams; team++) {
				var teamData = leaderboard[team];
				var scoreSpan = $('#scores ' + '.team' + team + ' .score');
				scoreSpan.text(teamData.score);
			}

            $('#scores ' + '.loading').hide();

			/* Sort the leaderboard */
			var ul = $('ul#scores');
			var	li = ul.children('li');

			li.detach().sort(function(a,b) {
				var scoreA = parseInt($(a).children('.score').text());
				var scoreB = parseInt($(b).children('.score').text());
				return scoreB - scoreA;
			});

			ul.append(li);
        },
        error: function(e) {
            console.log(e);
        }
    });
}

loadScores();
</script>

 [campuscrush]: http://people.usm.maine.edu/houser/CampusCrush/
 [mainecampuscrush]: http://stephenhouser.com/MaineCampusCrush
 [bejewled]:    http://en.wikipedia.org/wiki/Bejeweled
