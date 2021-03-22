---
title: 		  Coding Style
date:       2017-04-20 14:23:00
category:	  software
tags:       [software] 		
---
# Coding Style

Notes and ideas about my coding style. Built from XXX years writing code in 
Pascal, C, Assembly (x86, IBM 360, 68000, 6502), BASIC, Python, Java,
JavaScript, LaTeX, Perl, Ruby, PHP, Swift, C++, Objective-C, LISP, and probably
a few more along the way.

This outline follows the chapters of [_Clean Code_ by Robert C. Martin]([)https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)

## General Ideas

1. Code should be written to be read. Compilers don't care about whitespace (Python excluded) make the code *human* readable.

1. Code should be as elegant as possible without sacrificing clarity.

1. Care about the code. Care about future extensions to the code. Care about code reuse.

1. Don't Repeat Yourself (DRY). Write code once. Keep it in one place. Don't write the same thing twice.

1. The most bug-free code is code that is never written. Only write code that is needed.

1. Work with frameworks and languages not against them.

1. Abstract problems to use well-known algorithms.

1. The Boy Scout Rule: "Try and leave this world a little better than you found it..."

## Naming

## C Specifics

* Use `is_`,`get_`, and `set_` prefixes.
* Constants, macros, and enums are in `ALL_CAPS`, `ALL_CAPS()`
* Function, variable, structure, and other names are lower case `with_underscores()`. Do not use `camelCase`.
* Tabs every 4 columns, use tabs not spaces.
* Pointer `*` is placed next to the variable, e.g. `int *p`.
* No space between function and parens or between parens and parameters, e.g. `int foo(x, y)`
* Comma, space, parameter for function definition and calling.
* One statement per line, one variable per line.
* Use `#if defined()` not `#ifdef`
* Always test, don't use implicit 'zero-test' or 'null-test'.
  ```
  if (x == NULL) {
      // when x is 0 or NULL
  }
  ```
* Opening brace at end of line, closing brace on line by itself, ident to match opening.
  ```
  if (sample == valid_sample) {
    // do something
  }
  ```

