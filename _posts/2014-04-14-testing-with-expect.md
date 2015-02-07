---
title: Testing With Expect (and Netcat)
tags: [courses, cos450, development]
date:   2014-04-14 10:00:00
layout: post
---
Each time I teach Computer Networks (COS 460/540) the last two
programming projects focus on development of a TCP/IP protocol. In
setting the stage for the assignments, I pose as the customer who has
an existing software package that I want to network enable. The
developer (students) I'm looking to hire are being "contracted" to
develop both a server program and the associated socket-level protocol
that will network-enable my application.  This semester the service
was a distributed game matching service.

The product is a simple game between two players. The server system
needs to match up opponents and keep track of the games and player
history. Simple until you get to the game matching process in the
server and connecting two client threads together. But that's a topic
for another time and course.  In the Computer Networks course we
concentrate on the protocols, not the development of multi-threaded
applications. And that we fades away when it comes to grading time,
where I need to test if their server adheres to the protocol that was
agreed upon in class.

In the past, and in this course, I direct students to use [Telnet][3]
for simple testing and debugging of there server from the client-side
of the connection.  It continues to be a great TCP/IP program for
connecting to text-based protocols and running them by hand. However,
when it comes to mass testing a number of projects, and testing the
same things across all of them, [Telnet][3] does not offer the
automation I need. That's where [Expect][1] and [Netcat][2] come in to
the picture.

The web site for [Netcat][2] reads, "[Netcat][2] is a featured
networking utility which reads and writes data across network
connections, using the TCP/IP protocol." What it doesn't say is how
darn useful [Netcat][2] is for all kinds of other network stuff.  My
problem was solved in that synopsis though, read and write data across
the network. I needed a simple TCP/IP client that could send scripted
requests and receive the servers response. [Netcat][2] provides that
perfectly.

The second sentence on the [Expect][2] home page is the most telling,
"Expect really makes ... stuff trivial." That stuff being the
automation of "... interactive applications such as telnet, ftp,
passwd, fsck, rlogin, tip, etc."  [Expect][1] is designed to send
scripted requests, then wait for and evaluate received responses
against a set of expected responses. Layering this on top of
[Netcat][2] gives a complete TCP/IP protocol testing system.

Enough background, lets look at the details! The Game Matching Service
defines that after connecting to the server, the client should
receive a HELLO message, and then proceed to login using the LOGIN
request. Here's an example of that interaction using [Telnet][3] from
a Linux box:

````sh
$ telnet localhost 2222
200 Welcome to the Game Matching Server v1.0
LOGIN houser@maine.edu:0FF93785BC5AA9001
200 houser:0.6:6:4
````

The first line, after [Telnet][3] is sent from the server, the second
from the client (with the username and password), the third from the
server in response to a valid login. If the login failed with a bad
username or password, the server would send something like:

````sh
400 Invalid username or password
````

Putting this in [Expect][1] terms, we need to spawn [Netcat][2],
wait for the HELLO message, send our credentials, and check the
response.

````sh
#!/usr/bin/env expect
spawn nc localhost 2222
expect -re {200 [[:print:]]+\r\n}
send LOGIN houser@maine.edu:0FF93785BC5AA9001
expect {
	   -re {200 [\w\d]+:[\.\d]+:\d+:\d+\r\n}
	   -re {40\d [[:print:]]+\r\n}
}
````

The first line is straigt forward, spawn [Netcat][2] to connect to
the localhost on port 2222, this is where my server is listening. After
we spawn, we expect to receive the HELLO message, which consists of
a three digit code (aka HTTP and many others), followed by a sequence of
printable characters, then the carrige-return linefeed pair. If we don't
match this regular expression, [Expect][1] will timeout and exit with
a failure.

If the response does match the regular expression, [Expect][1] will continue
with the next line in the script, sending the LOGIN request across the
[Netcat][2] channel. The response from LOGIN is slightly more complex
as we have two alternatives, a valid and an invalid username and password
pair. In this example each alternative is coded as a regular expression,
in my production tests, I use only one of these as I am expecting
a successful login or a failed login as part of my test.

Here is a more complete example pulled directly from my LOGIN testing
script:

````sh
spawn nc localhost 2222
expect -re {200 [[:print:]]+\r\n}

	# Invalid before login
	send "GETP houser\n"
	expect -re {40\d [[:print:]]+\r\n}

	# Login
	send "LOGIN houser:pass\n"
	expect -re {200 [\w\d]+:[\.\d]+:\d+:\d+\r\n}

	# Invalid after login
	send "LOGIN houser:pass\n"
	expect -re {40\d [[:print:]]+\r\n}

	send "GETP\n"
	expect -re {200 [\w\d]+:[\.\d]+:\d+:\d+\r\n}

	# Invalid after login
	send "Silly rabbit, Trix are for kids!\n"
	expect -re {40\d [[:print:]]+\r\n}

close
````

These are only scratching the surface of [Expect][1] and [Netcat][2].
Together they have provided me with a stable and feature rich method
of testing adherence to the socket level, text-based protocol we
defined in class. The ability of [Expect][1] to spawn multiple
instances of [Netcat][2] at the same time allows me to test the
ability of servers to work with multiple clients simultaneously. The
flexibility of regular expressions, looping, and branching allow me to
fully test adherence to the protocol. And finally, the ability to
quickly add new test cases has allowed me to build a failrly complete
test suite that I can generate grades directly from.

[1]: http://expect.sourceforge.net
[2]: http://netcat.sourceforge.net
[3]: http://en.wikipedia.org/wiki/Telnet


