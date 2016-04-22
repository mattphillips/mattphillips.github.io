---
layout: post
title:  "How to learn new languages with Exercism"
permalink: /learning-new-languages-with-exercism
comments: true
copy: true
links: http://exercism.io/cli
---

 <!-- TODO: add _ to any target blanks -->
[Exercism](http://exercism.io/){:target='blank'} is a great tool for providing an entry point to a new language without  having to worry about knowing the full ecosystem of a language.
<!--excerpt_separator-->
## How it works:

 - You fetch an exercise which will contain a README with a problem definition and a suite of failing tests
 - Solve the problem by making the tests pass and add more tests if you think they are necessary
 - Submit your code to Exercism allowing other developers to view your code and make recommendations


This can provide developers a very naive introduction into TDD and allows them to receive feedback on their code from peer code reviews.  

## Setting up Exercism (Mac)

Exercism is packaged on homebrew so installing is as simple as:

~~~ bash
> brew update && brew install exercism
~~~

Once installed you will need to setup your key:

~~~ bash
> exercism configure --key=YOUR_API_KEY
~~~
