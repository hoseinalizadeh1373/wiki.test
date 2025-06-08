---

---

# Introduction to Matching Patterns

This section is summarized based on the definition of matching patterns mentioned in the book "VoIP Training Reference with Asterisk Softswitch" by engineers Mojtaba Esfandiari and Mojtaba Najafi Moghadam. For more information, please refer to the original book.

The matching pattern in Simotel is implemented similarly to the Asterisk matching pattern, with the difference that, unlike Asterisk, there is no need to use the underscore (_) at the beginning of the pattern.

Typically, matching patterns use letters and symbols, each having a specific meaning.

:::info Information
Matching patterns are used in components like **IVR** and **Outgoing Route**.
:::

### Writing Matching Patterns

- **X**: This letter represents a digit between 0 and 9. In other words, if this letter appears in the matching pattern, it can be replaced by any digit from 0 to 9. For example, in the following pattern, any number between 0 and 9 will execute the command below.

```shell
X
```

- **Z**: This letter signifies replacing a digit between 1 and 9. For example, in the following pattern, any number from 1 to 9 will execute the command below.

```shell
Z
```

- **N**: This letter indicates replacing a digit between 2 and 9. For example, in the following pattern, any number between 2 and 9 will execute the command below.

```shell
N
```

- **[a-b]**: Represents a number between a and b. For example, in the following pattern, any number between 5 and 8 will be matched.

```shell
[5-8]
```

- **[abcd]**: One of the numbers specified inside the brackets, either a, b, c, or d. For example, in the following pattern, any of the numbers 3, 5, 6, or 8 will be matched.

```shell
[3568]
```

- **(period)**: Represents repeating at least one and at most an infinite number of digits and letters. For example, the following pattern includes all numbers that have at least 2 digits and start with a digit between 0 and 9.

```shell
X.
```
In the above example, note that the pattern must include at least one digit and can have an infinite number of digits and letters. The symbol (.) signifies repeating at least one digit.

- **(bang)!**: The exclamation mark represents repeating at least zero and at most an infinite number of digits and letters. For example, the following pattern includes all numbers that have at least 1 digit and start with a digit between 0 and 9.

```shell
1!
```

### Examples for Matching Algorithm

To clarify the concept, let’s explain the matching patterns with more examples.

```shell
ZXX
```
Includes any 3-digit number between 100 and 999 (e.g., 256 or 459).

```shell
9X.
```
Includes any number with at least three digits where the first digit is between 0 and 9 (e.g., 911 or 90912 or 90939899).

```shell
ZXXXXXX
```
Includes any 7-digit number (e.g., 2228045 or 4228045 where the first digit is not 0).

```shell
[2-5]6[02468].
```
Includes any 4-digit number where the first digit is between 2, 3, 4, or 5, the second digit is 6, and the third digit is 0, 2, 4, 6, or 8 (e.g., 368 or 262 or 566).

```shell
[0-9a-zA-Z].
```
Includes any number with at least 2 digits where the first digit is between 0 to 9 or a to z or A to Z. The second digit can be any combination of the previous (letter or digit) (e.g., 0912117 or 0098912117 or z0912117 or aZ0912117 or 0Az912117).