# TypeScript: Object is possibly 'null' Error

This repository demonstrates a common TypeScript error: 'Object is possibly 'null'.  This error occurs when you try to access properties of a variable that might hold a null or undefined value.

## Bug

The `bug.ts` file contains a function `printName` that attempts to access the `toUpperCase()` method of a string variable (`name`) which is declared as potentially `null`. TypeScript correctly flags this as a potential error because if `name` is null, calling `toUpperCase()` will throw an exception.

## Solution

The `bugSolution.ts` file provides two solutions to handle this situation:

1. **Optional Chaining (?.)**: This operator safely accesses a property only if the object exists. If the object is null or undefined, it returns undefined instead of throwing an error.
2. **Nullish Coalescing Operator (??)**: This operator returns its right-hand operand when its left-hand operand is null or undefined, and otherwise returns its left-hand operand.  This provides a default value to prevent an error.

Choose the solution that best fits your specific needs.  Optional chaining is generally preferred for simply skipping the operation when the object is nullish, while the nullish coalescing operator is helpful for providing a fallback value.