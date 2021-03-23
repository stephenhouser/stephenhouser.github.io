---
title: 		The Quirky Land of Cordova
date: 		2016-03-24 13:00:00
thumbnail:
category:   computer-science
tags: 		[software, computer-science, javascript]
keywords:   
description:
---
There are a number of quirky tasks to complete when you get ready to publish an app in either the Apple App Store or the Google Play Store. They are not the type of thing I, as a developer, usually think about when starting a project. As the [Portland Women's History Trail][pmwht] gets nearer to "submission ready," I've steadily chopped away at that list, but the first major task was making a fundamentally HTML/CSS/JavaScript application work when bundled and offline took a bit of research and ultimately, doing things the "right way."


The app is developed in [Cordova][cordova] and uses several frameworks like [jQuery][jquery], [jQuery Mobile][jqm], [Google Maps][maps], [Google Analytics][analytics], and a few [Google Fonts][fonts]. When the app is run and the user has network connectivity, things work as expected. The problem comes when the app is bundled to a native app with [Cordova][cordova] and launched when *offline*.

You might be thinking, "Isn't the [Portland Women's History Trail][pmwht] primarily an on-line experience with maps and all?" You, of course are right. The trail app does require connectivity to fetch the [Google Maps][maps] needed to show and navigate to each site making some amount of data necessary. However, we can still pay attention to the network needs of the app and keep them to a minimum. In a perhaps futile attempt to save on their data plans.

Hosting the frameworks locally also provides the benefit that they won't change without our knowing and break the app. This is good. But, this can also be bad as we will need to re-publish when vulnerabilities or problems in the frameworks are discovered and fixed.

Ultimately, there's no extravagant trick to all this. Simply download and customize your [jQuery][jquery], [jQuery Mobile][jqm], and [Google Fonts][fonts]. Put them into your `JavaScript` and `CSS` folders and you are most of the way there. [Google Analytics][analytics] is a little more complex. You need to tweak the boilerplate analytics code a little to allow requests from `file://` URLs:

    var analyticsURL = "{{ site_root }}js/analytics.js"; // local for Cordova
    var analyticsOptions = {'storage': 'none', /*'clientId': device.uuid*/};
    
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document, 'script', analyticsURL, 'ga');
    
    ga('create', 'UA-CODE-GOES-HERE', analyticsOptions);
    ga('set','checkProtocolTask',null);
    ga('set','checkStorageTask',null);

The keys here are disabling the `checkProtocolTask` and `checkStorageTask`. Of course [Stack Overflow](http://stackoverflow.com/questions/27561676/how-do-i-configure-my-google-analytics-account-to-accept-requests-from-file-u) has several questions and solutions. The above is what worked for this project.

[Google Maps][maps] poses some unique problems when you go *offline* but I'll save those for another time.


  [maps]: https://developers.google.com/maps/documentation/javascript
  [analytics]: http://www.google.com/analytics
  [fonts]: https://www.google.com/fonts
  [jquery]: https://www.google.com/fonts
  [jqm]: http://jquerymobile.com
  [pmwht]: http://pmwht.org
  [cordova]: https://cordova.apache.org
