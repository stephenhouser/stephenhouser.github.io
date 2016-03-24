---
title:  DRAFT Post Layout Information
date:   1990-01-01 12:00:00
category:	draft
tags:       [draft] 		
---

This is the standard header fields that are used in each post or page
header. The order should remain the same for all, just to keep my mind
at ease. There is no real significance to it.

    title:      Sun 386i ("Roadrunner") Frequently Asked Questions
    thumbnail:  /sun386i-icon64.png
    tags:       [publications]
    keywords:	keywords that get pu in the meta tag for the page
    description: >
    	A multiple line description of the post or page. The first
	greater than symbol indicates the text will be multiple
	lines and ending with the next variable item. This text
	goes into the meta description tag for the post or page.
    date:       1996-01-24 12:00:00
    created:    1994-08-12 12:00:00

    layout:     [post, page, project, course, default]
    category:   [courses, projects, publications]
    project:    [gt, usa, ]
    course:     [cos246, cos399, cos450, cos460, cos497]
    archive:    [true, false]

Here are some thoughts on what I'd like to add to the current (new) site:

- Plugin that lets you tweak content based on Google Analytics data: http://www.developmentseed.org/blog/google-analytics-jekyll-plugin/

- Would like some form of image gallery. Something that can pull
up images -- maybe from _data files?

- Pay attention to projects in the destination
    * CampusCrush
    * Shawn-Sk8r
    * pwht
    * ...
    * or should they go elsewhere?

* use post_url for internal links
	{ % post_url /subdir/2010-07-21-name-of-post % }


* Custom post assets and scripts: http://mattgemmell.com/page-specific-assets-with-jekyll/

In the page or post:

	---
	custom_css: authormarks
	custom_js:
	- jquery.min
	- authormarks
	---

And in HEAD layout:

    {% if page.custom_css %}
       {% for stylesheet in page.custom_css %}
       <link rel="stylesheet" href="/css/{{ stylesheet }}.css" media="screen" type="text/css">
       {% endfor %}
    {% endif %}

    {% if page.custom_js %}
       {% for js_file in page.custom_js %}
       <script src='/javascripts/{{ js_file }}.js' type="text/javascript"></script>
       {% endfor %}
    {% endif %}

* Circular pop-out menu on small devices: http://tympanus.net/Tutorials/CircularNavigation/index2.html
