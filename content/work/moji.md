---
title: Moji 👋👉
description: Moji is a delightfully simple URL shortener for emoji lovers. It was a fun project that I built to learn more about the usage of FaunaDB. It uses Next JS and FaunaDB for fast & short URLs.
date: 1589993500002
image: moji_lfuowu.png
link: http://xn--up8hd.ml/
---

Moji was a fun little project that I built in an afternoon to learn a bit more about FaunaDB and Next.js. It was very interesting to see how easy and well designed the FauanaDB api is and I will surely be using it for projects with a much bigger scope.

> Warning: I know that this is not the best way to build a URL shortener and that something server-side will be much better and quicker. However this program was not built to be the best but rather as an educational project

The code for Moji was surprisingly simple, all that happens is that when a user is on any page that is an alias (a dynamic url page in Next.js using a [alias].js file) the website makes a request to the the FaunaDB database and checks if the alias is in the database. If it is, then we redirect the user to the URL attached to that alias, if not then we redirect the user back to the home page.

That's it, honestly this project was surprisingly easy to build because of the way Next.js and FaunaDB are designed. I also remade the whole project using Vanilla.js (still client-side so not the fastest) and it was still not that difficult and I found it very rewarding. I'll be rebuilding many more simple projects in Vanilla.js to test the limits.
