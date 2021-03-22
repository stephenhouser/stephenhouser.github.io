---
title: 		'Zero the Desk'
date: 		2017-03-21 10:20:00
category:   computer-science
tags: 		[software, computer-science]
keywords:
description:
---

> After a recording session on one of those large mixing desks, after you've twiddled countless knobs and push around many faders you do something called zeroing the desk. This is were you turn every control and push every fader back to zero, so that when the next engineer comes in he or she isn't going to jump out of their seat when a large sub-bass whacks them straight in the face and possibly blows something up. -- [Brendan Dawes](https://superyesmore.com/zeroing-the-desk-3a166215eee0758e9e84d1b76eacdf7f)

This cleanup after every project is something I often forget and regret every time. Brendan, in 
his article, has some nice clear actions and descriptions of them; Tagging, Archiving, Cleaning Up, and Play. My process is similar in some ways and depends on the project itself. Courses are 'recurring projects' for me and the ones I'm most diligent about. Other projects, not so much. There's always something to improve upon.

## Post Course Cleanup

Roughly I try to make sure all the documents are in PDF format so that I can share them with others and reprint anything in the case that the original format gets deprecated. Any code goes into a private git repository, though I only rarely go back to it. The biggest task is to make sure my folders are clean for the next offering of the course and that I can rely on importing slides and assignments from the last offering.

- [ ] Download all grades and student submissions (from Blackboard)
- [ ] Double check downloaded grades open in Excel (CSV)
- [ ] Export all handouts to PDF format (from Google Docs)
- [ ] Export all lecture notes and slides to PDF format (from Keynote, etc.)
- [ ] Clean up temp files and or intermediate files
- [ ] Commit any code I wrote to `git` and push to my private git server
- [ ] Move *the semester* into folder named `COS XXX [Fall|Spring] YYYY` within `COS XXX`

## Post Project Cleanup

I'm much looser on development work. It's hard to say when a project is over, so many seem to linger in the not-complete yet not-active state. Once I get better at recognizing a project is no longer active perhaps I can get better post project clean up. It's usually the research notes, pictures, web-clips, thought provoking assets and such collected from the web that give me the most grief. I call these `unversioned` files. A little more on that problem below.

- [ ] Update README.md, INSTALL.md, and other documentation files to be accurate
- [ ] Update any issue tracking (TODO.md) to synchronize with the state of released code
- [ ] Update any issue tracking (TODO.md) to synchronize with the state of released code
- [ ] Make sure `master` is the current released code and that it is clean
- [ ] Commit any non-production changes to new branch, label it something like `future`
- [ ] Push to git server (private or [GitHub](http://github.com))
- [ ] Archive notes, pictures, etc. into an `unversioned` folder (with private git repo)
- [ ] Double-check Archive of everything is getting backed up
- [ ] Remove working and now duplicate copies of everything that is archived.
	
The `unversioned` folder is a trouble spot for me. I tried [git-annex](https://git-annex.branchable.com) for one project to manage these files with reasonable success. There are a few active projects that I may convert to using [git-lfs](https://git-lfs.github.com) once I get a better understanding of it. My paranoia about losing files, even the ones that never get accessed again, often keeps this migration from moving forward.

## Reflect, Think, Play

Perhaps here is my most important part of project cleanup, in the reflection of what I've done and what *could* be next. I usually put a bit of *blue sky* into the end part of a project. I collect those, "this would be really cool" features and make sure they are on the todo list. While they might be half-baked ideas, and badly worded, I like to keep them. Ideas after all are free and bits are cheap.
