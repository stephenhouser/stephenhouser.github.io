---
title : Biorhythm Readings
date  : 2008-12-23 00:00:00
tags  : [development]
icon  : index-64.png
layout: project
archive: true
---
A biorhythm is a hypothetical cycle in physiological, emotional, or intellectual well-being or prowess. "Bio" pertains to life and "rhythm" pertains to the flow with regular movement. Biorhythms theory has no more predictive power than chance and has been labeled a pseudo-science by skeptics.
The equations for the curves are:

* physical: sin(2&pi;t / 23)
* emotional: sin(2&pi;t / 28)
* intellectual: sin(2&pi;t / 33)
* intuitive: sin(2&pi;t / 38)

Where t indicates the number of days since birth. Source: <a href="http://en.wikipedia.org/wiki/Biorhythm">Wikipedia: Biorhythm</a>

## Settings

<style type="text/css" media="screen">
    @import url(js/jsxgraph.css);
    @import url(biorhythm.css);
</style>

<script type="text/javascript" src="js/prototype.js"></script>
<script type="text/javascript" src="js/jsxgraphcore.js"></script>
<script type="text/javascript" src="biorhythm.js"></script>

<form id="biorhythm_form" onsubmit="return false;">
    <fieldset class="input">
        Birth
        <label class="input" for="month">Month</label>
        <input class="input" name="month" size="2" />
        <label class="input" for="day">Day</label>
        <input class="input" name="day" size="2"/>
        <label class="input" for="year">Year</label>
        <input class="input" name="year" size="4"/>

        <input class="submit" type="button" value="Compute" onClick="bio_calc(biorhythm_form); return false;"/>
        <input class="submit" type="button" value="Save Settings" onClick="save_bio_cookie(biorhythm_form); return false;"/>
        <span class="hovertip"><a href="#">(?)</a><span>Saves the currently entered birth date information as a cookie so when you visit next you won't have to enter it again.</span></span>
        <input class="submit" type="button" value="Forget Settings" onClick="clear_bio_cookie(biorhythm_form); return true;"/>
        <span class="hovertip"><a href="#">(?)</a><span>Forgets the currently entered birth date information by deleting the saved cookie.</span></span>

        <script type="text/javascript">
            load_bio_cookie(biorhythm_form);
        </script>
    </fieldset>
<form>

## Readings

<form id="biorhythm_form">
    <fieldset class="result">
        <label class="result" for="days">Days since birth</label>
        <input class="result" name="days" readonly size="7" />

        <label class="result" for="physical">Physical level</label>
        <input class="result" name="physical" readonly size="7" />
        <label class="result" for="emotional">Emotional level</label>
        <input class="result" name="emotional" readonly size="7" />
        <label class="result" for="intuitive">Intuitive level</label>
        <input class="result" name="intuitive" readonly size="7" />

        <label class="result" for="intellectual">Intellectual level</label>
        <input class="result" name="intellectual" readonly size="7" />
        <label class="result" for="aesthetic">Aesthetic level</label>
        <input class="result" name="aesthetic" readonly size="7" />
        <label class="result" for="awareness">Awareness level</label>
        <input class="result" name="awareness" readonly size="7" />
        <label class="result" for="spiritual">Spiritual level</label>
        <input class="result" name="spiritual" readonly size="7" />
    </fieldset>
</form>

## Chart

<div id="jxgbox" class="jxgbox" style="width:400px; height:250px;"></div>
<script type="text/javascript">
    create_board('jxgbox');
    bio_calc(biorhythm_form);
</script>
<form action="">
    <input type="button" value="Zoom In" onclick="zoomIn();" />
    <input type="button" value="Zoom Out" onclick="zoomOut();" />
    <input type="button" value="Reset Zoom" onclick="zoomReset();" />
</form>

