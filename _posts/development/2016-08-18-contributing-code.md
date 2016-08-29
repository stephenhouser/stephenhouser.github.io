---
title: 		Contributing Code
date: 		2016-08-18 08:11:00
thumbnail:
category:	development
tags: 		[deveopment]
keywords:   
description:
---

It's really easy to start writing code and it's really fun. I mean *REALLY* fun. 
I develop a sort of  hyper-focus once the editor opens and somewhere after the second 
or third compilation attempt. The warnings and errors from typos in my code scorll by
on the screen. I fix them, I think on the problem a little more, I adjust the approach,
refactor, reorganize. A few comments here to remind myself what my architecture is,
sprinke in some sample inputs and outputs like fairy dust to attract a correct
solution. I'm in hevan, angels are singning, kittens are being born.

Then I hit a roadblock and do a quick search on [Stack Overflow](http://stackoverflow.com). 
The flow is still with me, this is part of the process. But then, it hits me.
I come upon a result that makes me realize someone has already solved this problem.
Not the coding problem I'm having at the moment, but the whole problem that I'm writing 
code for in the fist place. They've written my program already!

Dammit. I was having fun.

They didn't do this part right. They used some esoteric programming language, likely
so they could have fun rather than to solve the actual problem. They indent strangely.
Their shoes are too small to be a real programmer. Worse, I think they used `emacs` and
not `vi` (or the reverse depending on your religion). Any excuse I can think of runs
through the analysis of how I should continue. Should I build or should I grow?

In this case, I decided to contribute to someone else's existing code. This is a 
difficult decision for me as I expect it may be for you. You have to sacrifice
some of your non-negotiables. You have to give up tabs for spaces, non-braced `if`
statements, `//` comments. The list is endless. Buy in now and be done with it.
Once you choose the path of contributing don't look back. You are working on someone
else's project not your own. You are working in a community with standards that,
if you want to be a part of, you must adopt.

Loog at the details of the existing code style. While I cannot give a 
complete list, here are a few examples of things I look for:

* Indentation: Don't invent your own, match the existing tabs/space indents.
* Braces: Use the same brace spacing, e.g. `if(x==1)` vs. `if (x==1)` vs. `if ( x == 1 )` are all different.
* Comments: Use the same comment style as the rest of the code. `//` or `/* */` is just the start. Actually read their comments and match the style.
* Identifiers: Use the same or similar named identifiers. If the code uses Hungarian Notation, do the same.
* Language: Seems simple enough, use the same programming language. Don't mix things up on people.

See how the other developers interact with the project and each other.
If they discuss on forums, post on there. If they take issues on [GitHub](http://github.com), file
issues there. Better yet, if they use [GitHub](http://github.com), fork and make a pull request.

The goal is to make your code look like their code. Make it flow,
make it readable, make it part of the code not a wart you stuck on there and then
walked away from. Make your interaction be part of the team not apart from the team.
Then when you start your own project, use your style, ask for contributors to do the same. And ask
them all to have fun in that hyper-focused zone of writing solid code.

UPDATE 2016/08/29: I found a nice post in my news feed this morning, [45 GitHub Issues Dos and Dont's][https://hackernoon.com/45-github-issues-dos-and-donts-dfec9ab4b612#.pdw2ovmea] by Jason Chen that seems quite appropriate to my own post. It's got some great things to be aware of.  



