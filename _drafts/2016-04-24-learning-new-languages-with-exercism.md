---
layout: post
title:  "Learn new languages with Exercism"
permalink: /learning-new-languages-with-exercism
comments: true
copy: true
links: http://exercism.io/cli
tags: CODE REVIEWS EXERCISM
---

[Exercism](http://exercism.io/){:target='_blank'} is a great tool for developers of all levels to learn new languages or just refine their skills, by providing short exercises to be completed. I came across it when I was looking for a series of exercises to do, to help and build the habit of coding each day, without the need for a large project to work on. <!--excerpt_separator--> Once completed, each exercise is reviewed by other users of Exercism, this along with varying difficulty, kept it interesting and meant I wanted to constantly come up with the most elegant solutions. I found being able to provide feedback is a really rewarding process and helps start discussions about the code.

<!-- who what when why how -->

# How it works

 - You fetch an exercise which will contain a README defining the problem and a suite of failing tests
 - Solve the problem by making the tests pass and add more tests if you think they are necessary
 - Submit your code to Exercism allowing other developers to view your code and make recommendations
 - (Optional) If you need / want to you can resubmit your code with any new changes as a new iteration

# Setting up Exercism (Mac)

Exercism is packaged on homebrew so installing is as simple as running:

~~~
> brew update && brew install exercism
~~~

Once installed you will need to setup your key:

~~~
> exercism configure --key=YOUR_API_KEY
~~~

You can find your key by going to user > API Key. Once you have configured your API Key you can can change the directory that exercises are fetched to by running the following:

~~~
> exercism configure --dir=~/some/other/place
~~~

# Using Exercism

To fetch an exercise for a language you can run:

~~~
> exercism fetch LANGUAGE
~~~

This will grab the next exercise in the series for the language you have chosen. Once you have finished the exercise or have made changes to an iteration and all of the tests pass and you are happy to get reviewed on your solution, use the following to submit it:

~~~
> exercism submit path/to/your/solution.LANGUAGE
~~~  

# Conclusion

If you are looking for a quick way to be able to write some code, to learn a new language, refine your skills or just for the fun of it, then I think Exercism is a great tool to do so. It provides a quick entry to a range of languages without needing to know the full ecosystem and tooling around the edges. Giving developers the opportunity to write code in small units without feeling the pressures of being overwhelmed by the size of the problem at hand. If like me you want to start building a habit, then Exercism can be very helpful to do this while giving a platform for much more.

What are your experiences with Exercism? Do you know of other tools like it?

# Links
 - [Exercism](http://exercism.io/)
 - [My Exercism profile](http://exercism.io/mattphillips)  
