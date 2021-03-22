---
title: 		The Art of Readable Code - Key Ideas
date: 		2013-02-15 12:00
thumbnail:  http://ecx.images-amazon.com/images/I/51vnhzxNDaL.jpg
category:   computer-science
tags: 		[software, computer-science]
keywords:
description:
---
Here are a number of the "Key Ideas" I pulled from my reading of [The Art of
Readable Code](http://www.amazon.com/The-Readable-Code-Theory-Practice/dp/0596802293) by [Dustin Boswell](http://dustwell.com) and Trevor Foucher.

![The Art of Readable Code](http://ecx.images-amazon.com/images/I/51vnhzxNDaL.jpg)

* Code should be easy to understand.
* Code should be written to minimize the time it would take for someone else to read it.
* Pack information into your names.
* It's better to be clear and concise than to be cute.
* Actively scrutinize your names by asking yourself, *"what other meanings could someone interpret from this name?"*
	* kConstantName
	* MACRO_NAME()
* Use inclusive limits
	* kMaxItems -- if (x < kMaxItems)…
    * first and last -- where last is the last element; set(x=first, y=last)
    * begin and end -- where end is past the last element; for (i = begin; i < end; i++)
    * Booleans - isX, hasY, canZ, shouldP -- don't use negated names, e.g. disable_ssl.
* Consistent style is more important than the "right" style. Match existing style!
* The purpose of commenting is to help the reader know as much as the writer did.
* Don't comment on facts that can be derived quickly from the code itself.
* good code > bad code + good comments
* Use common comment prefixes
  	* TODO: stuff I have not gotten to yet
    * FIXME: known broken code (fix for release)
    * HACK: admittedly an inelegant solution
    * XXX: DANGER! there is a major problem here
* Comments should have a high information to space ratio
* Make all conditionals, loops, and other changes to flow as natural as possible -- written in a way that doesn't make the reader stop and read your code.
  	* left side = value being interrogated, the one that changes more frequently
    * right side = the more constant value
    	* ex. bytes_read <= bytes_expected
* Instead of minimizing the number of lines, a better metric is to minimize the time needed to understand it.
* Look at code from a fresh perspective when you're making changes. Step back and look at is as a whole.
* Break down your giant expressions into more digestible pieces.
* Beware of clever nuggets of code -- they're often confusing when others read the code later.
* Make variables visible for as few lines of code as possible.
* The more places a arable is manipulated, the harder it is to reason about its current value.
* Code should be organized so that it's doing only one task at a time.
* The most readable code is NO CODE AT ALL.
* Test code should be readable so that other coders are comfortable changing or adding tests.
* You should pick the simplest set of inputs that completely exercise code.
* Prefer clean and simple test values that still get the job done.

These are merely the notes I took. They are not meant to represent anything
more than that. I highly recommend you read the book, it's really good.
