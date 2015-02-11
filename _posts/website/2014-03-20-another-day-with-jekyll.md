---
title: 		Another Day With Jekyll and My Website
date: 		2014-03-20 14:33:00
thumbnail:
category:	website
tags: 		[website]
keywords:
description:
---
![Jekyll](http://jekyllrb.com/img/logo-2x.png)

So here I am, another few days into [Jekyll][1] and a statically
generated website. It was a rabbit hole and the bottom is/was in sight.
Oddly, it was not as deep as some other ones I've been down. Here's my
current state of affairs with my [Jekyll][1] relationship.


The whole of my site is rather basic. The overall architecture is laid
out and includes a few basic categories, though not exactly how Jekyll
identifies categories.

* Courses
* Projects
* Publications and Writing
* Data Sets

Toss in the `about` and `home` pages and you have my site in a nutshell.
The styling was done in a few stylesheets, one for each page type from
above. A handful of projects had their own styles embedded to address
project specific issues (embedded Java Applets, Flash, etc.).

I had initially set out, two or more, years ago to have a local template
based site. All the pages were from a few core templates that I would
copy and then edit. This got quite tedious. I do have access to
[Dreamweaver][4] but did not want to rely on it in the future. It's
quite expensive. Also I didn't want to employ any server-side code as
the [University][3] provides only static page functionality. A similar
situation exists for hosting on [Google Drive][2].

Apple's now dead [iWeb][5] was attractive for some time, but it
generated very large files and a very large site footprint. That was
another *feature* I wanted to avoid. Needless to say, my plans for a
[Python][6]-based template system never panned out.

Fast-forward to 2014 and I needed to make some updates. Just a few mind
you. That's how it always starts.

All the `course` and most of the `project` pages were converted from
HTML to [Markdown][6]. This was liberating and awkward at the same time.
[Markdown][6] is nice in it's textual representation and inclusion of
HTML, but I have not yet mastered it. Specifically how to nest lists and
code within lists. It was liberating as I stripped out all the HTML
header, footer, and markup tags. I could read my text again!

It was a multi-step process as I refined and refactored the template
pages.  I started with a one-to-one migration and then continually
refactored until I was at what I think are the minimal number of
templates. Along the way they got marked up more and more with [liquid template][7]
code. I'm not real happy with the amount of [liquid][7]
code, nor the inablilty to express what I want to, but it gets the job
done. There seems to be no method to reverse-sort a list by date for
pages. This leaves my course and project listings sorted alphabetically
where I would prefer them sorted in descending date order -- so current
courses appear at the top.

The `home` page internally remains prety much as it was previously.  I
stripped the header footer and use my default template to add those
ornaments. Similarly with the `about` page. The complication on these is
the *connections* with icons and links to social media, github, and
other resources. I've not gotten the responsive aspect of these to work
as I would like.

The last rework of the site added responsiveness to the layout. When
viewed on a mobile deivce the course, project, or other data appear as a
list element, aka the iPhone and Android table/list view. I liked and
repeated this design on the revision. In actuallity, the brunt of all
the work was in this phase, getting the CSS to do what I wanted it to.

The CSS refactoring was a similar, one-to-one migration and then
successive refinement and refactoring. The last one, thus far, was to
get down to a single `site.css` that included everything except for the
[jekyll][1] provided code syntax highlighting. It also included starting
from zero and adding only the styles needed to get the job done. I had
developed a feel that the CSS, as I refined and refactored, was getting
bloated with styles that were redundant or overridden in other areas. It
was also, just plain hard to read. I'm not sure if I solved the
readability problem but there seem to be fewer rules than I started
with! I'll count it as a win.

So, the proof will be in the pudding. Will articles, like this be easy
to add in the future? Will I be able to add instances of courses easily?
Will new projects be able to get added easily, quickly, and with
relevant information? These are things that I can only test over time.

  [1]: http://jekyllrb.com
  [2]: https://developers.google.com/drive/web/publish-site
  [3]: http://usm.maine.edu
  [4]: http://adobe.com/
  [5]: https://www.apple.com/support/iweb/
  [6]: http://daringfireball.net/projects/markdown/
  [7]: http://liquidmarkup.org
