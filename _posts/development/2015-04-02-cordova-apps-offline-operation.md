---
title: 		Cordova Apps and Offline Operation
date: 		2015-04-02 10:00:00
thumbnail:
category:	development
tags: 		[deveopment]
keywords:
description:
---
There are a number of quirky tasks to complete when you get ready to publish an app in either the Apple App Store or the Google Play Store. They are not the type of thing I, as a developer, usually think about when starting a project. As the [Portland Women's History Trail][pmwht] gets nearer to "submission ready," I've steadily chopped away at that list, but the first major task was making a fundamentally HTML/CSS/JavaScript application work when bundled and offline took a bit of research and ultimately, doing things the "right way."

The app is developed in [Cordova][cordova] and uses several frameworks like [jQuery][jquery], [jQuery Mobile][jqm], [Google Maps][maps], [Google Analytics][analytics], and a few [Google Fonts][fonts]. When the app is run and the user has network connectivity, things work as expected. The problem comes when the app is bundled to a native app with [Cordova][cordova] and launched when *offline*.

## jQuery and jQuery Mobile
[jQuery][jquery] and [jQuery Mobile][jqm] are easy problems to solve. You can just bundle them with the app and fetch them locally. This has the benefit of faster loading even when the device is online. Simple, done, still broken.

## Google Fonts
The graphic design of the app called for two specific, freely available, [Google Fonts][fonts]; `Roboto` and `PT Serif Caption`. Normally these are simply `@imported` in your site's CSS file:

````CSS
@import url(https://fonts.googleapis.com/css?family=Roboto);
@import url(https://fonts.googleapis.com/css?family=PT+Serif+Caption);
````

As you might suspect from the rest of this article, this causes problems when you are offline or have limited bandwidth. To solve this, the font files need to be served from the local system. The added complexity is that the `@import` does not refer to the font file directly, but to a CSS `@font-face` specification that in-turn refers to the font files. We thus, have a two part solution.

First, include the following in the CSS, replacing the `@import`:

````
@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto'), local('Roboto-Regular'), url("{{ site_root }}css/fonts/Roboto.ttf"),     url(https://fonts.gstatic.com/s/roboto/v15/zN7GBFwfMP4uA6AR0HCoLQ.ttf) format('truetype');
}

@font-face {
    font-family: 'PT Serif Caption';
    font-style: normal;
    font-weight: 400;
    src: local('PT Serif Caption'), local('PTSerif-Caption'), url("{{ site_root }}css/fonts/PTSerif-Caption.ttf"), url(https://fonts.gstatic.com/s/ptserifcaption/v8/7xkFOeTxxO1GMC1suOUYWVRF2Zew_pgh0xNsNWxurqo.ttf) format('truetype');
}
````

This specifies the fonts in question and gives list of locations to try and find them. Note the order, we will look `local()` first, then the local-served `url()`, and finally if those fail the hosted `url()`. The last one should not be needed, but I left it in for reference. That is, the local-hosted should satisfy the request.

Second you need to download the actual font files (`.ttf` in this case) and place them into the correct location (`css/fonts` for this project) so the HTML engine can find them at runtime.

Problem solved. And really, not that bad of a solution. Like [jQuery][jquery] and [jQuery Mobile][jqm] this should speed things up a bit as the fonts don't have to traverse the Internet to get to the device. Additionally it will help those that are bandwidth-impaired.

## Google Maps
[Google Maps][maps] is where the main problem occurs. If loaded as part of the page header when offline, it silently fails to load and maps are not displayed. Nor is there any sort of error message displayed.

````
<script src="https://maps.googleapis.com/maps/api/jssensor=true"></script>
````

The easiest method I found to solve this is to use the functionality that [Cordova][cordova] provides in the device plugin. This plugin sends messages to us when the devices is initially ready, when it comes online, and when returns from the background. You can use these along with programmatically loading the [Google Maps][maps] script and viola! Problem solved! Thank you to [Coding With Spike][spike] and [Loading Google Maps in Cordova the Right Way][spike]. Note the code below is an excerpt of the application's code meant to convey the idea not meant to be runnable as-is.

````javascript
function loadMapsApi() {
    //console.log("loadMapsApi()");
    if (navigator.connection.type === Connection.NONE) {
        return;
    }

    if (typeof google == "undefined" || typeof google.maps == "undefined") {
        //console.log("Maps API not loaded");
        $.getScript('https://maps.google.com/maps/api/js?callback=onMapsApiLoaded');
    } else {
        //console.log("Maps API already loaded");
        setTimeout(function(){onMapsApiLoaded();});
    }
}

(function(global) {
    "use strict";
    //console.log("main.js: global function()");

    $( "[data-role='navbar']" ).navbar();
    $( "[data-role='header'], [data-role='footer']" ).toolbar();

    function onDeviceReady () {
        //console.log("onDeviceReady()");
    }

    function onOnline () {
        //console.log("onOnline()");
        if (map == null && $.mobile.activePage.attr('id') == "map") {
            loadMap();
            showMap();
        }
    }

    function onResume () {
        //console.log("onResume()");
        if (map == null && $.mobile.activePage.attr('id') == "map") {
            loadMap();
            showMap();
        }
    }

    document.addEventListener("online", onOnline, false);
    document.addEventListener("resume", onResume, false);
    document.addEventListener("deviceready", onDeviceReady, false);
})(window);
````

## Google Analytics
[Google Analytics][analytics]  caused me a few problems as well. Not by being off-line, but by trying to determine where to fetch `analytics.js` from. You can see this in the base code, provided by Google:

````javascript
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
````
A helpful, but not conclusive suggestion was to include the new `checkProtocolTask` option:

````javascript
ga('set', 'checkProtocolTask', null); // Disable file protocol checking.
````

Ultimately, having a different code path for [Cordova][cordova] and non-Cordova builds got the job done:

````javascript
{% raw %}{% if site.cordova %}
    var analyticsURL = "{{ site_root }}js/analytics.js"; // local for Cordova
{% else %}
    var analyticsURL = "//www.google-analytics.com/analytics.js";
{% endif %}{% endraw %}
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document, 'script', analyticsURL, 'ga');
````

## Ready for Offline
Now the app is ready native bundling and will work nicely online and offline. The changes for [jQuery][jquery], [jQuery Mobile][jqm] and [Google Fonts][fonts] are relatively simple -- host and load them locally. The changes for [Google Fonts][fonts] is similar but with a twist -- two-step host and load them locally. [Google Analytics][analytics] involved a minor code change dependent on the deployed platform (web vs native). And the changes for [Google Maps][maps] is the most complex. All of the changes together provide a more robust application that degrades gracefully when bandwidth is limited or the device goes offline.

Now, back to my list of getting the app ready for publication in the App Stores.

 [adam]: https://adam.garrett-harris.com/how-to-sign-and-publish-a-phonegap-app-in-the-google-play-store
 [gsign]: http://developer.android.com/tools/publishing/app-signing.html#cert
 [spike]: https://codingwithspike.wordpress.com/2014/08/13/loading-google-maps-in-cordova-the-right-way/
 [jQm]: http://jquerymobile.com
 [jquery]: http://jquery.com
 [cordova]: http://cordova.apache.org
 [maps]: https://developers.google.com/maps
 [analytics]: http://www.google.com/analytics/
 [fonts]: http://www.google.com/fonts
 [pmwht]: http://pmwht.org
