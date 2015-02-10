---
title: 		Site Architecture Notes
date: 		2008-03-12 12:00:00
thumbnail:
category:	website
tags: 		[website]
keywords:
description:

revised: 	2008-03-12 12:00:00
---
This article outlines plans for redesigning Stephen's personal/work web
site located at http://people.usm.maine.edu. Work began in the Spring of
2008 to develop needed static content with a view towards a more dynamic
creation of index/listing pages and RSS content of updates.

## Goals

0. Clean and easy to navigate
1. Get students to course materials quickly
2. Show highlights of projects I have worked on
3. repository for data that people can use in projects
4. link to student work
5. easy to update, content managed in single places, portable to other formats.
6. rss, css, xml
7. integrate blogs, galleries, etc (long term)


## Plans

1. index page is manualy coded
2. category pages are automated build from content
3. content is all 1-level deep
4. content pages have common tags for processing (meta)
5. all scripts are run offline and generate site to upload
6. Three page types; INDEX, CATEGORY, CONTENT with three style sheets; index.css, category.css, content.css and the all inclusive site.css

## Want to build

* Golden rectangle picker
* AJAX weather from home/USM
* Daily Paris
* Voting
* Encryption toys
  + XOR breaker
  + Cryptoquip
* OS Tools (flash?)
  + processor scheduling
  + Disk Scheduling
  + memory use
* AJAX Grades?
  - each student picks a key; each grade-line gets encrypted with their personal key and put into one file and uploaded. they then visit a page that has javascript that asks for their key; grabs the encrypted file and decrypts their grade-line and displays it.
  - http://www.webtoolkit.info/javascript-base64.html Base64 Encode
  - http://home.versatel.nl/MAvanEverdingen/Code/ AES Encryption
  - http://www.hanewin.net/encrypt/aes/aes.htm AES encryption
  - http://recaptcha.net/apidocs/mailhide/
  - http://www.beanizer.org/site/index.php/en/Articles/Practical-uses-of-client-side-encryption.html
  - all grades in one file; one per line w/checksum at ent
  - JS trys to decrypt all lines, display one that cksum is right
  + keep grades in an encrypted file that gets decrypted by client side java script and

Sample Code

    for each student
        get key
        get grades
        ck=checksum(grades)
        line=base64-encode(encrypt(join(grades,ck),key))
        print line

    for each line
        msg=decrypt(line,key)
        grades,ck=split(msg)
        nck=checksum(grades)
        if ck=nck:  # woo hoo!
            display grades


## Structure

## Images

  * Home page
    - courses 115 high
    - projects 64 high

  * category pages
    - 64 high

### Stylesheets

- site.css            - entire site styles
  - category.css    - style for category (list) pages
  - content.css     - style for content pages
    - publication.css
    - project.css
    - course.css
    - data.css

### Pages

- Home Page (index.html)
  * Highlighted Courses
      * cos 450
      * cos 460/540
      * cos 399

  * Highlighted Items
      * Life
      * Mancala
      * Reading List

  - Full Category Pages
      + Courses (courses.html)
          o cos 214 UNIX
          o cos 215 Java for C
          * cos 399 Robots
          * cos 450 Operating Systems
          * cos 460 & 540 Networks
          * cos 497 Independent Study (iPhone Application Programming)

      + Projects (projects.html)
          * Life
              - life
              - source
          * Mancala
              - mancala
              - source
          * W1rex
              - w1rex
              - schematics
          * picSimon
              - picsimon
              - any source?
          * Kids Mame
              - kids_mame_1
              - source
          o BigBrother Stoplight
              - bblight
          o Shawn Skater (flash)A
              - source ?
          * TVRO Installation
              - tvro
          o XBox
              - xbox
          o Compaq MC-1
              - mc-1
          o Propellor Clock
              - source?

    + Publications (publications.html)
        * Java Code Style
        * Reading List
            - reading-list
        o Thesis
        * CMG 96
        * CMG 95

    + Data Sets (data.html)
        o Web logs
        o Lab logs
        o Temperature data
        o Packet traffic
        o Disk traffic

    * About Stephen (about.html)

The navigation pages are all at the top level with their graphic images located in the /images folder.

The projects, publications, data, etc. are all in individual directories off the top. Items may descend further but the processing scripts will look no deeper for items.

### Category pages (automated)

These are the "second level" pages that contain a listing of items. The idea is to be sort of like a blog where dated items get added and rolled through. Providing an rss file for these would be ideal as well as the html-ized viewable page. Can the html be build from the RSS?

These pages are completely automated build.

- pull data from the pages themselves; e.g. scan subdirectories and look at meta data to build XML

    meta name=description content=...
    meta name=category content=[project|data|publication]

- processing of meta tags creates RSS-like XML for
    publications.rss
    data.rss
    projects.rss
    index.rss (all combined)

- Processing afterwards then creates HTML templated pages to display the items for each category.

#### Category Styles


### Content Pages (directories)

This is where all the content is. These page should all have a common format and markup. They should all use the site.css to apply style.

META Tags needed:
Here is the required metadata for proper script processing:

{% highlight html %}
<DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
  <html>
  <head>
      <title>Conway's Game of Life</title>
      <meta name="keywords" content="conway life cellular automota java game"/>
      <meta name="category" content="project"/>
      <meta name="description" content="Java applet and application implementation of John Conway's Game of Life."/>
      <meta name="author" content="Stephen Houser"/>
      <meta name="revised" content="2002/09/30"/>
      <style type="text/css" media="screen">
          @import url(../site.css);
          @import url(../content.css);
      </style>
  </head>
{% endhighlight %}

### Content Styles

#### Content Format

To keep the header or information consistent; each content page should have the following opening H1 and DIV (which match the metadata):

{% highlight html %}
<body>
    <h1>Conway's Game of Life</h1>
    <div class="info">
        <p class="author">Stephen Houser</p>
        <p class="revised">September 30, 2002</p>
    </div>
{% endhighlight %}

### Course Pages

Course pages should not be much different than content pages. However they will have subdirectories to organize their content. This content should be easily integrated with the non-published portions.

### Google Analytics

{% highlight html %}
    <script src="http://www.google-analytics.com/urchin.js" type="text/javascript">
    </script>
    <script type="text/javascript">
        _uacct = "UA-3927991-1";
        urchinTracker();
    </script>
{% endhighlight %}
