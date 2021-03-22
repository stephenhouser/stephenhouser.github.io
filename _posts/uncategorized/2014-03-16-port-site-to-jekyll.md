---
title: 		Port Site to Jekyll
date: 		2014-03-16 21:25:38
thumbnail:
category:   website
tags: 		  [website]
keywords:
description:
---
![Jekyll](http://jekyllrb.com/img/logo-2x.png)

This weekend has gone, well..., a little off-track. I started out
working on the [Good Turn Web][1] to update some of the [JSON][4] and
[Google App Engine][3] code to be a little cleaner. Actually, I was
resolving tickets I made for myself in [JIRA][2].

The changes were to add a bit more of a dynamic aspect to the home page
of [Good Turn Web][1]. Currently the home page shows a map of recent
good turns. But the map is statically built on the server-side with the
[Django][6] template engine. My goal, and the intent of the [JIRA][2]
ticket, was to build a [JSON][4] interface to the backend database and
allow the home page and other pages to pull the data ([AJAX][5]-style)
and populate the page dynamically, on the user's browser.

Well. I did that. Then I got off track...

  [1]: http://goodturn.stephenhouser.com
  [2]: https://atlassian.com/jira
  [3]: https://developers.google.com/appengine/
  [4]: http://www.json.org
  [5]: http://en.wikipedia.org/wiki/Ajax_(programming)
  [6]: http://www.djangoproject.com

