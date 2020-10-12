# Trey Suiter's Amazing US Constitution Preamble Word Parser

This exceptionally fancy webpage will parse the US constitution preamble and return how many words begin with "t", end with "e", and both begin with "t" and end with "e".

You can see this action for yourself at the following link:

https://treysuiter.github.io/quavered-challenge/

## Problems I ran into while creating the parser

My main issue was removing the characters that were not letters or spaces so that I could access the index of the last letter of each word easily. Instead of writing logic to remove everything I didn't want, I found it easier to write a regex to keep everything I did want.

Another issue was just with refamiliarizing myself with vanilla JavaScript document query selectors after using React for so long. Luckily, I left myself decent comments in some vanilla JS projects at NSS that I used for reference.