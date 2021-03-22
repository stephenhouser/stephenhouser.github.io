---
title: 		Fowler on Continuious Integration
date: 		2016-07-08 10:11:00
thumbnail:
category:   computer-science
tags: 		[software, computer-science]
keywords:   
description:
---
In working with students and colleagues on good development practices, 
and generally keeping my own skills and knowledge up-to-date, I've been 
doing more reading on *continuious integration*. Below are some highlights
and key ideas I pulled from reading [Martin Fowler's article on Continuous Integration](http://www.dccia.ua.es/dccia/inf/asignaturas/MADS/2013-14/lecturas/10_Fowler_Continuous_Integration.pdf).

Defining continuious integration:

> "The essence of it [continuious integration] lies in the simple practice of everyone on the team integrating frequently, usually daily, against a controlled source code repository."

About creating branches in source code control:

> One of the features of version control systems is that they allow you to create multiple branches ... but it's frequently overused and gets people into trouble. Keep your use of branches to a minimum.

On what to store in source code control:

> In general you should store in source control everything you need to build anything, but nothing that you actually build."

Automating building and testing. Important even if you work alone as when your development machine crashes or you
get a new machine, having set this up will make your life pure joy:

> ... anyone should be able to bring in a virgin machine, check the sources out of the repository, issue a single command, and have a running system on their machine.

Building from an IDE vs. command-line. My emphasis added, the IDE should not be your primary build environment:

> It's okay for IDE users set up their own project files and use them for *individual development*. However it's essential to have a master build that is usable on a server and runnable from other scripts.

Automated testing:

> ... include automated tests in the build process. Testing isn't perfect, of course, but it can catch a lot of bugs - enough to be useful.

It's always about communication!

> Integration is primarily about communication. Integration allows developers to tell other developers about the changes they have made. Frequent communication allows people to know quickly as changes develop.

Don't be "that person" who breaks everything:

> The one prerequisite for a developer committing to the mainline is that they can correctly build their code. This, of course, includes passing the build tests.

Even working alone (across multiple machines) this has been a problem for me:

> Conflicts that stay undetected for weeks can be very hard to resolve.

Work in small chunks, commit and test frequently. Always keep your product compiling and working:

> Frequent commits encourage developers to break down their work into small chunks of a few hours each. This helps track progress and provides a sense of progress.

> ... ensure that regular builds happen on an integration machine and only if this integration build succeeds should the commit be considered to be done.
> ... A corollary of this is that you shouldn't go home until the mainline build has passed with any commits you've added late in the day.

Continuious Integration is *not* nightly builds, it is *continuiously* building:

> Many organizations do regular builds on a timed schedule, such as every night. This is not the same thing as a continuous build and isn't enough for continuous integration. ... Nightly builds mean that bugs lie undetected for a whole day before anyone discovers them.

Oscilating feces detetion and cleaning made simple:

> If you deploy into production one extra automated capability you should consider is automated rollback. Bad things do happen from time to time, and if smelly brown substances hit rotating metal, it's good to be able to quickly go back to the last known good state.

Reducing risk, bean counters will love this one:

> ... the greatest and most wide ranging benefit of Continuous Integration is reduced risk.
> ... At all times you know where you are, what works, what doesn't, the outstanding bugs you have in your system.
> ... the degree of this benefit is directly tied to how good your test suite is.

How do you start?

> Get everything you need into source control get it so that you can build the whole system with a single command.
> Try to identify the major areas where things go wrong and get automated tests to expose those failures.
> Find someone who has done Continuous Integration before to help you.

References and Further Reading:

* [Continuious Integration Guide Page](http://www.martinfowler.com/delivery.html)
* [Continuous Integration, Improving Software Quality and Reducing Risk by Paul Duvall, Steve Matyas, and Andrew Glover](http://martinfowler.com/books/duvall.html)
* [Continuous Delivery Reliable Software Releases through Build, Test, and Deployment Automation by Jez Humble and David Farley](http://martinfowler.com/books/continuousDelivery.html)

