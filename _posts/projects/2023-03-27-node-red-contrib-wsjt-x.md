---
title: 		WSJT-X Nodes for Node-RED
date: 		2023-03-26 12:00:00
thumbnail: 	/logos/node-red.jpg
category: 	radio
tags: 		[radio, development, software, javascript, nodered]
keywords:   node-red nodered radio wsjt wsjtx ft8 javascript, node
description: nodes for node-red flow based programming environment to work with WSJT-X software

layout:     project
archive:	false
permalink:  /node-red-contrib-wsjt-x
---
A set of "nodes" for the flow based programming tool [Node-RED](https://nodered.org) that connect to, control, and monitor [WSJT-X](https://wsjt.sourceforge.io/wsjtx.html) software over the network. With these nodes you can decode messages sent from WSJT-X and inject the data into a flow or using data in your flow encode and send commands to WSJT-X.

![WSJT-X Decoding]({{site.baseurl}}/assets/projects/wsjt-x-decode.png)

Releases are installed from within [Node-RED Nodes for ](https://nodered.org) via the "Manage Palette" features. Current and test releases are available on [NPM](https://www.npmjs.com/package/node-red-contrib-flexradio).

* Discussion on [groups.io/nodered-hamradio](https://groups.io/g/nodered-hamradio)
* [node-red-contrib-wsjt-x on NPM](https://www.npmjs.com/package/node-red-contrib-wsjt-x)
* [node-red-contrib-wsjt-x on Node-RED Nodes for ](https://flows.nodered.org/node/node-red-contrib-wsjt-x)
* [Source code on GitHub](https://github.com/stephenhouser/node-red-contrib-wsjt-x)

<!-- * [Tutorial Videos on YouTube](https://www.youtube.com/playlist?list=PLFeSzqhDMutUQJwLXwDYo94M8RThH9I6U) (playlist) -->

A big THANK YOU to Dave W02X, Alan WA9WUD, Adrian VK4TUX, and all the other members of [nodered-hamradio on groups.io](](https://groups.io/g/nodered-hamradio)) that have helped in making these nodes possible. Thier tireless reworking and adapting their existing flows and setup to use these nodes, testing them with their varied equipment, and encouragement have really been instrumental in getting to a usable set of nodes.
