---
title:      Portland Jewish History Trail
date:       2025-08-01 19:44:38
thumbnail:  /pmjht/icon-76@2x.png
category:   software
tags:       [mobile, software, javascript, iOS, android]
keywords:
description:

layout:     project
project:    pmjht
archive:	 false
permalink:  /pmjht/
---

A new history trail application in and around Portland Maine celebrating Jewish History and heratige!
Based on my previous work with the [Portland Women's History Trail](/pmwht) and working with
the [Maine Jewish Museum](https://mainejewishmuseum.org) and [Documenting Maine Jewry](https://mainejews.org).

The app, like the Women's History Trail is built using [jQuery Mobile][3] and [jekyll][5] to create a complete HTML5/CSS3/JavaScript application that will eventually be deployed to the Apple app store and Google Play store (using [Cordova](https://cordova.apache.org)).

Currently the app is available on the web [https://portland.mainejewishhistorytrails.org](https://portland.mainejewishhistorytrails.org). It is designed for mobile devices, but works well on desktop systems as well.

[![pmjht feature screen]({{site.baseurl}}/assets/pmjht/pmjht-feature.png)](https://portland.mainejewishhistorytrails.org)

As expected, the content is all [markdown][6] and incredibly simple to maintain.
[Jekyll][5] is used to convert the content to HTML which is then
laid into templates for each content type (trail, sites, etc.).
With the templates [jekyll][5] spits out a completed "application."

Much of the framework from the Women's History Trail was carried forward but there
have been a lot of changes in technology since then and it was nice to have the
oppurtunity to streamline a lot of the inner workings and update the core. All those updates
are also getting back-ported to the Women's Trail as well! Updates all around.
