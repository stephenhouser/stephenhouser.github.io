---
title:      About
date:       2021-03-22 00:00:00
tags:
category:
keywords:   stephen houser about
description: >
    Details pertinent information about Stephen Houser (me) including work
    history, education, other sites, and some links.
layout:     page
permalink:  /about/
---
![Stephen at Architalx Opening]({{site.baseurl}}/assets/images/stephen-architalx.png)

Stephen Houser is a technology professional with extensive experience in
software development, data networking, and information technology project
management. An adjunct faculty member in the Department of Computer Science, he
teaches courses in data communications, operating systems, mobile development,
and robotics. Mr. Houser is an enthusiastic software developer, woodworker,
tinkerer, father, and scoutmaster, who enjoys the outdoors as much as the
indoors with his two children.

Stephen's professional and research activities fall into three broad categories:
management/leadership, software (mobile) development, and digital studies. As a
veteran technology leader, he continues to advance technology leadership through
seminars, books, conferences, and institutes. A long-time software developer, he
uses the mobile platform and has published or delivered numerous successful apps
on iOS and Android. Mr. Houser's keenness for interdisciplinary work leads him
to frequently cross the borders of computer science and technology in order to
creatively apply or modify the tools and approaches of computing in fields such
as art, gaming, and communication.

## More Places to find Stephen
<div id="connections-right">
    <a href="http://usm.maine.edu"><img class="hero" src="{{site.baseurl}}/assets/logos/usm-horizontal.gif" alt="USM Logo" /></a><br/><br/>
    <a href="http://bowdoin.edu"><img class="hero" src="{{site.baseurl}}/assets/logos/bowdoin.png" alt="Bowdoin Logo" /></a><br/><br/>
    {% for account in site.data.social %}
        {% if account.icon %}
            <a href="{{ account.url }}">
                <img style="height: 50px; padding: 5px;" src="{{site.baseurl}}/assets{{account.icon}}" alt="{{ account.name }}" title="{{ account.name }}"/></a>
        {% endif %}
    {% endfor %}
</div>

<div id="connections-left">
	<ul>
	{% for account in site.data.social %}
		{% if account.type != 'email' %}
			<li>
			{% if account.url %}
				<a href="{{account.url}}">{{account.name}}</a>
			{% else %}
				{{account.name}}
			{% endif %}
			{% if account.username %}({{account.username}}){% endif %}
			</li>
		{% endif %}
	{% endfor %}
	</ul>
</div>

## Education
<!-- * <b>2003-present</b> Ph.D. Student, <a href="http://www.umcs.maine.edu">Computer Science</a>, <a href="http://www.umaine.edu">University of Maine</a> -->
* <b>1993-1996</b> M.S. <a href="http://usm.maine.edu/cos">Computer Science</a>, <a href="http://usm.maine.edu">University of Southern Maine</a>
* <b>1985-1993</b> B.S. <a href="http://usm.maine.edu/cos">Computer Science</a>, <a href="http://usm.maine.edu">University of Southern Maine</a>

## Professional

Current:

* <b>2015-Present</b> Senior Director of Academic Technology and Consulting, <a href="http://bowdoin.edu">Bowdoin College</a>
* <b>2020-present</b> Adjunct Lecturer, <a href="http://usm.maine.edu/cos">Computer Science</a>, <a href="http://usm.maine.edu">Bowdoin College</a>
* <b>1994-present</b> Adjunct Professor, <a href="https://www.bowdoin.edu/computer-science/">Computer Science</a>, <a href="https://bowdoin.edu">University of Southern Maine</a>

Prior:

* <b>2009-2015</b> Executive Director for <a href="http://usm.maine.edu/computing">Computing Services</a> <a href="http://usm.maine.edu">University of Southern Maine</a>
* <b>2006-2009</b> Director, ITNS &amp; DBAS, <a href="http://usm.maine.edu/computing">Information and Technology</a>, <a href="http://usm.maine.edu">University of Southern Maine</a>
* <b>2001-2006</b> Director Database and Application Support, <a href="http://usm.maine.edu/computing">Information and Technology</a>, <a href="http://usm.maine.edu">University of Southern Maine</a>
* <b>1991-2001</b> Software Developer, <a href="http://usm.maine.edu/computing">Information and Technology</a>, <a href="http://usm.maine.edu">University of Southern Maine</a>
* <b>1989-1991</b> Software Developer, <a href="http://www.schroff.com">Schroff Development Inc.</a>

[Full Resume](https://stephenhouser.com).

## Web Standards

<a href="http://validator.w3.org/check?uri=referer"><img src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Strict" /></a>
<a class="imagelink" href="http://jigsaw.w3.org/css-validator/"><img src="http://jigsaw.w3.org/css-validator/images/vcss" alt="Valid CSS" /></a>

This site is designed to adhere to the strictest web standards and is
validated regularly to ensure compliance.

<!--
[![Valid XHTML 1.0 Strict][2]][1]
[![Valid CSS!][4]][3]

  [1]: http://validator.w3.org/check?uri=referer
  [2]: http://www.w3.org/Icons/valid-xhtml10
  [3]: http://jigsaw.w3.org/css-validator/
  [4]: http://jigsaw.w3.org/css-validator/images/vcss
-->
## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.