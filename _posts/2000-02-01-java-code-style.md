---
title: Guidelines for Programming Style (Java version)
keywords: java code programmin style usm computer science
description: USM Computer Science department's guidelines for programming style, for use by students, faculty, and staff.
tags: [development, courses]
created: 2000-02-01 12:00:00
date: 2000-03-14 12:00:00
thumbnail: /logos/java-logo.png
permalink: /java-code-style/
---
Many programs are modified during their useful life, either to correct errors or to extend their capabilities. It has been estimated that as much as 80% of the cost of software development is incurred by such modifications during the so-called "maintenance period" of the software lifecycle. In most cases, the programmers making the modifications are <strong>not</strong> the authors of the program, and their task is eased if the code has been written to be understood. We here discuss a few techniques which help to make the source code of a program more intelligible. Part of your grade on the programming assignments for this course will be determined by how thoughtfully you incorporate these ideas in your solutions to the problems.

This text is adopted from the Department of Computer Science's Guidelines for Programming Style (C/C++ version).

There are three techniques which we will discuss here : the use of mnemonic identifiers, pretty-printing, and documentation.

## The Use of Mnemonic Identifiers

The classes, methods, variables, procedures, and functions that you declare in your programs must all be given symbolic names so that you may refer to them in the executable part of the code. The Java compiler does not care what names you use, provided they meet the criteria for legal identifiers and are not used to identify more than one object. A person reading your code, however, is reminded of the role the object plays in the program as a whole if the identifier is a term that suggests that role. A judicious selection of identifiers can make your purpose and intention a lot clearer.

Although Java does not require any particular choice of capitalization or use of underscores, tradition is that variable names and methods (functions) begin with a lowercase letter and have the first letter of each word capitalized, as in <code>payRate</code>, or <code>computeInterestRate</code>. Class names traditionally follow a similar convention but start with an uppercase character, <code>Manager</code> or <code>Employee</code>. <em>final</em> variables are all uppercase using underscores between words, as in; <code>UPPER_BOUND</code> or <code>TX_CHARACTER</code>.

Typically, constants and variables represent things, so noun phrases are appropriate choices to name them. For example:

{% highlight java %}
float pi = 3.14159;
char blank = ' ';
int hoursPerDay = 24;
float hoursWorked, wagePerHour, totalWages;
int reservedCustomers, walkInCustomers;
char reply;
final int TIME_LIMIT = 30;
{% endhighlight %}

suggest more than <code>x</code>, <code>y</code>, or <code>z</code>. Identifiers such as <code>x</code>, <code>y</code>, and <code>z</code> should only be used if the value has no significance other than the fact that it is a real number. Identifiers such as <code>i</code>, <code>j</code>, and <code>k</code> are typically used to stand for arbitrary integer values. (An exception to this might be for customary names in some mathematical formulas. For example, the formula for a line in 2 dimensions is <code>y = a*x b</code>. A quadratic expression is <code>a*x*x b*x c</code>.)

The disadvantage of mnemonic identifiers is their length. They take more time to type and are more likely to be incorrectly typed. A technique to get around this is to use short names while you develop the program, and to then substitute longer names before you pass it in. Most editors have a string substitution command (find/replace) that will let you substitute for the string everywhere in your program. Also, use consistent, meaningful abbreviations to shorten identifiers (e.g. hrs for hours or ctrl for control).

One last word on identifiers. It is unwise to use identifiers that are the same except for only a few characters, since they are easy to confuse. For example:

{% highlight java %}
float firstRateOfPay;
float secondRateOfPay;
{% endhighlight %}

are better than

{% highlight java %}
float rateOfPay1;
float rateOfPay2;
{% endhighlight %}

## Pretty-printing
Pretty-printing refers to the way in which the source code is laid out on the page. There are two aspects of pretty-printing : the use of white space and indentation.

### The Use of White Space
In general, it is a good idea to "air out" your source code, that is, to leave plenty of white space (blank lines and spaces) in it. It is easier to read code that is not densely packed. With this in mind you should observe the following rules.

* Never more than one statement to a line.
* Put a list of variables in columns rather than horizontally across the page.
* Put spaces between operands and operators of expressions.
* Put spaces after commas.
* "Paragraph" your code by grouping statements that perform a task and putting blank lines between groups.

### Indentation
Indentation is used to identify major sections of the program. Statements within the main block are indented. Also statements within any function are indented. Indentation is also used to indicate that some statements are subordinated to certain tests, as the <em>then</em>-part and <em>else</em>-part of an <em>if-then-else</em> statement are indented from the <em>if-then</em> and <em>else</em>, or the loop body is indented from the <em>while</em>, <em>do-while</em>, or <em>for</em>. <strong>at least three columns should be used to indent</strong>; any less is not noticeable down a long page. Most modern editors have an indent mode that automatically performs certain indentations for you.

There are a number of different schemes or indentation patterns to be found in practice. Whichever one you choose, be consistent with it. Use the text as a base for your mode, but feel free to make changes if you think they aid in program clarity.

## Documentation
Documentation refers to the comments that you place in the source code. More generally, it refers to <strong>all</strong> written material that helps to explain how a software system or program is to be used and maintained, including manuals. There are essentially three kinds of documentation that you need to be aware of : <em>prologs</em>, <em>in-line comments</em>, and <em>javadoc</em> (which is specific to Java).

### Prologs
For the convenience of the grader, we ask that the source code of your program begin with a prolog in the form of a comment that identifies you, the course and section, and the assignment, as shown in the following examples.&nbsp; This&nbsp; is a prolog that identifies you.

{% highlight java %}
/*
 * Name: Alan Turing
 * Course: COS 160,TuTh 11:30-12:45
 * Project: Exponent, Homework #3
 * File Name: Exponent.java
 */
{% endhighlight %}

or

{% highlight java %}
// Name: Alan Turing
// Course: COS 160,TuTh 11:30-12:45
// Project: Exponent, Homework #3
// File Name: Exponent.java
{% endhighlight %}

The comment on the right starts at the <code>/*</code> and terminates at the <code>*/</code>. The comments on the left each start with the <code>//</code> and terminate at the end of that line.

After the program header statement there should be a prolog in the form of an extended comment that includes a brief description of what the program does, including a discussion of the input, the output, and how the output is derived from the input. It should also include any assumptions that the program makes about the input, that is, it should specify what the program expects to see, what it can handle, and what it cannot handle.

Roughly, this prolog should contain an overview of what the program does.&nbsp; If it does something complex, a brief introduction or reference to the methods used should be given. For example:

{% highlight java %}
/*
 * This program reads in someone's height in feet and&nbsp; inches and
 * calculates the number of centimeters that is the metric equivalent
 * of the height.
 *
 * The program does not test the input data for validity.
 */
{% endhighlight %}

### In-line Comments

Usually the only comments that are required in a well modularized program are those in the prologs. If there is some obscure code or the module is very long, additional comments may be helpful. Usually the rule is that a block of comments is followed by a block of code. It is unusual to have a single comment line followed by a single line of code.

In-line comments are comments placed in the executable part of the program to explain at a higher level what the code is doing. What constitutes good in-line commenting is a controversial subject and opinions vary widely. The purpose of a comment is to connect the low-level Java statements with some larger purpose in the plan of the program, so comments should never merely repeat the code, as in

{% highlight java %}
x++ ; // add 1 to x
{% endhighlight %}

Loops may be good candidates for comments. Ask yourself "what does this loop do?". Put the answer in the comment.

What you regard as good commenting will likely change as you become more familiar with Java. Sometimes, if your identifiers are chosen carefully, comments would appear redundant, as in the following comment to a procedure call

{% highlight java %}
guess = getValidValue(); // get a valid value for guess
{% endhighlight %}

Clearly, the comment does not amplify what is already there, and it should be removed. Code that reads like a comment, as this fragment does, is said to be "self-documenting". Comments should be placed so that they are easy to find. There are two common choices for comment placement, immediately above or immediately to the right of the code to which the comment refers. Under no circumstances should the comments interrupt or obscure the indentation pattern that you are using.

You will find that while you are engaged in writing a program you understand it fairly well, but that when you look at it again several months later it is mysterious. It is even more difficult to penetrate code written by someone else. Until you have experienced the joy of modifying someone else's poorly written code you will probably not appreciate the value of paying careful attention to writing code that not only performs the task it is supposed to, but also does it in a clear and understandable way. In the meanwhile, follow the guidelines we have given here because there is a substantial penalty if you do not.

### Javadoc Comments
Java introduces a new type of comment known as <em>javadoc</em> comments. Javadoc comments are meant to make your code somewhat self-documenting. The special <em>javadoc</em> processor converts properly commented code to HTML. The HTML pages created describe the classes, methods, and variables you define. When you look at the Java API documentation, you are in fact reading HTML pages created from the original source code by using the javadoc tool.

More information on writing javadoc comments can be found at the following Internet sites:

<a href="http://java.sun.com/products/jdk/javadoc/writingdoccomments.html">How to Write Doc Comments for Javadoc</a>
(http://java.sun.com/products/jdk/javadoc/writingdoccomments.html)

<a href="http://java.sun.com/j2se/javadoc/index.html">Javadoc Home Page</a>
(http://java.sun.com/products/jdk/javadoc/index.html)

## Functions (methods)

### Naming functions

Functions are a mixed bag. A function that returns a <em>boolean</em> value can often be named by the question that it answers. Many people begin the names of such functions with "is". Other times a function calculates a specific value for its input arguments, and the phrase should indicate what that value is, as in "greatestCommonDivisorOf" or "squareRootOf". Some examples follow.

{% highlight java %}
isPrimeisWithinRange
isWillingToPlay
wantsToPlay
midpointOf
maxOf
{% endhighlight %}

These are not the only possibilities, but should give you an idea of what we expect.

### Prologs for functions

Functions should also have prologs before their header statements, preferably in javadoc format. Function prologs should include a list of formal parameters. Each entry in the list should include an indication of whether it is an <strong>input</strong>, an <strong>output</strong>, or an <strong>input/output</strong> parameter, and a discussion of its use, if the identifier does not adequately explain it. When using javadoc comments, assume that <em>@param</em> tags refer to <strong>input</strong> parameters and <em>@return</em> is an <strong>output</strong> parameter, only specify variations from this standard. For example,

{% highlight java %}
/**
 * This function calculates the metric equivalent in centimeters
 * of the values in the variables feet and inches.
 *
 * @param feet feet part of height
 * @param inches inches part of height
 * @return height in centimeters
 */
float calculateHeight( int feet, int inches ) {
    ...
}
{% endhighlight %}

In a well modularized program, the prolog may be the only comment needed within a function.
