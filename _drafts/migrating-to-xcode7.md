---
title: 		Migrating to Xcode 7.3 and iOS 9
date: 		2016-03-24 13:00:00
thumbnail:
category:	development
tags: 		[deveopment]
keywords:
description:
---
There are a number of quirky tasks to complete when you get ready to publish an app in either the Apple App Store or the Google Play Store. They are not the type of thing I, as a developer, usually think about when starting a project. As the [Portland Women's History Trail][pmwht] gets nearer to "submission ready," I've steadily chopped away at that list, but the first major task was making a fundamentally HTML/CSS/JavaScript application work when bundled and offline took a bit of research and ultimately, doing things the "right way."

The app is developed in [Cordova][cordova] and uses several frameworks like [jQuery][jquery], [jQuery Mobile][jqm], [Google Maps][maps], [Google Analytics][analytics], and a few [Google Fonts][fonts]. When the app is run and the user has network connectivity, things work as expected. The problem comes when the app is bundled to a native app with [Cordova][cordova] and launched when *offline*.
