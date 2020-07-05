---
title:      Portland Women's History Trail Prototype
date:       2014-05-16 21:25:38
thumbnail:  /projects/pmwht/water-girl-small.png
category:   projects
tags:       [mobile, development]
keywords:
description:

project:    PMWHT
---
This past week I had a bit of time in-between other work and projects to
develop a quick [prototype][4] for [Eileen Eagan][1]'s [Portland Women's
History Trail][2] in Portland (Maine). To put things together quickly
and ensure cross-platform compatibility, I used the old standby, [jQUery
Mobile][3] and threw in a little [jekyll][5] to allow simple
development-side templates.


[![prototype screen capture][screencap]][4]

[Eileen][1]'s original electronic version is long gone, so work began by
scanning and OCR-ing the paper copy she dropped off with me. At this
point, I'm only prototyping and only needed content that looks
plausible. Getting the content updated and ready for the final version
is a task for someone else. The OCR gave me this reasonable set of
content.

The content gets pasted into [markdown][6] as it is incredibly simple to
use and again, just a prototype. With [jekyll][5] this could be
full-fledged HTML in the future. With [jekyll][5] I can then apply the
templates for each content type (trail, sites, etc.) and spit out the
completed "application." Just a smidgen above drop-dead simple.

Before you go off and click on the link to see the [prototype][4], you
should know that not all the content was brought in, just enough to show
the general idea of the application and design. The Congress St. trail
is the only one that has any sites, and as below, the map is quite
non-functional.

Also there are still quirks that need to be sorted out. Navigation
within a trail and site is not broken but close. The application is
within a bottom tabbed interface and then has a navigation within each
tab. I've not gotten it to look and work quite right in this
configuration. This is perhaps more a symptom of me not knowing how to
do this properly in [jQuery Mobile][3] than it is a problem with the
framework. Also, There's problems with the map markers that seems to be
just a JavaScript scoping problem that needs to be resolved. All the
markers show the same title.

The [prototype][4] was relatively easy to get up and running in a few
hours. It has the features and ideas that make it easy to show others,
including non-technical folks. It gives the feel of the design and shows
a possible implementation. And, as with any prototype, it needs work.

With that all said, go and [give it a try][4].

{% include pmwht-links.html %}


  [1]: http://usm.maine.edu/wgs/eileen-eagan
  [2]: https://usm.maine.edu/sites/default/files/history/A%20Woman's%20History,%20Eagen.pdf
  [3]: http://jquerymobile.com
  [4]: http://pmwht.org
  [5]: http://jekyllrb.com
  [6]: http://daringfireball.net/projects/markdown/
  [screencap]: {{"/projects/pmwht/pwht-prototype-2014-05-16.png" | prepend:site.assetsurl}}
