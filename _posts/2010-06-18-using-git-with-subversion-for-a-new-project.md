---
title:  Using Git with Subversion for a New Project
date:   2010-06-18 08:51
tags: development
---
A few weeks before leaving for a conference, where connectivity was in question, I asked the question, "how can I continue to use version control on my project?" Subversion has been my best friend for quite a while, both at work and home. Even though most of my projects are single-developer project, the work, test, check-in cycle has been the staple of my work cycle. It allows me to be ruthless with removing large chunks of code, with re-factoring like a madman, and letting the keyboard take over in tying new approaches.

So, there I sat wondering, how to take this on the road. Git has been out for a while and promises a robust and distributed version control paradigm. Even better, git-svn is touted to allow a (local) git repository connected to a (remote) subversion repository. This setup could allow me to keep a definitive old-school subversion repository on a redundant, backed-up, central server where I felt it was safe.

In the end, my results varied and I abandoned the whole idea.

I had several false starts trying to learn the git nomenclature, several failures when trying to synchronize back to subversion after making local changes, and several failures when trying to pull changes that were made on other computers. Even several failures in just initializing the git repository from a subversion source.
Perhaps it was more the change in thinking from subversion to git than anything. It was difficult to get git to synchronize back to subversion properly and reliably, especially when another user (myself on another computer) was using a subversion copy and making changes. Granted, this was not in the use case outlined initially, but hey, it's life.

I may try mercurial as an alternate to git in the future, it has some of the same disconnected features and looks similarly appealing.
