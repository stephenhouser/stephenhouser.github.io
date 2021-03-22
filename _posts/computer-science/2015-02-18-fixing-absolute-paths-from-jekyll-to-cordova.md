---
title: 		Fixing Absolute Paths, From Jekyll to Cordova
date: 		2015-02-18 13:58:00
thumbnail:
category:      computer-science
tags: 		[software, computer-science]
keywords:
description:
---
[Jekyll][jekyll] has really been a great tool to develop a site with. It allows me to take a bunch of content and lay it into templates to generate a static website, with dynamic-like content, that can be served from nearly anywhere. With [jQuery Mobile][jqm] and some JavaScript thrown in, an entire application is easily born. This was the approach I took with the [Portland Women's History Trail][pwht] project. However, my troubles began when working to bundle the HTML5/CSS/JavaScript into an native app with [Cordova][cordova].

[Jekyll][jekyll] is designed to develop hosted websites, not applications to be deployed with [Cordova][cordova]. When the site is _compiled_, internal links are generated _as is_. Meaning no special processing is done to locate things _relatively_. There is some help for sites not hosted a the root of their domain, in using the `site.*` configuration, but this is not enough. In order for the site to work when packaged in [Cordova][cordova] all the links must be relative or you have to work out some method or patching them up to the internal location at runtime. Not fun.

Using a site map, we can look at a specific example.

````
    wwwroot/                                    
      index.html                                
      trails.html                               
      places.html                               
      map.html                                  
      places/                                   
        congress-street/                        
          c01-curtis-and-sons.html              
          c02-maine-sports-hall-of-fame.html    
          ...                                   
        munjoy-hill/                            
          m01-native-american-site.html         
          m02-peaks-island.html                 
          ...                                   
        ...                                     
      trails/                                   
        congress-street.html                    
        munjoy-hill.html                        
        ...                                     
      photos/                                   
        ...                                     
      css                                       
        ...                                     
      js                                        
        ...                                     
````

In the top-level pages (`index.html`, `trails.html`, `places.html`, and `map.html`) all is well. Their links to each other and to deeper pages all work with the default [Jekyll][jekyll] configuration. That is a link in `trails.html` referring to the Congress Street Trail gets constructed as `trails/congress-street.html`.

The problem crops up in those deeper pages. Using the Congress Street Trail as the example. In `trails/congress-street.html` the link for the first site is constructed as `places/congress-street/c01-curtis-and-sons.html`. Phoey. The URL is relative to the _top-level_ of the site.

[Jekyll][jekyll] has a setting in the configuration files to try and accommodate relocation of the site root. This however does not solve the problem as nested pages need to know their relative depth from the site root to make this work.

Not wanting to complicate the layout (template) pages, I took a stab at solving this with a simple Python script. The essence of it was, for each line in each `.html`, `.css`, and `.js` file

````python
line = re.sub(r"(href=)(['\"])/(.*?)\2", relrepl, line)
line = re.sub(r"(src=)(['\"])/(.*?)\2", relrepl, line)
````

where `replrepl` is defined as:

````python
def relrepl(match):
    if depth:
        fix = '../' * depth
    else:
        fix = ''

    return match.group(1) + match.group(2) + fix + match.group(3) + match.group(2)
````

I was quite content with this quaint post-processing approach for about 8 hours. Then it hit me, I was fighting the framework that [Jekyll][jekyll] provides. **_I almost always find that if things seem hard or impossible to do within the framework you are working with, your approach is wrong. You are not using the framework how it was designed, you are fighting it._**

The _in-framework_ approach is to use [Liquid][liquid] tags to figure out at what depth the page is and add that many `../`'s to the front of problematic URLs. Actually it's cleaner to create a variable (e.g. `site_root`) that has the right number of `../`'s and prepend that where needed. Unfortunately the variable scope in [Liquid][liquid] is very local, so the variable creation code needs to go at the beginning of any file that will use it. Here's a specific example, the project's includable page footer, `footer.inc`

{% raw %}
````
{% capture my_lvl %}{{ page.url | split:'/' | size }}{% endcapture %}{% capture site_root %}{% for i in (3..my_lvl) %}../{% endfor %}{% endcapture %}
<div data-id="footer" data-role="footer" data-position="fixed" data-tap-toggle="true" data-theme="a">
     <div data-role="navbar">
          <ul>
               <li><a data-tab="trails" href="{{ site_root }}trails.html" data-icon="home" data-transition="fade">Trails</a></li>
               <li><a data-tab="map" href="{{ site_root }}map.html" data-icon="location" data-transition="fade">Map</a></li>
               <li><a data-tab="places" href="{{ site_root }}places.html" data-icon="bullets" data-transition="fade">Sites</a></li>
          </ul>
     </div>
</div>

````
{% endraw %}

Note that all hard-coded URLs are prefix-less; they lack a `/` at their start, making them relative. This is contrary to many of the framework examples. In fact, [Jekyll][jekyll] generates `page.url` with the `/` prefix. For links to be relative that needs to be stripped off. The following does just that, on a page that lists all the sites associated with a particular trail.

{% raw %}
````
<ul id="place-list" data-role="listview">
	{% assign trail_places = site.places | where:"trail", page.trail %}
     {% for place in trail_places %}
          <li><a href="{{ place.url | remove_first:'/' | prepend:site_root }}">
               {{ place.title }}</a>
          </li>
     {% endfor %}
</ul>
````
{% endraw %}

Both of these approaches work in either a web-hosted and bundled application. They both make all the internal links relative to the current page. They both appear to function the same. However, the Python version uses a post-processing step that makes the generated product different in the web-hosted and bundled applications. This could easily introduce bugs or currently unseen functional differences that would be difficult to track down in the future. Working with rather than against the framework is the right choice.

  [liquid]: http://liquidmarkup.org
  [jqm]: http://jquerymobile.com
  [cordova]: http://cordova.apache.org
  [jekyll]: http://jekyllrb.com
  [pwht]: http://media.usm.maine.edu/houser/pwht

