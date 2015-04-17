---
title:      Portland Women's History Trail
date:       2015-02-09 19:44:38
thumbnail:  /projects/pwht/icon-76@2x.png
category:   projects
tags:       [mobile, development]
keywords:
description:

layout:     project
project:    PWHT
archive:	false
---
A mobile, web-based version of the [Portland Women's History Trail][2]
originally created by [Eileen Eagan][1] and Polly Welts Kaufman
in Portland (Maine). The app is built using [jQuery Mobile][3] and
[jekyll][5] to create a complete HTML5/CSS3/JavaScript application.


[![screen capture][screencap1] &nbsp; ![screen capture][screencap2]][4]

[Visit the Trail on the Web][4]

[![Android app on Google play][playlogo]][googlestore]

The content is all [markdown][6] and incredibly simple to maintain.
[Jekyll][5] is used to convert the content to HTML which is then
laid into templates for each content type (trail, sites, etc.).
With the templates [jekyll][5] spits out a completed "application."

The application is still under development so there are still quirks
that need to be sorted out. Navigation within a trail and site is not
broken but close. The current design is a bottom tabbed (aka iOS)
interface and then has a navigation within each tab.

The [prototype][4] was relatively easy to get up and running in a few
hours. It has the features and ideas that make it easy to show others,
including non-technical folks. It gives the feel of the design and shows
a possible implementation. And, as with any prototype, it needs work.

  [1]: http://usm.maine.edu/wgs/eileen-eagan
  [2]: https://usm.maine.edu/sites/default/files/history/A%20Woman's%20History,%20Eagen.pdf
  [3]: http://jquerymobile.com
  [4]: http://pmwht.org
  [5]: http://jekyllrb.com
  [6]: http://daringfireball.net/projects/markdown/
  [screencap1]: {{"/projects/pwht/pwht-map.png" | prepend:site.assetsurl}}
  [screencap2]: {{"/projects/pwht/pwht-site.png" | prepend:site.assetsurl}}
  [googlestore]: https://play.google.com/store/apps/details?id=com.maker9.pmwht
  [playlogo]: https://developer.android.com/images/brand/en_app_rgb_wo_60.png