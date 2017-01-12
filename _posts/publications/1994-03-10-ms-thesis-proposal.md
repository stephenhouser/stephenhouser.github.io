---
title:      Network File Server Performance in a University Environment - A Case Study (Proposal)
date:       1994-03-10 12:00:00
category:   publications
tags:       [publications, networks]
keywords:   
description:
---
## Background and Definition
Novell's NetWare file server software product is widely used. At this
university alone there are over 20 Novell NetWare file servers,
servicing over 300 personal computers. These computers reside both in
general access student microcomputer labs and in faculty and staff
offices. The servers are used to provide access to shared applications
and shared data. Microcomputers in the student labs are diskless
clients, using the file server for nearly all disk resources. The
performance of the file server in this environment is paramount to
creating an efficient computing environment.


## Problem Statement
There is a lack of performance reports available describing Novell
NetWare file servers. The only readily available reports are done
in-house by Novell.  These reports describe NetWare;s limited statistics
gathering features. They do not give in-depth description of network
server disk performance. Many server implementation details are not
revealed in these reports, leading network managers to *guess* at
methods of improving performance. Clearly, a need exists for a
repeatable way of obtaining detailed statistics about the performance
and behavior of a Novell NetWare file server.

## Objective of Study
This study is intended to produce performance details of a Novell
NetWare file server. The results of thesis study will be useful in
understanding and tuning the performance of Novell NetWare network file
servers. As a further objective, we hope to develop tools and methods
for measuring and evaluating other network file servers. A description
of Novell NetWare is an important part of this study. It is needed to
provide a better understanding of the internals of NetWare such that we
can evaluate performance.

## Description of Methodology
In the study we plan to attack the analysis problem in two ways; monitor
network traffic (client-server communications) to and from the file
server and monitor traffic on the file server's disk channel. Using a
network *sniffer* combined with our own software we can trace and record
traffic to and from the file server. This trace data can then be
analyzed to give a clear picture of workstation file access patterns. By
using a SCSI bus monitor, the disk channel of the file server can be
monitored while the network is traced. The data from the SCSI bus
monitor can be correlated with the network trace data, giving an
indication of file server cache performance and the overall performance
of the file server. This data can also be used in tuning disks and disk
drivers for use with Novell NetWare.

## Related Documents

* [Network File Server Performance in a University Environment - A Case Study]({% post_url 1996-08-07-ms-thesis %})
* [MSCS Thesis Full Text (PDF)]({{"/publications/MSCS-Thesis.pdf"|prepend:site.filesurl}})
* [MSCS Thesis Proposal (PDF)]({{"/publications/MSCS-Thesis-Proposal.pdf"|prepend:site.filesurl}})