---
layout: post
---

title:      Sun 386i ("Roadrunner") Frequently Asked Questions
thumbnail:  /sun386i-icon64.png
tags:       [publications]
keywords:
description:
date:       1996-01-24 12:00:00
created:    1994-08-12 12:00:00

layout:     [post, page, project, course, default]
category:   [courses, projects, publications]
project:    [gt, usa, ]
course:     [cos246, cos399, cos450, cos460, cos497]
archive:    [true, false]

Here are some thoughts on what I'd like to add to the current (new) site:

* Plugin that lets you tweak content based on Google Analytics data:
    http://www.developmentseed.org/blog/google-analytics-jekyll-plugin/

* Would like some form of image gallery. Something that can pull
up images -- maybe from _data files?

* need to modify deployment so that I'm not always updating large files
    * /files
    * /assets
    * should these be over on media.XXX?

* Pay attention to projects in the destination
    * CampusCrush
    * Shawn-Sk8r
    * pwht
    * ...

* use post_url for internal links
	{% post_url /subdir/2010-07-21-name-of-post %}


* Custom post assets and scripts
	http://mattgemmell.com/page-specific-assets-with-jekyll/

````
---
custom_css: authormarks
custom_js:
- jquery.min
- authormarks
---
````

and in HEAD

````
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
````
